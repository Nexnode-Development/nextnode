import React, { useState } from "react";
import {
  Menu,
  ChevronRight,
  LayoutDashboard,
  Briefcase,
  FileText,
  BarChart,
  Video,
  Star,
  Clock,
  Settings,
  FilePieChart,
  MessageSquare,
  Bell,
  Milestone,
  User,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import UserProfile from "../users/UserProfile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    pages: true,
    projects: true,
    dashboards: true,
  });

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  const sidebarItems = [
    {
      title: "Favorites",
      icon: <Star className="h-4 w-4" />,
      items: [
        {
          name: "Overview",
          path: "/dashboard",
          icon: <LayoutDashboard className="h-4 w-4" />,
        },
        {
          name: "Project 1",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
    },
    { title: "Recently", icon: <Clock className="h-4 w-4" />, items: [] },
    {
      title: "Dashboards",
      icon: <LayoutDashboard className="h-4 w-4" />,
      items: [
        {
          name: "Overview",
          path: "/dashboard",
          icon: <LayoutDashboard className="h-4 w-4" />,
        },
        {
          name: "Project Details",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Projects",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Pages",
      icon: <FileText className="h-4 w-4" />,
      items: [
        {
          name: "Projects",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Documents",
          path: "/documents",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          name: "Reports",
          path: "/reports",
          icon: <BarChart className="h-4 w-4" />,
        },
        {
          name: "Video Call",
          path: "/video-call",
          icon: <Video className="h-4 w-4" />,
        },
        {
          name: "Project 1",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Project 2",
          path: "/project-details",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Other",
      icon: <Settings className="h-4 w-4" />,
      items: [
        {
          name: "Reports",
          path: "/reports",
          icon: <BarChart className="h-4 w-4" />,
        },
        {
          name: "Financials",
          path: "/financials",
          icon: <FilePieChart className="h-4 w-4" />,
        },
        {
          name: "Messaging",
          path: "/messages",
          icon: <MessageSquare className="h-4 w-4" />,
        },
        {
          name: "Notifications",
          path: "/notifications",
          icon: <Bell className="h-4 w-4" />,
        },
        {
          name: "Milestones",
          path: "/milestones",
          icon: <Milestone className="h-4 w-4" />,
        },
        {
          name: "User Profile",
          path: "/user-profile",
          icon: <User className="h-4 w-4" />,
        },
      ],
    },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "flex items-center space-x-2",
                isCollapsed && "justify-center w-full"
              )}
            >
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              {!isCollapsed && (
                <span className="font-semibold text-lg">Nexnode</span>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-white border rounded-full",
              isCollapsed && "rotate-180"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <nav className={cn("p-2 space-y-2", isCollapsed && "space-y-8")}>
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <div
                className={cn(
                  "flex items-center justify-between text-sm font-medium text-gray-500 mb-2 px-2",
                  isCollapsed && "justify-center"
                )}
              >
                {!isCollapsed && (
                  <>
                    <span>{section.title}</span>
                    {section.items.length > 0 && (
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform cursor-pointer",
                          expandedSections[
                            section.title.toLowerCase() as keyof typeof expandedSections
                          ] && "rotate-90"
                        )}
                        onClick={() =>
                          toggleSection(section.title.toLowerCase())
                        }
                      />
                    )}
                  </>
                )}
                {isCollapsed && (
                  <Tooltip>
                    <TooltipTrigger>{section.icon}</TooltipTrigger>
                    <TooltipContent side="right">
                      {section.title}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>

              {!isCollapsed &&
                expandedSections[
                  section.title.toLowerCase() as keyof typeof expandedSections
                ] && (
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors",
                                isActive(item.path)
                                  ? "bg-orange-100 text-orange-700 font-medium"
                                  : "text-gray-700 hover:bg-gray-100",
                                isCollapsed && "justify-center"
                              )}
                            >
                              {item.icon}
                              {!isCollapsed && <span>{item.name}</span>}
                            </Link>
                          </TooltipTrigger>
                          {isCollapsed && (
                            <TooltipContent side="right">
                              {item.name}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="p-2 rounded-lg bg-gray-100">
            <UserProfile isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Sidebar;
