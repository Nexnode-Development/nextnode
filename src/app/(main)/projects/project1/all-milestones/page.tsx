"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Sun,
  Bell,
  RefreshCw,
  Star,
  Plus,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    week: "Week 1",
    phase: "Pre-Design Phase",
    tasks: ["Client Consultation", "Site Analysis & Visit"],
    status: "completed",
    color: "green",
    taskId: "Task 1",
  },
  {
    week: "Week 2",
    phase: "Schematic Design Phase",
    tasks: ["Develop Preliminary", "Floor Plans & Elevations"],
    status: "completed",
    color: "orange",
    taskId: "Task 3",
  },
  {
    week: "Week 3",
    phase: "",
    tasks: ["Assist Client in", "Selecting Contractors"],
    status: "completed",
    color: "orange",
    taskId: "Task 6",
  },
  {
    week: "Week 4",
    phase: "",
    tasks: [],
    status: "current",
    color: "red",
    taskId: "",
  },
  {
    week: "Week 5",
    phase: "Monitoring Phase",
    tasks: [
      "Site Visits & Progress",
      "Reports",
      "Review Shop Drawings",
      "& Submittals",
    ],
    status: "pending",
    color: "yellow",
    taskId: "Task 8",
  },
  {
    week: "Week 6",
    phase: "",
    tasks: [],
    status: "pending",
    color: "gray",
    taskId: "",
  },
  {
    week: "Week 7",
    phase: "Construction Phase",
    tasks: [
      "Address Construction",
      "Issues",
      "Ensure Design Intent",
      "is Maintained",
      "Issue Certificates of",
      "Payment",
    ],
    status: "pending",
    color: "orange",
    taskId: "Task 9",
  },
];

const secondRowTasks = [
  {
    week: "",
    phase: "Design Development Phase",
    tasks: [
      "Detailed Plans,",
      "Sections & Elevations",
      "Material Selection",
      "3D Modelling or",
      "Renderings",
    ],
    status: "pending",
    color: "purple",
    taskId: "Task 4",
  },
  {
    week: "",
    phase: "Engineering Phase",
    tasks: ["Answer RFIs (Request", "for Information)"],
    status: "pending",
    color: "blue",
    taskId: "Task 7",
  },
  {
    week: "",
    phase: "Construction Documentation Phase",
    tasks: [
      "Prepare Detailed",
      "Drawings for Permits &",
      "Bidding",
      "Technical",
      "Specifications",
      "Documentation",
    ],
    status: "pending",
    color: "pink",
    taskId: "Task 5",
  },
  {
    week: "",
    phase: "Project Close-Out",
    tasks: [
      "Final Site Walkthrough",
      "(Punch List)",
      "Hand Over As-Built",
      "Drawings",
    ],
    status: "pending",
    color: "cyan",
    taskId: "Task 10",
  },
];

const bottomTasks = [
  {
    week: "",
    phase: "Pre-Design Phase",
    tasks: [
      "Feasibility Studies",
      "Initial Budget &",
      "Timeline Estimation",
      "Conceptual Sketches",
    ],
    status: "pending",
    color: "blue",
    taskId: "Task 2",
  },
];

const notifications = [
  {
    icon: FileText,
    text: "Permit Approved: Mixed-Us...",
    time: "Just now",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Calendar,
    text: "Meeting Scheduled: Client R...",
    time: "59 minutes ago",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    icon: FileText,
    text: "New Revision Uploaded: Flo...",
    time: "12 hours ago",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: Calendar,
    text: "Milestone Achieved: Design...",
    time: "Today, 11:59 AM",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
];

const activities = [
  { user: "Holison", text: "commented on your...", time: "Just now" },
  { user: "You", text: "uploaded Site Plan Revi...", time: "59 minutes ago" },
  { user: "You", text: "were assigned a new ta...", time: "12 hours ago" },
  { user: "You", text: "approved the changes t...", time: "Today, 11:59 AM" },
  { user: "You", text: "joined the project: 'Mod...", time: "Feb 9, 2025" },
];

const contacts = [
  { name: "Holison", avatar: "/avatars/01.png" },
  { name: "Rosemond", avatar: "/avatars/02.png" },
  { name: "Famous", avatar: "/avatars/03.png" },
  { name: "Luna TK", avatar: "/avatars/04.png" },
  { name: "Wallace", avatar: "/avatars/05.png" },
  { name: "Daniel", avatar: "/avatars/01.png" },
];

const getPhaseColor = (color: string) => {
  switch (color) {
    case "green":
      return "bg-green-500 border-green-600";
    case "orange":
      return "bg-orange-500 border-orange-600";
    case "yellow":
      return "bg-yellow-400 border-yellow-500";
    case "purple":
      return "bg-purple-500 border-purple-600";
    case "blue":
      return "bg-blue-500 border-blue-600";
    case "pink":
      return "bg-pink-500 border-pink-600";
    case "cyan":
      return "bg-cyan-500 border-cyan-600";
    case "red":
      return "bg-red-500 border-red-600";
    default:
      return "bg-gray-300 border-gray-400";
  }
};

export default function AllMilestonesPage() {
  const [activeFilter, setActiveFilter] = useState("April - May");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-400" />
            <Link href="/projects">
              <span className="text-gray-500">Projects</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects/project1">
              <span className="text-gray-500">Project 1</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span>All Milestones</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 bg-gray-100 border-transparent focus:border-orange-500 focus:ring-0"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Sun className="w-5 h-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <RefreshCw className="w-5 h-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-row gap-6 p-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-orange-500">
                All Milestones
              </h1>
              <Button className="bg-orange-500 text-white rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-medium">{activeFilter}</span>
              <Button variant="ghost" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
              <div className="flex gap-2">
                <Button
                  variant={activeFilter === "Year" ? "default" : "ghost"}
                  size="sm"
                >
                  Year
                </Button>
                <Button
                  variant={activeFilter === "Week" ? "default" : "ghost"}
                  size="sm"
                >
                  Week
                </Button>
                <Button
                  variant={activeFilter === "Month" ? "default" : "ghost"}
                  size="sm"
                >
                  Month
                </Button>
                <Button
                  variant={activeFilter === "Day" ? "default" : "ghost"}
                  size="sm"
                >
                  Day
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="bg-white rounded-lg p-6">
            {/* Week Headers */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {milestones.slice(0, 7).map((milestone, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">
                    {milestone.week}
                  </h3>
                  {index === 3 && (
                    <div className="w-2 h-2 bg-red-500 rounded-full mx-auto"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline Line */}
            <div className="relative mb-8">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-orange-400"></div>
              <div className="flex justify-between items-center relative">
                {milestones.slice(0, 7).map((milestone, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"
                  ></div>
                ))}
              </div>
            </div>

            {/* First Row - Main Milestones */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {milestones.slice(0, 7).map((milestone, index) => (
                <div key={index} className="relative">
                  {milestone.phase && (
                    <Card
                      className={`p-3 border-2 ${getPhaseColor(
                        milestone.color
                      )} text-white rounded-lg`}
                    >
                      <div className="text-xs font-medium mb-1">
                        {milestone.phase}
                      </div>
                      {milestone.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="text-xs">
                          {task}
                        </div>
                      ))}
                      {milestone.taskId && (
                        <div className="flex items-center justify-center mt-2">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                          <span className="text-xs ml-1">
                            {milestone.taskId}
                          </span>
                        </div>
                      )}
                    </Card>
                  )}
                </div>
              ))}
            </div>

            {/* Second Row - Additional Tasks */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              <div></div>
              {secondRowTasks.map((task, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "col-start-2"
                      : index === 1
                      ? "col-start-4"
                      : index === 2
                      ? "col-start-5"
                      : "col-start-7"
                  }`}
                >
                  <Card
                    className={`p-3 border-2 ${getPhaseColor(
                      task.color
                    )} text-white rounded-lg`}
                  >
                    <div className="text-xs font-medium mb-1">{task.phase}</div>
                    {task.tasks.map((taskText, taskIndex) => (
                      <div key={taskIndex} className="text-xs">
                        {taskText}
                      </div>
                    ))}
                    {task.taskId && (
                      <div className="flex items-center justify-center mt-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="text-xs ml-1">{task.taskId}</span>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>

            {/* Bottom Row - Pre-Design Phase */}
            <div className="grid grid-cols-7 gap-4">
              <div className="col-start-1">
                {bottomTasks.map((task, index) => (
                  <Card
                    key={index}
                    className={`p-3 border-2 ${getPhaseColor(
                      task.color
                    )} text-white rounded-lg`}
                  >
                    <div className="text-xs font-medium mb-1">{task.phase}</div>
                    {task.tasks.map((taskText, taskIndex) => (
                      <div key={taskIndex} className="text-xs">
                        {taskText}
                      </div>
                    ))}
                    {task.taskId && (
                      <div className="flex items-center justify-center mt-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="text-xs ml-1">{task.taskId}</span>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 flex-shrink-0 space-y-6">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${n.bgColor}`}
                  >
                    <n.icon className={`w-4 h-4 ${n.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{n.text}</p>
                    <p className="text-xs text-gray-500">{n.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={
                        a.user === "You" ? "/avatars/01.png" : "/avatars/02.png"
                      }
                    />
                    <AvatarFallback>{a.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-bold">{a.user}</span> {a.text}
                    </p>
                    <p className="text-xs text-gray-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contacts */}
          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={c.avatar} />
                      <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{c.name}</span>
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <Phone className="w-4 h-4 cursor-pointer hover:text-orange-500" />
                    <MessageSquare className="w-4 h-4 cursor-pointer hover:text-orange-500" />
                    <Video className="w-4 h-4 cursor-pointer hover:text-orange-500" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
