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
  Mail,
  Archive,
  Trash2,
  Clock,
  ArrowLeft,
  ArrowRight,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    sender: "Holison",
    subject: "Re: Site Plan Revision Uploaded for 'Greenfield Mall'",
    preview:
      "A revised version of the site plan for 'Greenfield Mall' has been uploaded by Michael Owusu. The changes include updated p...",
    time: "1 min ago",
    category: "Project",
    type: "Work",
    isRead: false,
  },
  {
    id: 2,
    sender: "Rosemond",
    subject: "Client Meeting Scheduled – 'Urban Living Tower'",
    preview:
      "A new meeting has been scheduled with the client for the 'Urban Living Tower' project....",
    time: "2 days ago",
    category: "Meeting",
    type: "Work",
    isRead: false,
  },
  {
    id: 3,
    sender: "Famous",
    subject: "Client Feedback Received – Residential Complex Phase II",
    preview:
      "The client has submitted feedback on the initial concept presentation for Phase II of the Residential Complex. Main co...",
    time: "2 days ago",
    category: "Weekend",
    type: "Work",
    isRead: false,
  },
  {
    id: 4,
    sender: "Mr. Daniel",
    subject: "Reminder: Submit CPD Hours for 2025 Q1",
    preview:
      "Your Continuing Professional Development (CPD) log for Q1 2025 is due by April 30. You currently have 9 of the required...",
    time: "3 days ago",
    category: "Budget",
    type: "About",
    isRead: false,
  },
  {
    id: 5,
    sender: "Mr. Logical",
    subject: "You Were Mentioned in a Project Discussion",
    preview:
      "Kwame Boadu tagged you in a discussion on the 'Airport Lounge Extension' model....",
    time: "3 days ago",
    category: "Label",
    type: "Label",
    isRead: true,
  },
];

const selectedNotification = {
  sender: "Rosemond",
  subject: "Re: Client Meeting Scheduled – 'Urban Living Tower'",
  email: "Re: rosemondoseiagyemang9@gmail.com",
  time: "Mar 25, 2025, 1:15:00 PM",
  content: {
    greeting: "Dear Architect,",
    body: "This is to inform you that a client consultation meeting has been officially scheduled in relation to the ongoing 'Urban Living Tower' project. Your presence and input will be essential as the meeting will involve high-level discussions that impact both design progression and implementation timelines.",
    details: {
      title: "Meeting Details",
      project: "Urban Living Tower – High-Rise Residential Development",
      date: "Friday, April 19, 2025",
      time: "2:00 PM – 3:30 PM (GMT)",
      mode: "Virtual Meeting",
      platform: "Zoom",
      link: "[Click to Join Meeting]",
      host: "Samuel Mensah (Client Representative – CityBuild Holdings)",
    },
    agenda: {
      title: "Agenda Highlights",
      items: [
        "Design Development Updates",
        "Review of updated architectural floor plans",
        "Discussion on modifications to balcony sizes and structural adjustments",
        "Presentation of revised unit layouts for premium-level suites",
        "Sustainability integration Strategy",
        "Overview of proposed green building materials and passive design elements",
        "Incorporating solar shading devices and rooftop greenery",
        "Evaluation of rainwater harvesting and greywater reuse systems",
        "Facade Lighting Proposal",
        "Review of preliminary lighting concepts for night-time visibility and aesthetics",
        "Coordination with MEP consultants on fixture placement and energy efficiency",
        "Discussion on client preferences for mood, color temperature, and brand alignment",
      ],
    },
    closing: "Thanks,\nRosemond",
    actions: ["Reply Rosemond...", "Mute this thread"],
  },
};

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState("All mail");
  const [selectedNotificationId, setSelectedNotificationId] = useState(2);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/projects">
              <span className="text-gray-500">Projects</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects/project1">
              <span className="text-gray-500">Project 1</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span>Notifications</span>
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

      <main className="flex-1 flex flex-row">
        {/* Left Panel - Notifications List */}
        <div className="w-1/3 bg-white border-r">
          {/* Notifications Header */}
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold mb-4">Notifications</h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-4">
              <Button
                variant={selectedTab === "All mail" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab("All mail")}
                className={
                  selectedTab === "All mail" ? "bg-gray-200 text-black" : ""
                }
              >
                All mail
              </Button>
              <Button
                variant={selectedTab === "Unread" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab("Unread")}
                className={
                  selectedTab === "Unread" ? "bg-gray-200 text-black" : ""
                }
              >
                Unread
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Archive className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Clock className="w-4 h-4" />
              </Button>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search" className="pl-10 w-full" />
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedNotificationId === notification.id
                    ? "bg-blue-50 border-l-4 border-l-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedNotificationId(notification.id)}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      {notification.sender.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">
                        {notification.sender}
                      </span>
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm mb-1 truncate">
                      {notification.subject}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {notification.preview}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-100 text-orange-800"
                      >
                        {notification.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {notification.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Selected Notification Details */}
        <div className="flex-1 bg-white">
          <div className="p-6">
            {/* Email Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedNotification.sender}
                </h2>
                <p className="text-sm text-gray-600">
                  {selectedNotification.subject}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedNotification.email}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {selectedNotification.time}
              </div>
            </div>

            {/* Email Content */}
            <div className="space-y-4">
              <p>{selectedNotification.content.greeting}</p>

              <p className="text-sm leading-relaxed">
                {selectedNotification.content.body}
              </p>

              {/* Meeting Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">
                  {selectedNotification.content.details.title}
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Project: {selectedNotification.content.details.project}
                  </li>
                  <li>• Date: {selectedNotification.content.details.date}</li>
                  <li>• Time: {selectedNotification.content.details.time}</li>
                  <li>• Mode: {selectedNotification.content.details.mode}</li>
                  <li>
                    • Platform: {selectedNotification.content.details.platform}
                  </li>
                  <li>
                    • Meeting Link:{" "}
                    <span className="text-blue-600 underline">
                      {selectedNotification.content.details.link}
                    </span>
                  </li>
                  <li>
                    • Meeting Host: {selectedNotification.content.details.host}
                  </li>
                </ul>
              </div>

              {/* Agenda */}
              <div>
                <h3 className="font-semibold mb-3">
                  {selectedNotification.content.agenda.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">• Design Development Updates</p>
                    <p className="ml-4 text-gray-600">
                      • Review of updated architectural floor plans
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Discussion on modifications to balcony sizes and
                      structural adjustments
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Presentation of revised unit layouts for premium-level
                      suites
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      • Sustainability integration Strategy
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Overview of proposed green building materials and
                      passive design elements
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Incorporating solar shading devices and rooftop greenery
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Evaluation of rainwater harvesting and greywater reuse
                      systems
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">• Facade Lighting Proposal</p>
                    <p className="ml-4 text-gray-600">
                      • Review of preliminary lighting concepts for night-time
                      visibility and aesthetics
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Coordination with MEP consultants on fixture placement
                      and energy efficiency
                    </p>
                    <p className="ml-4 text-gray-600">
                      • Discussion on client preferences for mood, color
                      temperature, and brand alignment
                    </p>
                  </div>
                </div>
              </div>

              <p className="whitespace-pre-line">
                {selectedNotification.content.closing}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Reply Rosemond...
                </Button>
                <Button variant="outline">Mute this thread</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
