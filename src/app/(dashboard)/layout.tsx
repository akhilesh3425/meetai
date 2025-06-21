import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />

      <main className="flex min-h-screen flex-col bg-background">
        <DashboardNavbar></DashboardNavbar>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
