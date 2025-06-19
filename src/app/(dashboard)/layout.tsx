import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <main className="flex min-h-screen flex-col bg-background">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
