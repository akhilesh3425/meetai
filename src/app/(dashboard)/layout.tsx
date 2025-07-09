import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />

        <main className="flex-1 flex flex-col bg-background">
          <DashboardNavbar />
          <div className="flex-1 p-4">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
