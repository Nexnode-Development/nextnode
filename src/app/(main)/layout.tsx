"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/navigation/app-sidebar";
import { BreadcrumbComponent } from "@/components/navigation/breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex text-black items-center mt-2">
          <SidebarTrigger className="mr-2" />
          <BreadcrumbComponent />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
