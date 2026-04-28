import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BottomNav } from "@/components/BottomNav";
import { TopBar } from "@/components/TopBar";

export const Route = createFileRoute("/_tabs")({
  component: TabsLayout,
});

function TabsLayout() {
  return (
    <div className="min-h-screen pb-[88px]">
      <TopBar />
      <Outlet />
      <BottomNav />
    </div>
  );
}
