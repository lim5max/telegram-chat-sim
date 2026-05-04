import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
  Bot,
  Send,
  Paperclip,
  Smile,
  Mic,
  Phone,
  Search,
  MoreVertical,
  ChevronLeft,
  Users,
  AppWindow,
  X,
} from "lucide-react";
import { useChatsStore, type GroupMsg } from "@/store/chats";
import type { Chat } from "@/data/chats";

const searchSchema = z.object({
  anon: z.string().optional(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChatLogixBot — Telegram" },
      { name: "description", content: "AI-саммари ваших Telegram чатов" },
    ],
  }),
  validateSearch: searchSchema,
  component: TelegramScreen,
});

type InlineBtn = { label: string; action: string };

type Msg = {
  id: number;
  from: "bot" | "user" | "member" | "system";
  author?: string;
  text: string;
  time: string;
  buttons?: InlineBtn[];
  voice?: { duration: string; caption?: string };
  deleted?: boolean;
};

const now = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

let idSeq = 1000;
const nextId = () => ++idSeq;

const initialPrivate: Msg[] = [
  {
    id: 1,
    from: "bot",
    time: "09:42",
    text:
      "👋 Привет! Я — ChatLogix.\n\nПомогаю управлять потоком информации и улучшаю взаимодействие между участниками чатов. Работаю как внутри добавленных чатов, так и лично для вас.\n\nС чего начнём?",
    buttons: [
      { label: "📊 Расскажи о пользе для чата", action: "onboard-admin" },
      { label: "✨ Расскажи о пользе для меня", action: "onboard-user" },
    ],
  },
];

function TelegramScreen() {
  const [mode, setMode] = useState<"private" | "group">("private");
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b border-white/8">
        <div className="max-w-[640px] mx-auto px-3 py-2 flex gap-2">
          <button
            onClick={() => setMode("private")}
            className={`flex-1 text-[12px] font-medium py-2 rounded-full transition ${
              mode === "private" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"
            }`}
          >
            💬 ЛС с ботом
          </button>
          <button
            onClick={() => setMode("group")}
            className={`flex-1 text-[12px] font-medium py-2 rounded-full transition ${
              mode === "group" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"
            }`}
          >
            🔥 Группа
          </button>
          <Link
            to="/home"
            className="text-[12px] font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[oklch(0.55_0.16_225)] to-[oklch(0.58_0.14_245)] text-white flex items-center gap-1"
          >
            <AppWindow size={13} /> Mini App
          </Link>
        </div>
      </div>

      {mode === "private" ? <PrivateChat /> : <GroupChat />}
    </div>
  );
}

function PrivateChat() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const sendAnonymous = useChatsStore((s) => s.sendAnonymous);
  const chats = useChatsStore((s) => s.chats);
  const totalAnon = useChatsStore((s) => s.totalAnonSentToday);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const setSuperSummary = useChatsStore((s) => s.setSuperSummary);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const setSuperPodcast = useChatsStore((s) => s.setSuperPodcast);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);

  const [msgs, setMsgs] = useState<Msg[]>(initialPrivate);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [anonStep, setAnonStep] = useState<"idle" | "pick" | "compose" | "confirm">("idle");
  const [anonChatId, setAnonChatId] = useState<string | null>(null);
  const [pendingText, setPendingText] = useState("");
  const [ignoringMe, setIgnoringMe] = useState(false);
  const [showChatPicker, setShowChatPicker] = useState(false);
  const [onboardChatId, setOnboardChatId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFeature = useChatsStore((s) => s.toggleFeature);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  // Deep-link from /me: ?anon=chatId starts the anon flow on a specific chat
  useEffect(() => {
    if (search.anon) {
      const target = chats.find((c) => c.id === search.anon && c.anonymous?.active);
      if (target) {
        setAnonChatId(target.id);
        setAnonStep("compose");
        pushBot({
          text: `📣 Чат «${target.name}»\nНапиши анонимное сообщение. Никто не узнает автора 🤫`,
        });
      }
      navigate({ to: "/", replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pushBot = (m: Omit<Msg, "id" | "from" | "time">) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((prev) => [...prev, { id: nextId(), from: "bot", time: now(), ...m }]);
    }, 500);
  };
  const pushUser = (text: string) =>
    setMsgs((prev) => [...prev, { id: nextId(), from: "user", time: now(), text }]);

  const handleChatPicked = (chatId: string) => {
    setShowChatPicker(false);
    setOnboardChatId(chatId);
    const target = chats.find((c) => c.id === chatId);
    if (!target) return;

    const topicEmojis = ["💬", "💡", "📊", "🗂", "📍"];
    const topicCounts = target.topics.map(() => Math.floor(Math.random() * 40 + 8));
    topicCounts.sort((a, b) => b - a);
    const topicLines = target.topics
      .map((t, i) => `${topicEmojis[i % topicEmojis.length]} ${t} (**${topicCounts[i]} сообщений**)`)
      .join("\n");

    const freeLimit = 200;
    const processed = Math.min(target.used, freeLimit);
    const limitNote = target.used > freeLimit
      ? `Обработано **${processed} из ${target.used}** сообщений (бесплатный лимит — ${freeLimit}/день). Увеличить можно в настройках.`
      : `Саммари обрабатывает бесплатно до **${freeLimit} сообщений/день**.`;

    pushBot({
      text: `⚠️ Я не вижу историю сообщений в «**${target.name}**»\n\nДля корректной работы бота зайдите в настройки чата → «История сообщений» → включите хотя бы один раз. После этого можете выключить обратно, если хотите.`,
    });

    setTimeout(() => {
      pushBot({
        text: `Готово 👌 ChatLogix добавлен в «**${target.name}**»!\n\n🗓 Что обсуждалось вчера\nВсего было написано **${target.used} сообщений**\n\n${topicLines}\n\n${limitNote} Завтра тоже автоматически пришлю такое в чат.\n\nНастроить эмодзи, время и периодичность отправки можно в настройках.`,
        buttons: [
          { label: "⚙️ Настроить саммари", action: "onboard-admin-settings" },
          { label: "🛡 Расскажи про антиспам", action: `onboard-admin-show-antispam:${chatId}` },
        ],
      });
    }, 800);
  };

  const handleAction = (action: string, label?: string) => {
    if (label) pushUser(label);
    switch (action) {
      case "open-app":
        setTimeout(() => navigate({ to: "/home" }), 200);
        break;

      // ── Onboarding: Admin flow ──
      case "onboard-admin":
        pushBot({
          text: "Давай покажу, как работает саммари чата. Вот пример — одно саммари за день в чате **«Здоровое питание»**:\n\n🗓 Что обсуждалось вчера 28.04.2026\nВсего было написано **112 сообщений**\n\n🥗 Интервальное голодание 16/8 — опыт участников (**31 сообщение**)\n🏋️ Питание до и после тренировки (**24 сообщения**)\n🧴 Разбор составов протеиновых батончиков (**18 сообщений**)\n📋 Меню на неделю — делимся рецептами (**15 сообщений**)\n\nИнтересные ссылки:\n[Калькулятор КБЖУ онлайн]\n[Подборка рецептов на неделю]\n\nТакое саммари приходит в чат **каждое утро**. Участникам не нужно листать сотни сообщений — всё ключевое в одном посте.\n\nХочешь так же в своём чате?",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            { label: "🎤 Расскажи про расшифровку голосовых", action: "onboard-admin-preview-voice" },
          ],
        });
        break;

      case "onboard-admin-preview-voice":
        pushBot({
          text: "🎤 Расшифровка голосовых\n\nКогда кто-то отправляет голосовое или кружочек — бот автоматически добавляет текстовую версию под сообщением.\n\nУчастникам не нужно слушать — просто читают. Бесплатно **30 мин/мес** на чат.\n\nЧтобы включить — сначала добавьте бота в чат 👇",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            { label: "🛡 Расскажи про антиспам", action: "onboard-admin-preview-antispam" },
          ],
        });
        break;

      case "onboard-admin-preview-antispam":
        pushBot({
          text: "🛡 Антиспам\n\nБот автоматически удаляет спам, рекламу и флуд. Фильтрует мат с помощью AI — даже обходы через транслит и лит-спик.\n\nFree-тариф — базовая защита навсегда, Pro — умные фильтры и еженедельный отчёт.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            { label: "🎙 Расскажи про подкаст чата", action: "onboard-admin-preview-podcast" },
          ],
        });
        break;

      case "onboard-admin-preview-podcast":
        pushBot({
          text: "🎙 Chat Podcast\n\nТеперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            { label: "📚 Расскажи про базу знаний", action: "onboard-admin-preview-kb" },
          ],
        });
        break;

      case "onboard-admin-preview-kb":
        pushBot({
          text: "📚 База знаний\n\nЗнаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.\n\nУчастники пишут /search прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            { label: "🎭 Расскажи про анонимные сообщения", action: "onboard-admin-preview-anon" },
          ],
        });
        break;

      case "onboard-admin-preview-anon":
        pushBot({
          text: "🎭 Анонимные сообщения\n\nУчастники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [
            { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
          ],
        });
        break;

      case "onboard-admin-addbot":
        setShowChatPicker(true);
        break;

      case "onboard-admin-settings":
        setTimeout(() => {
          if (onboardChatId) {
            navigate({ to: "/chat/$chatId", params: { chatId: onboardChatId } });
          } else {
            navigate({ to: "/home" });
          }
        }, 200);
        break;

      // ── Onboarding: User flow ──
      case "onboard-user": {
        const summaryChats = chats.filter((c) => c.summary?.active);

        if (summaryChats.length === 0) {
          pushBot({
            text: "ChatLogix пока нет ни в одном из ваших чатов.\n\nЧтобы получать Super-Summary, бот должен быть добавлен хотя бы в один чат. Попросите админа добавить @ChatLogixBot с правами администратора — или добавьте сами, если вы админ.",
            buttons: [
              { label: "➕ Добавить бота и включить", action: "onboard-admin-addbot" },
            ],
          });
          break;
        }

        pushBot({
          text: `Покажу, как не читать все чаты и быть в курсе.\n\nSuper-Summary — одна сводка по всем твоим чатам, каждое утро в личку:\n\n🚀 **Твоя сводка за сегодня:**\n\n🏢 **Рабочий чат**\n— Дедлайн по проекту перенесли на пятницу (47 сообщ.)\n— Новый дизайн главной одобрили (23 сообщ.)\n🔗 [Figma-макет], [Таск в Jira]\n\n🏠 **ЖК Новый Город**\n— Отключение воды 30.04 с 10:00 до 18:00 (31 сообщ.)\n— Собрание жильцов в субботу (12 сообщ.)\n🔗 [Объявление УК]\n\n💪 **Здоровое питание**\n— Интервальное голодание 16/8 — опыт участников (28 сообщ.)\n— Подборка рецептов на неделю (15 сообщ.)\n🔗 [Калькулятор КБЖУ]\n\nВместо десятков чатов — одно сообщение с главным. Хочешь получать такой каждый день?`,
          buttons: [
            { label: "✨ Включить Super-Summary", action: "onboard-user-enable" },
            { label: "🎧 Расскажи про Super Podcast", action: "onboard-user-show-podcast" },
          ],
        });
        break;
      }

      case "onboard-user-enable":
        setSuperSummary(true);
        pushBot({
          text: "Готово 👌 Super-Summary будет приходить каждый день в 09:00.\n\nЧаты, где вчера было тихо, в отчёт не попадают — только то, где что-то обсуждали.\n\nКстати, эту сводку можно ещё и слушать — Super Podcast озвучивает её каждое утро.",
          buttons: [
            { label: "⚙️ Настроить Super-Summary", action: "open-app" },
            { label: "🎧 Расскажи про Super Podcast", action: "onboard-user-show-podcast" },
          ],
        });
        break;

      case "onboard-user-show-podcast":
        pushBot({
          text: "🎧 Super Podcast\n\nЭто расширенная аудио-версия Super-Summary. Можно слушать за рулём, на прогулке или по дороге на работу — не нужно читать. Приходит одним голосовым сообщением каждое утро.",
          buttons: [
            { label: "🎧 Включить Super Podcast", action: "onboard-user-podcast" },
            { label: "🕵️ Расскажи про анонимные сообщения", action: "onboard-user-show-anon" },
          ],
        });
        break;

      case "onboard-user-podcast":
        setSuperPodcast(true);
        pushBot({
          text: "🎧 Super Podcast включён!\n\nПервый выпуск придёт завтра вместе с Super-Summary. Выбрать голос и управлять подпиской можно в настройках.",
          buttons: [
            { label: "⚙️ Настроить Super Podcast", action: "open-app" },
            { label: "🕵️ Расскажи про анонимные сообщения", action: "onboard-user-show-anon" },
          ],
        });
        break;

      case "onboard-user-show-anon": {
        const anonAvailable = chats.filter((c) => c.anonymous?.active);
        pushBot({
          text: `🕵️ Анонимные сообщения\n\nПиши в чат через бота — никто не узнает, кто автор. Полезно для честной обратной связи или когда хочется сказать правду.${anonAvailable.length > 0 ? `\n\nДоступно в ${anonAvailable.length} чатах: ${anonAvailable.map((c) => c.name).join(", ")}` : "\n\nПока нет чатов с включённой функцией. Попросите админа активировать."}`,
          buttons: anonAvailable.length > 0
            ? [
                { label: "🎭 Написать анонимно", action: "anon-start" },
                { label: "⚙️ Настроить анонимные сообщения", action: "open-app" },
              ]
            : [
                { label: "⚙️ Настроить анонимные сообщения", action: "open-app" },
              ],
        });
        break;
      }


      // ── Персональные навыки ──
      case "user-settings": {
        const summaryStatus = superSummaryOn ? "включён" : "выключен";
        const podcastStatus = superPodcastOn
          ? superPodcastSubscription
            ? `подписка до ${superPodcastSubscription.expiresAt}`
            : `${16 - superPodcastFreeMinutesUsed} из 16 бесп. мин`
          : "выключен";
        const visibilityStatus = ignoringMe ? "игнорируются" : "учитываются";
        const anonChatsCount = chats.filter((c) => c.anonymous?.active).length;

        pushBot({
          text: `✨ Персональные навыки\n\nЭто навыки, которые работают лично для вас прямо внутри бота — не привязаны к конкретному чату.\n\n🚀 Super-Summary: ${summaryStatus}\n🎙 Super Podcast: ${podcastStatus}\n🎭 Анонимные сообщения: доступно в ${anonChatsCount} чатах\n🙈 Видимость: сообщения ${visibilityStatus}`,
          buttons: [
            { label: "🚀 Super-Summary", action: "summary-info" },
            { label: "🎙 Super Podcast", action: "podcast-info" },
            { label: "🎭 Анонимное сообщение", action: "anon-start" },
            {
              label: ignoringMe ? "🔄 Учитывать мои сообщения" : "🚫 Игнорировать мои сообщения",
              action: "toggle-ignore-me",
            },
          ],
        });
        break;
      }

      // ── Super-Summary info ──
      case "summary-info": {
        if (!superSummaryOn) {
          pushBot({
            text: "🚀 Super-Summary\n\nКогда чатов много, легко что-то пропустить. Super-Summary собирает саммари из всех чатов, где есть ты и ChatLogix в одно сообщение каждое утро\n\nВместо отдельных саммари внутри каждого чата, вы получаете одно сообщение с итогами по всем группам.\n\nЕсли какой-то чат не попал в ваше Super-Summary, бот не знает, что вы в нем — проявитесь, написав в нем любое сообщение, и на следующий день саммари из этого чата будет включено в Super-Summary\n\nВключи, чтобы получать такую сводку каждое утро.",
            buttons: [
              { label: "✅ Включить Super-Summary", action: "enable-super-summary" },
            ],
          });
        } else {
          pushBot({
            text: "🚀 Super-Summary работает\n\nСводка приходит каждое утро. Последний раз присылал сегодня",
            buttons: [
              { label: "📋 Показать последний Super-Summary", action: "show-last-summary" },
              { label: "🔕 Отключить Super-Summary", action: "disable-super-summary" },
            ],
          });
        }
        break;
      }

      // ── Enable Super-Summary ──
      case "enable-super-summary":
        setSuperSummary(true);
        pushBot({
          text: "🚀 Super-Summary включен!\n\nЗавтра утром скину первую сводку. Чаты, где вчера было тихо, в отчет не попадают — только то, где что-то обсуждали",
          buttons: [
            { label: "🔕 Отключить Super-Summary", action: "disable-super-summary" },
          ],
        });
        break;

      // ── Disable Super-Summary ──
      case "disable-super-summary":
        setSuperSummary(false);
        pushBot({
          text: "🔕 Super-Summary отключен\n\nЕжедневные сводки больше приходить не будут. Если ты передумаешь, можно включить заново",
          buttons: [
            { label: "✅ Включить Super-Summary", action: "enable-super-summary" },
          ],
        });
        break;

      // ── Show last Super-Summary ──
      case "show-last-summary": {
        const summaryChats = chats.filter((c) => c.summary?.active);
        let summaryText: string;
        if (summaryChats.length > 0) {
          summaryText = summaryChats
            .map((c) => {
              const topicLines = c.topics
                .slice(0, 2)
                .map((t) => `${t} (${Math.floor(Math.random() * 200 + 50)} сообщений)`)
                .join("\n");
              return `📌 ${c.name}\n${topicLines}`;
            })
            .join("\n\n");
        } else {
          summaryText = "Нет активных чатов для саммари";
        }
        pushBot({
          text: `Твой super-summary за последние 24 часа:\n\n${summaryText}`,
        });
        break;
      }

      // ── Super Podcast info ──
      case "podcast-info": {
        if (!superPodcastOn) {
          const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;
          pushBot({
            text: "🎙 Super Podcast\n\nРасширенная версия Super-Summary в формате подкаста. Приходит ежедневно вместе с Super-Summary. Первые 16 минут — бесплатно.\n\nОдин выпуск в день, приходит в ЛС сразу после Super-Summary",
            buttons: [
              { label: "🎙 Включить подкаст", action: "enable-super-podcast" },
              { label: "📋 Показать последний Super-Summary", action: "show-last-summary" },
            ],
          });
        } else {
          const statusLine = superPodcastSubscription
            ? `Подписка активна до ${superPodcastSubscription.expiresAt}`
            : `Осталось ${16 - superPodcastFreeMinutesUsed} из 16 бесплатных минут`;
          pushBot({
            text: `🎙 Super Podcast включён\n\n${statusLine}\n\nОдин выпуск в день, приходит в ЛС сразу после Super-Summary`,
            buttons: [
              { label: "⚙️ Настроить Super Podcast", action: "configure-podcast" },
              { label: "🚫 Отключить Super Podcast", action: "disable-super-podcast" },
            ],
          });
        }
        break;
      }

      // ── Enable Super Podcast ──
      case "enable-super-podcast":
        setSuperPodcast(true);
        pushBot({
          text: "🎙 Super Podcast включён.\n\nУ тебя есть 16 бесплатных минут. Первый выпуск придёт завтра утром.",
          buttons: [
            { label: "⚙️ Настроить Super Podcast", action: "configure-podcast" },
          ],
        });
        break;

      // ── Disable Super Podcast ──
      case "disable-super-podcast":
        setSuperPodcast(false);
        pushBot({
          text: "🎙 Super Podcast выключен. Super-Summary продолжит приходить текстом. Включить обратно можно в настройках.",
          buttons: [
            { label: "🎙 Включить подкаст", action: "enable-super-podcast" },
          ],
        });
        break;

      // ── Configure Super Podcast (open mini app) ──
      case "configure-podcast":
        setTimeout(() => navigate({ to: "/me" }), 200);
        break;

      // ── Toggle visibility ──
      case "toggle-ignore-me": {
        const newIgnoring = !ignoringMe;
        setIgnoringMe(newIgnoring);
        if (newIgnoring) {
          pushBot({
            text: "✅ Готово, твои сообщения не попадут в общее саммари тех чатов, где я есть. Если передумаешь — жми ниже.",
            buttons: [
              { label: "🔄 Учитывать мои сообщения", action: "toggle-ignore-me" },
            ],
          });
        } else {
          pushBot({
            text: "✅ Готово, твои сообщения снова в саммари",
            buttons: [
              { label: "🚫 Игнорировать мои сообщения", action: "toggle-ignore-me" },
            ],
          });
        }
        break;
      }

      // ── Помощь ──
      case "help":
        pushBot({
          text: "💬 Есть вопрос или предложение? Напиши нам в @chatlogix_support",
          buttons: [
            { label: "📱 Открыть Mini App", action: "open-app" },
          ],
        });
        break;

      // ── Добавить бота в чат ──
      case "addbot":
        pushBot({
          text: "Для добавления бота в чат нажми на кнопку ниже",
          buttons: [
            { label: "🤖 Добавить бота в чат", action: "addbot-go" },
          ],
        });
        break;
      case "addbot-go":
        pushBot({
          text: "В реальном Telegram здесь откроется диалог добавления бота в чат.",
        });
        break;

      // ── Anonymous message flow ──
      case "anon-start":
        if (totalAnon >= 3) {
          pushBot({ text: "Лимит анонимных сообщений (3/3) на сегодня исчерпан." });
          break;
        }
        setAnonStep("pick");
        pushBot({
          text: "Выбери чат для анонимного сообщения:",
          buttons: chats
            .filter((c) => c.anonymous?.active)
            .map((c) => ({
              label: `${c.emoji ?? ""} ${c.name}`.trim(),
              action: `anon-pick:${c.id}`,
            })),
        });
        break;
      case "anon-confirm-send": {
        if (anonChatId && pendingText) {
          sendAnonymous(anonChatId, pendingText);
          const target = chats.find((c) => c.id === anonChatId);
          pushBot({
            text: `✅ Анонимно отправлено в «${target?.name}»`,
            buttons: [{ label: "Открыть чат", action: `open-group:${anonChatId}` }],
          });
        }
        setAnonStep("idle");
        setAnonChatId(null);
        setPendingText("");
        break;
      }
      case "anon-edit":
        setAnonStep("compose");
        pushBot({ text: "Окей, отредактируй и отправь снова." });
        break;

      default:
        // ── Show (preview) handlers ──
        if (action.startsWith("onboard-admin-show-antispam:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🛡 Антиспам\n\nВ чатах часто бывает флуд, спам, наплыв ботов и токсичность. Антиспам помогает избавить чат от всего этого мусора.\n\nПри включении сразу доступно: удаление спама и рекламы, антифлуд, запрет ссылок от новичков и капча при входе.\n\nЕсть Pro-режим с расширенным функционалом: AI-фильтр мата, умный слоу-мод, кастомная капча, приветствие новичков и еженедельный отчёт.`,
            buttons: [
              { label: "🛡 Включить антиспам", action: `onboard-admin-antispam:${cid}` },
              { label: "🎤 Расскажи про расшифровку", action: `onboard-admin-show-voice:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-voice:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎤 Расшифровка голосовых\n\nКогда кто-то отправляет голосовое или кружочек — бот добавляет текстовую версию прямо под сообщением. Участникам не нужно слушать — просто читают.\n\nА ещё расшифровки попадают в саммари, делая сводку полнее и полезнее.`,
            buttons: [
              { label: "🎤 Включить расшифровку", action: `onboard-admin-voice:${cid}` },
              { label: "🎙 Расскажи про подкаст чата", action: `onboard-admin-show-podcast:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-podcast:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎙 Подкаст чата\n\nТеперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.`,
            buttons: [
              { label: "🎙 Включить подкаст", action: `onboard-admin-podcast:${cid}` },
              { label: "📚 Расскажи про базу знаний", action: `onboard-admin-show-kb:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-kb:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `📚 База знаний\n\nЗнаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.\n\nУчастники пишут /search прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.`,
            buttons: [
              { label: "📚 Включить базу знаний", action: `onboard-admin-kb:${cid}` },
              { label: "🎭 Расскажи про анонимные сообщения", action: `onboard-admin-show-anon:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-anon:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎭 Анонимные сообщения\n\nУчастники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.`,
            buttons: [
              { label: "🎭 Включить анонимные сообщения", action: `onboard-admin-anon:${cid}` },
              { label: "⚙️ Настроить анонимные сообщения", action: "onboard-admin-settings" },
            ],
          });
          break;
        }

        // ── Enable handlers ──
        if (action.startsWith("onboard-admin-antispam:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "antispam");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🛡 Антиспам включён в «${target?.name}»!\n\nСейчас работает: удаление спама и рекламы, антифлуд, запрет ссылок от новичков, капча при входе.\n\nДобавить свои стоп-слова, настроить фильтры медиа или перейти на Pro-тариф можно в настройках.`,
            buttons: [
              { label: "⚙️ Настроить антиспам", action: "onboard-admin-settings" },
              { label: "🎤 Расскажи про расшифровку", action: `onboard-admin-show-voice:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-voice:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "voice");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎤 Расшифровка включена в «${target?.name}»!\n\nВам доступно 30 минут в месяц на бесплатном тарифе. Расширить количество минут и выбрать голос озвучки можно в настройках.`,
            buttons: [
              { label: "⚙️ Настроить расшифровку", action: "onboard-admin-settings" },
              { label: "🎙 Расскажи про подкаст чата", action: `onboard-admin-show-podcast:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-podcast:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "podcast");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎙 Подкаст включён в «${target?.name}»!\n\nТеперь каждое утро вместе с саммари будет приходить аудио-выпуск — можно слушать по дороге на работу. По умолчанию озвучка приходит с мужским голосом длительностью до 4 минут. Первая неделя бесплатно.\n\nСменить голос или оформить подписку можно в настройках.`,
            buttons: [
              { label: "⚙️ Настроить подкаст", action: "onboard-admin-settings" },
              { label: "📚 Расскажи про базу знаний", action: `onboard-admin-show-kb:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-kb:")) {
          const cid = action.split(":")[1];
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `📚 База знаний активирована в «${target?.name}»!\n\nСейчас начнётся индексация последних 10 000 сообщений — это займёт несколько минут. Когда всё будет готово, пришлём уведомление в чат.\n\nПосле этого участники смогут искать через /search, а новые сообщения будут автоматически попадать в базу.`,
            buttons: [
              { label: "⚙️ Настроить базу знаний", action: "onboard-admin-settings" },
              { label: "🎭 Расскажи про анонимные сообщения", action: `onboard-admin-show-anon:${cid}` },
            ],
          });
          break;
        }
        if (action.startsWith("onboard-admin-anon:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "anonymous");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎭 Анонимные сообщения включены в «${target?.name}»!\n\nТеперь участники могут писать через бота так, чтобы никто не узнал автора. Удобно для честной обратной связи. Каждый может отправить до 3 сообщений в день.\n\nРазрешить или запретить отправку медиа можно в настройках.`,
            buttons: [
              { label: "⚙️ Настроить анонимные сообщения", action: "onboard-admin-settings" },
            ],
          });
          break;
        }
        if (action.startsWith("anon-pick:")) {
          const id = action.split(":")[1];
          setAnonChatId(id);
          setAnonStep("compose");
          const target = chats.find((c) => c.id === id);
          pushBot({
            text: `📣 Чат «${target?.name}»\nНапиши сообщение.`,
          });
        }
        if (action.startsWith("open-group:")) {
          pushBot({ text: "Переключи режим вверху на «🔥 Группа», чтобы увидеть сообщение." });
        }
        break;
    }
  };

  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    pushUser(text);
    if (anonStep === "compose" && anonChatId) {
      setPendingText(text);
      setAnonStep("confirm");
      pushBot({
        text: `Подтверди отправку:\n\n«${text}»`,
        buttons: [
          { label: "✅ Отправить анонимно", action: "anon-confirm-send" },
          { label: "✏️ Редактировать", action: "anon-edit" },
        ],
      });
      return;
    }
    pushBot({
      text: "Используй кнопки ниже или открой Mini App 👇",
      buttons: [{ label: "📱 Открыть Mini App", action: "open-app" }],
    });
  };

  return (
    <>
      <div className="sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8">
        <div className="px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto">
          <button className="w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80">
            <ChevronLeft size={22} />
          </button>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Bot size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-semibold truncate">ChatLogixBot</div>
            <div className="text-[11px] text-[oklch(0.85_0.15_155)]">bot · online</div>
          </div>
          <button className="w-9 h-9 flex items-center justify-center text-foreground/70">
            <Search size={18} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center text-foreground/70">
            <Phone size={18} />
          </button>
          <button className="w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4">
        <div className="max-w-[640px] mx-auto space-y-2">
          <div className="text-center">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground">
              сегодня
            </span>
          </div>
          {msgs.map((m) => (
            <Bubble key={m.id} msg={m} onAction={handleAction} />
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-white/8 rounded-2xl px-3 py-2.5 flex gap-1">
                <Dot /> <Dot delay={120} /> <Dot delay={240} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CHAT BOTTOM MENU — DM-only · 2 columns */}
      <div className="backdrop-blur-xl bg-background/80 border-t border-white/8">
        <div className="max-w-[640px] mx-auto px-2.5 py-2 grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1.5">
            <ChatMenuBtn
              label="🛠 Logix для твоего чата"
              onClick={() => navigate({ to: "/chats" })}
            />
            <ChatMenuBtn
              label="➕ Добавить бота в чат"
              onClick={() => handleAction("addbot")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <ChatMenuBtn
              label="✨ Logix для тебя"
              onClick={() => handleAction("user-settings")}
            />
            <ChatMenuBtn
              label="❔ Помощь"
              onClick={() => handleAction("help")}
            />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 backdrop-blur-xl bg-background/70 border-t border-white/8">
        <div className="max-w-[640px] mx-auto px-2.5 py-2.5 flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center text-foreground/70">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendInput()}
              placeholder={
                anonStep === "compose" && anonChatId
                  ? `🎭 Анонимно в «${chats.find((c) => c.id === anonChatId)?.name}»…`
                  : "Сообщение"
              }
              className="flex-1 bg-transparent outline-none text-[14px]"
            />
            <button className="text-foreground/60">
              <Smile size={20} />
            </button>
          </div>
          <button
            onClick={sendInput}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            {input.trim() ? <Send size={18} /> : <Mic size={18} />}
          </button>
        </div>
      </div>

      {showChatPicker && (
        <ChatPickerModal
          chats={chats}
          onPick={handleChatPicked}
          onClose={() => setShowChatPicker(false)}
        />
      )}
    </>
  );
}

function GroupChat() {
  const navigate = useNavigate();
  const chats = useChatsStore((s) => s.chats);
  const activeChatId = useChatsStore((s) => s.activeChatId);
  const setActiveChat = useChatsStore((s) => s.setActiveChat);
  const messagesByChat = useChatsStore((s) => s.messagesByChat);
  const pushMessage = useChatsStore((s) => s.pushMessage);
  const markSpamDeleted = useChatsStore((s) => s.markSpamDeleted);
  const adminAlerts = useChatsStore((s) => s.adminAlerts[activeChatId] ?? 0);

  const chat = chats.find((c) => c.id === activeChatId)!;
  const msgs = messagesByChat[activeChatId] ?? [];
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs.length, activeChatId]);

  // Live simulation: random member message every 12s
  useEffect(() => {
    const SCRIPTS: Record<string, { author: string; text: string }[]> = {
      "kurery-msk": [
        { author: "Дима", text: "Сегодня дождь, заказы летят 🚴" },
        { author: "Аня", text: "Кто-нибудь видел, лимит на бонус подняли?" },
        { author: "Олег", text: "+1 к смене ночью, платят ×2" },
      ],
      "product-chatlogix": [
        { author: "Лена", text: "Новый CSAT 4.7 — пушка 🔥" },
        { author: "Игорь", text: "Завтра демо в 17:00, не пропустите" },
      ],
      "react-ru": [
        { author: "Polina", text: "use(Promise) внутри Suspense — кайф" },
        { author: "Dan", text: "RSC + TanStack — норм комбо?" },
      ],
      "startup-club": [
        { author: "Артём", text: "Кто знает фонды на seed в EU?" },
        { author: "Marina", text: "Могу заинтродьюсить 👇" },
      ],
      "chatlogix-night": [{ author: "Tim", text: "Ночной билд прошёл ✅" }],
    };
    const t = setInterval(() => {
      const pool = SCRIPTS[activeChatId];
      if (!pool || pool.length === 0) return;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      pushMessage(activeChatId, { from: "member", author: pick.author, text: pick.text });
    }, 12000);
    return () => clearInterval(t);
  }, [activeChatId, pushMessage]);

  const handleAction = (action: string) => {
    if (action.startsWith("kb-open")) {
      navigate({ to: "/chat/$chatId", params: { chatId: activeChatId }, hash: "f-kb" });
    }
  };

  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");

    // KB: /search
    if (text.toLowerCase().startsWith("/search")) {
      const q = text.replace(/^\/search\s*/i, "").trim() || "запрос";
      pushMessage(activeChatId, { from: "user", text });
      setTimeout(() => {
        pushMessage(activeChatId, {
          from: "bot",
          text: `📚 По теме «${q}»:\n\n1. Главное обсуждение (23 сообщ.)\n2. Похожая тема (17 сообщ.)\n3. Старый тред (11 сообщ.)`,
        });
      }, 500);
      return;
    }

    // Antispam
    const spammy = /заработ|💰💰|быстро.*деньг|earn.*\$|http/i.test(text);
    if (spammy && chat.antispam?.active) {
      pushMessage(activeChatId, { from: "user", text });
      setTimeout(() => {
        const last = (useChatsStore.getState().messagesByChat[activeChatId] ?? []).slice(-1)[0];
        if (last) markSpamDeleted(activeChatId, last.id);
        pushMessage(activeChatId, { from: "bot", text: "❌ Сообщение удалено антиспамом" });
      }, 600);
      return;
    }

    pushMessage(activeChatId, { from: "user", text });
    setTimeout(() => {
      pushMessage(activeChatId, {
        from: "bot",
        text: "Попробуй: `/search тема` для базы знаний, или спам-фразу для проверки антиспама.",
      });
    }, 500);
  };

  return (
    <>
      <div className="px-3 pt-2 max-w-[640px] mx-auto w-full flex gap-1.5 overflow-x-auto">
        {chats.map((c) => {
          const active = c.id === activeChatId;
          return (
            <button
              key={c.id}
              onClick={() => setActiveChat(c.id)}
              className={`text-[11px] whitespace-nowrap px-2.5 py-1.5 rounded-full transition ${
                active ? "bg-white/18 text-white" : "bg-white/6 text-muted-foreground"
              }`}
            >
              {c.emoji} {c.name}
            </button>
          );
        })}
      </div>

      <div className="sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8 mt-2">
        <div className="px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto">
          <button className="w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80">
            <ChevronLeft size={22} />
          </button>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: chat.avatarColor }}
          >
            <span className="text-[14px]">{chat.emoji || chat.initial}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-semibold truncate">{chat.name}</div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1">
              <Users size={11} /> {chat.members.toLocaleString("ru")} · ChatLogix
            </div>
          </div>
          <button
            onClick={() => navigate({ to: "/chat/$chatId", params: { chatId: activeChatId } })}
            className="w-9 h-9 flex items-center justify-center text-foreground/70"
          >
            <Search size={18} />
          </button>
          <button className="w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {adminAlerts > 0 && (
        <div className="px-3 pt-2 max-w-[640px] mx-auto">
          <div className="rounded-xl bg-[oklch(0.65_0.22_25)]/15 border border-[oklch(0.65_0.22_25)]/30 px-3 py-2 text-[12px] flex items-center gap-2">
            <span>⚠️ Антиспам</span>
            <span className="text-muted-foreground">Удалено {adminAlerts} сообщений</span>
            <button
              onClick={() =>
                navigate({ to: "/chat/$chatId", params: { chatId: activeChatId }, hash: "f-antispam" })
              }
              className="ml-auto text-[oklch(0.82_0.13_240)] font-medium"
            >
              Настроить
            </button>
          </div>
        </div>
      )}

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4">
        <div className="max-w-[640px] mx-auto space-y-2">
          <div className="text-center">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground">
              сегодня
            </span>
          </div>
          {msgs.map((m) => (
            <GroupBubble key={m.id} msg={m} onAction={handleAction} />
          ))}
        </div>
      </div>

      {/* Group chats: standard input only — no custom footer menu (DM-only feature) */}
      <div className="sticky bottom-0 backdrop-blur-xl bg-background/80 border-t border-white/8">

        <div className="max-w-[640px] mx-auto px-2.5 pb-2.5 pt-1 flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center text-foreground/70">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendInput()}
              placeholder="/search тема, или текст…"
              className="flex-1 bg-transparent outline-none text-[14px]"
            />
          </div>
          <button
            onClick={sendInput}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            {input.trim() ? <Send size={18} /> : <Mic size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}

function formatText(text: string) {
  const parts: React.ReactNode[] = [];
  // Split by **bold** and [blue link] patterns
  const regex = /(\*\*(.+?)\*\*|\[(.+?)\])/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      // **bold**
      parts.push(<strong key={key++}>{match[2]}</strong>);
    } else if (match[3]) {
      // [blue link]
      parts.push(
        <span key={key++} className="text-[oklch(0.75_0.14_230)]">
          {match[3]}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function Bubble({ msg, onAction }: { msg: Msg; onAction: (a: string, label?: string) => void }) {
  const isSelf = msg.from === "user";
  const isSystem = msg.from === "system";
  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]">
          {msg.text}
        </div>
      </div>
    );
  }
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[82%] flex flex-col ${isSelf ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${
            isSelf ? "rounded-tr-md text-white" : "bg-white/10 rounded-tl-md"
          }`}
          style={
            isSelf
              ? { background: "linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))" }
              : undefined
          }
        >
          {isSelf ? msg.text : formatText(msg.text)}
          <div
            className={`text-[10px] mt-1 ${
              isSelf ? "text-white/70" : "text-muted-foreground"
            } text-right`}
          >
            {msg.time}
          </div>
        </div>
        {msg.buttons && (
          <div className="mt-1.5 flex flex-col gap-1">
            {msg.buttons.map((b, i) => (
              <button
                key={i}
                onClick={() => onAction(b.action, b.label)}
                className="w-full text-[12px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-center font-medium"
              >
                {b.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GroupBubble({ msg, onAction }: { msg: GroupMsg; onAction: (a: string) => void }) {
  const isSelf = msg.from === "user";
  const isSystem = msg.from === "system";
  const isMember = msg.from === "member";
  const isBot = msg.from === "bot";

  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]">
          {msg.text}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[82%] flex flex-col ${isSelf ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${
            isSelf ? "rounded-tr-md text-white" : "bg-white/10 rounded-tl-md"
          } ${msg.deleted ? "opacity-60 italic" : ""}`}
          style={
            isSelf
              ? { background: "linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))" }
              : undefined
          }
        >
          {isMember && msg.author && (
            <div className="text-[12px] font-semibold mb-0.5" style={{ color: "oklch(0.78 0.15 200)" }}>
              {msg.author}
            </div>
          )}
          {msg.voice ? (
            <div className="flex items-center gap-2.5 min-w-[180px]">
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                style={{ background: "var(--gradient-primary)" }}
                onClick={() => onAction("voice-play")}
              >
                <Mic size={14} />
              </button>
              <div className="flex-1 text-[10px] text-muted-foreground">{msg.voice.duration}</div>
            </div>
          ) : (
            msg.text
          )}
          <div
            className={`text-[10px] mt-1 ${
              isSelf ? "text-white/70" : "text-muted-foreground"
            } text-right`}
          >
            {msg.time}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatPickerModal({
  chats,
  onPick,
  onClose,
}: {
  chats: Chat[];
  onPick: (chatId: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-[340px] rounded-2xl bg-[oklch(0.18_0.01_260)] border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/8">
          <span className="text-[15px] font-semibold">Добавить бота в чат</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition"
          >
            <X size={18} />
          </button>
        </div>
        <div className="py-2 max-h-[320px] overflow-y-auto">
          {chats.map((c) => (
            <button
              key={c.id}
              onClick={() => onPick(c.id)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/8 active:bg-white/12 transition text-left"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] shrink-0"
                style={{ background: c.avatarColor }}
              >
                {c.emoji || c.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-medium truncate">
                  {c.name} {c.emoji ?? ""}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {c.members.toLocaleString("ru")} участников
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMenuBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-[13px] font-medium py-2.5 px-3 rounded-xl bg-white/8 hover:bg-white/14 text-white text-center transition active:scale-[0.98]"
    >
      {label}
    </button>
  );
}

