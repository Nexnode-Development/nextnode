"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Star,
  LayoutDashboard,
  FolderOpen,
  BarChart3,
  DollarSign,
  MessageSquare,
  User,
  FileText,
  Folder,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavHeader from "./nav-header";

interface NavItem {
  id: string;
  name: string;
  path?: string;
  icon: React.ElementType;
  items?: NavItem[];
}

const NAV_SECTIONS: {
  id: string;
  name: string;
  items: NavItem[];
}[] = [
  {
    id: "favorites",
    name: "Favorites",
    items: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/overview",
        icon: LayoutDashboard,
      },
      {
        id: "project-1",
        name: "Project 1",
        path: "/projects/project-1",
        icon: Star,
      },
    ],
  },
  {
    id: "dashboards",
    name: "Dashboards",
    items: [
      {
        id: "dashboard-overview",
        name: "Overview",
        path: "/dashboard/overview",
        icon: LayoutDashboard,
      },
      {
        id: "project-details",
        name: "Project Details",
        path: "/dashboard/project-details",
        icon: FileText,
      },
      {
        id: "projects",
        name: "Projects",
        path: "/dashboard/projects",
        icon: FolderOpen,
      },
    ],
  },
  {
    id: "pages",
    name: "Pages",
    items: [
      {
        id: "projects-folder",
        name: "Projects",
        icon: Folder,
        items: [
          {
            id: "project-1-page",
            name: "Project 1",
            path: "/projects/project-1",
            icon: FileText,
          },
          {
            id: "project-2-page",
            name: "Project 2",
            path: "/projects/project-2",
            icon: FileText,
          },
          {
            id: "project-3-page",
            name: "Project 3",
            path: "/projects/project-3",
            icon: FileText,
          },
          {
            id: "project-4-page",
            name: "Project 4",
            path: "/projects/project-4",
            icon: FileText,
          },
          {
            id: "project-5-page",
            name: "Project 5",
            path: "/projects/project-5",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    id: "other",
    name: "",
    items: [
      {
        id: "reports",
        name: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
      {
        id: "financials",
        name: "Financials",
        path: "/financials",
        icon: DollarSign,
      },
      {
        id: "messaging",
        name: "Messaging",
        path: "/messaging",
        icon: MessageSquare,
      },
      {
        id: "user-profile",
        name: "User Profile",
        path: "/user-profile",
        icon: User,
      },
    ],
  },
];

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const Icon = item.icon;
  const hasChildren = item.items && item.items.length > 0;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  if (hasChildren) {
    return (
      <>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={toggleExpanded}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
            {hasChildren &&
              (isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              ))}
          </SidebarMenuButton>
        </SidebarMenuItem>
        {isExpanded && hasChildren && (
          <SidebarMenuSub>
            {item.items!.map((subItem) => {
              const isSubActive = subItem.path
                ? subItem.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(subItem.path)
                : false;
              const SubIcon = subItem.icon;
              return (
                <SidebarMenuSubItem key={subItem.id}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={subItem.path || "#"}
                      className={cn(
                        "flex items-center gap-3 transition-colors",
                        isSubActive
                          ? "bg-orange-500/10 text-orange-600 font-medium"
                          : "hover:bg-gray-100 text-gray-600"
                      )}
                    >
                      <SubIcon className="w-4 h-4" />
                      <span>{subItem.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        )}
      </>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={item.path || "#"}
          className={cn(
            "flex items-center gap-3 transition-colors",
            isActive
              ? "bg-orange-500/10 text-orange-600 font-medium"
              : "hover:bg-gray-100 text-gray-600"
          )}
        >
          <Icon className="w-4 h-4" />
          <span>{item.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset">
      <NavHeader />
      {/* <div className="px-3 py-2">
        <NavCommand />
      </div> */}
      <SidebarContent>
        {NAV_SECTIONS.map((section) => (
          <div key={section.id} className="mb-4">
            {section.name && (
              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.name}
                </h3>
              </div>
            )}
            <SidebarMenu className="space-y-1">
              {section.items.map((item) => {
                const isActive = item.path
                  ? item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path)
                  : false;
                return (
                  <NavigationItem
                    key={item.id}
                    item={item}
                    isActive={isActive}
                  />
                );
              })}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 mt-auto">
        {/* <NavUser /> */}
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
