import { createFileRoute, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { TopBar } from "@/components/TopBar";
import { Toggle } from "@/components/Toggle";
import { useChatsStore } from "@/store/chats";
import { FEATURE_META, type FeatureKey } from "@/data/chats";
import { FeatureIcon, ICON_GRADIENTS } from "@/components/FeatureIcon";
import { FeatureSettings } from "@/components/FeatureSettings";

const ALL: FeatureKey[] = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];

export const Route = createFileRoute("/chat/$chatId/feature/$featureKey")({
  component: FeatureSettingsPage,
  notFoundComponent: () => <div className="p-8 text-center pb-32">Навык не найден</div>,
  loader: ({ params }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    if (!ALL.includes(params.featureKey as FeatureKey)) throw notFound();
    return null;
  },
});

function FeatureSettingsPage() {
  const { chatId, featureKey } = Route.useParams();
  const fk = featureKey as FeatureKey;
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));
  const toggleFeature = useChatsStore((s) => s.toggleFeature);

  if (!chat) return <div className="p-8 text-center pb-32">Чат не найден</div>;
  const f = FEATURE_META[fk];
  const active = isActive(chat, fk);

  return (
    <div className="min-h-screen pb-24">
      <TopBar
        title={f.label}
        subtitle={`${chat.name}${chat.emoji ? " " + chat.emoji : ""}`}
        back={{ to: "/chat/$chatId", params: { chatId } }}
      />

      <div className="px-4 pt-4 space-y-4 max-w-[520px] mx-auto">
        {/* Hero */}
        <div className="glass-card rounded-[20px] p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: active ? ICON_GRADIENTS[fk] : "rgba(255,255,255,0.08)" }}
            >
              <FeatureIcon feature={fk} size={22} color={active ? "white" : "currentColor"} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold">{f.label}</div>
              <div className="text-[12px] text-muted-foreground">{f.desc}</div>
            </div>
            <Toggle
              defaultOn={active}
              onChange={(v) => {
                toggleFeature(chatId, fk);
                toast(v ? `${f.label} включён` : `${f.label} отключён`);
              }}
            />
          </div>
        </div>

        {/* Settings */}
        <FeatureSettings fk={fk} chat={chat} />
      </div>
    </div>
  );
}

function isActive(c: Parameters<typeof FeatureSettings>[0]["chat"], fk: FeatureKey): boolean {
  switch (fk) {
    case "summary":
      return c.summary?.active ?? false;
    case "voice":
      return c.voice?.active ?? false;
    case "podcast":
      return c.chatPodcast?.active ?? false;
    case "kb":
      return c.knowledgeBase?.active ?? false;
    case "antispam":
      return c.antispam?.active ?? false;
    case "anonymous":
      return c.anonymous?.active ?? false;
  }
}
