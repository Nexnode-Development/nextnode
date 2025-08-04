"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  FolderIcon,
  PieChart,
  PowerOffIcon,
  ShoppingBag,
  Folder,
  Presentation,
  BookAudio,
  User2,
  MessagesSquare,
} from "lucide-react";

import logo from "@/assets/nexnode-logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Collapsible } from "../ui/collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const items_dashboards = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: PieChart,
  },
  {
    title: "Project Details",
    url: "/projects",
    icon: ShoppingBag,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
];

const projects_collapsible = [
  {
    title: "Project 1",
    url: "/projects/project1",
    icon: Folder,
  },
  {
    title: "Project 2",
    url: "#",
    icon: Folder,
  },
];

const page_items = [
  {
    title: "Reports",
    url: "/reports",
    icon: Presentation,
  },
  {
    title: "Financials",
    url: "/financials",
    icon: BookAudio,
  },
  {
    title: "Messaging",
    url: "/messaging",
    icon: MessagesSquare,
  },
];

export default function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sidebar
      className={`w-64 min-h-screen border-r bg-white ${
        pathname === "/user-profile" ? "hidden" : ""
      }`}
    >
      {/* Sidebar Header */}
      <SidebarHeader className="px-4 py-4 border-b">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Nextnode" width={24} height={24} />
          <span className="text-lg font-bold text-orange-500">Nextnode</span>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="flex flex-col gap-4 px-2 pt-4">
        {/* Dashboards Group */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 uppercase text-xs mb-2">
            Dashboards
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items_dashboards.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="">
          <SidebarGroupLabel>PAGES</SidebarGroupLabel>

          {/* Projects Collapsible Group */}
          <div className="-mx-2">
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex items-center gap-2 cursor-pointer px-2 py-2 rounded-md hover:bg-gray-100 transition w-full">
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    <FolderIcon className="w-4 h-4" />
                    <span className="font-semibold">Projects</span>
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent className="ml-10 space-y-1 list-none">
                  {projects_collapsible.map((item) => (
                    <SidebarMenuItem key={item.title + "-project"}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 transition"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>

            <SidebarMenu>
              {page_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="mt-auto px-4 py-4 border-t">
        <Button
          variant="default"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => router.push("/user-profile")}
        >
          <User2 className="w-4 h-4" />
          <span>User Profile</span>
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <PowerOffIcon className="w-4 h-4" />
          <span>Log Out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
