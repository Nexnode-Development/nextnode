"use client";

import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const routeMap: Record<string, string> = {
  dashboard: "Dashboard",
  overview: "Overview",
  "project-details": "Project Details",
  projects: "Projects",
  "project-1": "Project 1",
  "project-2": "Project 2",
  "project-3": "Project 3",
  "project-4": "Project 4",
  "project-5": "Project 5",
  reports: "Reports",
  financials: "Financials",
  messaging: "Messaging",
  "user-profile": "User Profile",
  create: "Create",
  edit: "Edit",
  view: "View",
  details: "Details",
};

// Function to detect if a segment is an ID
function isIdSegment(segment: string): boolean {
  // Check for various ID patterns
  const idPatterns = [
    /^[0-9a-f]{24}$/i, // MongoDB ObjectID (24 hex chars)
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, // UUID
    /^[0-9a-f]{12}$/i, // Short hex ID (12 chars)
    /^[0-9a-f]{16}$/i, // Medium hex ID (16 chars)
    /^[0-9a-f]{32}$/i, // Long hex ID (32 chars)
    /^\d+$/, // Pure numeric ID
    /^id_[0-9a-zA-Z]+$/, // ID with prefix
    /^[a-zA-Z0-9]{20,}$/, // Long alphanumeric strings (likely IDs)
  ];

  return idPatterns.some((pattern) => pattern.test(segment));
}

// Function to get appropriate display name for segments
function getSegmentDisplayName(
  segment: string,
  index: number,
  segments: string[]
): string {
  // If it's an ID, determine what it represents based on context
  if (isIdSegment(segment)) {
    const previousSegment = index > 0 ? segments[index - 1] : "";
    const nextSegment = index < segments.length - 1 ? segments[index + 1] : "";

    // Context-based naming for IDs
    if (previousSegment === "projects") {
      return nextSegment === "edit"
        ? "Project"
        : nextSegment === "view"
        ? "Project"
        : "Project Details";
    } else {
      return "Details";
    }
  }

  // Use route map or capitalize first letter
  return (
    routeMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
  );
}

function DynamicBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Handle root path redirect to dashboard overview
    if (pathname === "/" || pathname === "/dashboard") {
      return [
        <BreadcrumbItem key="dashboard">
          <BreadcrumbPage>Dashboard Overview</BreadcrumbPage>
        </BreadcrumbItem>,
      ];
    }

    const segments = pathname.split("/").filter(Boolean);

    return segments
      .map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const title = getSegmentDisplayName(segment, index, segments);

        return [
          <BreadcrumbItem key={path}>
            {isLast ? (
              <BreadcrumbPage>{title}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            )}
          </BreadcrumbItem>,
          !isLast && <BreadcrumbSeparator key={`${path}-separator`} />,
        ];
      })
      .flat()
      .filter(Boolean);
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
    </Breadcrumb>
  );
}

export default function SystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <DynamicBreadcrumbs />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-0 h-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
