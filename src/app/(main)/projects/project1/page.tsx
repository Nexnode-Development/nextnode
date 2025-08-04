"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Search,
  Sun,
  Bell,
  Video,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Star,
  RefreshCw,
  FileText,
  Calendar,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Data
const projectProgress = {
  progress: 78,
  tasksCompleted: 66,
  tasksInProgress: 14,
  tasksWaiting: 16,
};
const trackingData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 19 },
  { name: "Wed", value: 15 },
  { name: "Thurs", value: 22 },
  { name: "Fri", value: 8 },
  { name: "Sat", value: 18 },
];
const budgetData = [
  { name: "Used Funds", value: 300 },
  { name: "Others", value: 100 },
  { name: "Balance", value: 200 },
];
const COLORS = ["#fb923c", "#fcd34d", "#e5e7eb"];
const tasks = [
  {
    task: "Lay Foundation",
    description: "Excavate and pour concrete for th...",
    assignedTo: "Logical",
    deadline: "11/12/2025",
    status: "Completed",
  },
  {
    task: "Set Up Formwork",
    description: "Install timber or metal forms for be...",
    assignedTo: "Esther",
    deadline: "21/12/2025",
    status: "Ongoing",
  },
  {
    task: "Bricklaying – Ground Floor",
    description: "Lay concrete blocks up to lintel lev...",
    assignedTo: "Holison",
    deadline: "5/12/2025",
    status: "Completed",
  },
  {
    task: "Roof Truss Installation",
    description: "Assemble and install timber trusse...",
    assignedTo: "Rosemond",
    deadline: "8/12/2025",
    status: "Not Started",
  },
  {
    task: "Floor Tiling – Bathrooms",
    description: "Lay ceramic floor tiles in all bathro...",
    assignedTo: "Famous",
    deadline: "9/1/2025",
    status: "Completed",
  },
  {
    task: "Paint Interior Walls",
    description: "Apply two coats of emulsion paint...",
    assignedTo: "Daniel",
    deadline: "11/11/2025",
    status: "Ongoing",
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
const getStatusClass = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-600 bg-green-100";
    case "Ongoing":
      return "text-orange-600 bg-orange-100";
    case "Not Started":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export default function Project1Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white border-b p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-400" />
            <Link href="/projects">
              <span className="text-gray-500">Projects</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span>Project 1</span>
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
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-4">Project 1</h1>
            <div className="flex gap-2 mb-6">
              <Link href="/projects/project1/all-milestones">
                <Button variant="outline">All Milestones</Button>
              </Link>
              <Link href="/projects/project1/notifications">
                <Button variant="outline">Notifications</Button>
              </Link>
              <Link href="/projects/project1/video-call">
                <Button variant="outline">Video Call</Button>
              </Link>
            </div>
          </div>

          {/* Progress and Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Progress */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="text-orange-500"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${projectProgress.progress}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {projectProgress.progress}%
                    </span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm text-gray-500">Project Completed</p>
                </div>
                <div className="flex justify-around w-full mt-4 gap-2">
                  <div className="text-center">
                    <div className="p-2 bg-orange-500 rounded-md text-white font-bold text-lg">
                      {projectProgress.tasksCompleted}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Tasks Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-2 bg-yellow-400 rounded-md text-white font-bold text-lg">
                      {projectProgress.tasksInProgress}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Tasks in Progress
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-2 bg-gray-300 rounded-md text-gray-700 font-bold text-lg">
                      {projectProgress.tasksWaiting}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Tasks still waiting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Project Tracking */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Project 1 Tracking</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trackingData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} />
                    <Bar dataKey="value" fill="#fb923c" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          {/* Feed and Budget */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feed from outside door */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Feed from outside door</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Image
                    src="/images/door-feed.jpg"
                    alt="door feed"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <Button variant="ghost" size="icon">
                      <PlayCircle className="w-12 h-12 text-white" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">
                    Camera 002 | outside door | 03:32
                  </p>
                  <Button variant="ghost" size="sm" className="text-green-500">
                    <Video className="w-4 h-4 mr-1" /> Go Live
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Budget Breakdown */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Budget Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="h-64 flex items-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      paddingAngle={5}
                    >
                      {budgetData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                    <span>Total Budget</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span>Used Funds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span>Others/Balance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Assigned Tasks */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>List of Assigned Tasks</CardTitle>
                <div className="flex gap-2">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Assign Task
                  </Button>
                  <Button variant="outline">Priority</Button>
                  <Button variant="outline">Download</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-2">Task</th>
                    <th>Task Description</th>
                    <th>Assigned to</th>
                    <th>Deadline</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 font-medium">{task.task}</td>
                      <td>{task.description}</td>
                      <td>{task.assignedTo}</td>
                      <td>{task.deadline}</td>
                      <td>
                        <Badge className={getStatusClass(task.status)}>
                          {task.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </Button>
                <span className="text-sm text-gray-500">Page 1 of 3</span>
                <Button variant="outline">
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
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
