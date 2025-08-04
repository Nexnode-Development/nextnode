"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Settings,
  RotateCcw,
  Bell,
  Menu,
  Paperclip,
  Mic,
  Smile,
  Send,
  Phone,
  Video,
  Star,
} from "lucide-react";

const MessagesInterface = () => {
  const [message, setMessage] = useState("");

  const notifications = [
    {
      id: 1,
      type: "permit",
      title: "Permit Approved: Mixed-Us...",
      time: "Just now",
      icon: "🏗️",
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "meeting",
      title: "Meeting Scheduled: Client R...",
      time: "59 minutes ago",
      icon: "📅",
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "revision",
      title: "New Revision Uploaded: Fla...",
      time: "12 hours ago",
      icon: "📄",
      color: "bg-blue-500",
    },
    {
      id: 4,
      type: "milestone",
      title: "Milestone Achieved: Design...",
      time: "Today, 11:59 AM",
      icon: "🎯",
      color: "bg-orange-500",
    },
  ];

  const activities = [
    {
      id: 1,
      user: "Holison",
      action: "commented on your...",
      time: "Just now",
      avatar: "👨",
    },
    {
      id: 2,
      user: "You",
      action: "uploaded Site Plan Revi...",
      time: "59 minutes ago",
      avatar: "👤",
    },
    {
      id: 3,
      user: "You",
      action: "were assigned a new ta...",
      time: "12 hours ago",
      avatar: "👤",
    },
    {
      id: 4,
      user: "You",
      action: "approved the changes t...",
      time: "Today, 11:59 AM",
      avatar: "👤",
    },
    {
      id: 5,
      user: "You",
      action: 'joined the project: "Mod...',
      time: "Feb 9, 2025",
      avatar: "👤",
    },
  ];

  const contacts = [
    { name: "Holison", status: "online", avatar: "👨" },
    { name: "Rosemond", status: "online", avatar: "👩" },
    { name: "Famous", status: "online", avatar: "👨" },
    { name: "Luna TK", status: "online", avatar: "👩" },
    { name: "Wallace", status: "online", avatar: "👨" },
    { name: "Daniel", status: "online", avatar: "👨" },
  ];

  const messages = [
    {
      id: 1,
      sender: "Daniel",
      time: "1:20 PM",
      content:
        "Just reviewed it, James. Structurally, it looks solid. I'd suggest thickening the support beams near the elevator shaft. We might need to account for heavier load distribution.",
      avatar: "D",
      avatarColor: "bg-pink-500",
    },
    {
      id: 2,
      sender: "KK",
      time: "1:20 PM",
      content:
        "Not from any side either. I'll just need a bit more wall space to install the main electrical panels — preferably near the entrance but hidden from direct view.",
      avatar: "K",
      avatarColor: "bg-teal-600",
    },
    {
      id: 3,
      sender: "You",
      time: "1:20 PM",
      content:
        "Thanks, James! I love the open space in the lobby. I'm thinking of using natural wood and glass for a warmer feel. Would that clash with any structural elements, Sofia?",
      avatar: "W",
      avatarColor: "bg-green-500",
      isMe: true,
    },
    {
      id: 4,
      sender: "Leroy",
      time: "1:20 PM",
      content:
        "Hey team, just uploaded the initial blueprint for the lobby area. Can everyone check if it aligns with the vision we discussed during the last meeting?",
      avatar: "L",
      avatarColor: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-900">Messages</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search"
                    className="pl-10 w-64 bg-gray-100 border-0"
                  />
                </div>
                <Button variant="ghost" size="sm" className="p-2">
                  <Settings className="w-5 h-5 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <RotateCcw className="w-5 h-5 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Bell className="w-5 h-5 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5 text-gray-400" />
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-orange-500">
                UI/UX Team
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="p-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Video className="w-5 h-5 text-gray-400" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-white px-6 py-4 overflow-y-auto">
            <div className="space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isMe ? "justify-end" : ""}`}
                >
                  {!msg.isMe && (
                    <div
                      className={`w-8 h-8 rounded-full ${msg.avatarColor} flex items-center justify-center text-white font-medium text-sm`}
                    >
                      {msg.avatar}
                    </div>
                  )}
                  <div className={`max-w-2xl ${msg.isMe ? "order-first" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {msg.sender}
                      </span>
                      <span className="text-sm text-gray-500">{msg.time}</span>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        msg.isMe
                          ? "bg-green-500 text-white ml-auto"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                  {msg.isMe && (
                    <div
                      className={`w-8 h-8 rounded-full ${msg.avatarColor} flex items-center justify-center text-white font-medium text-sm`}
                    >
                      {msg.avatar}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mic className="w-5 h-5 text-gray-400" />
              </Button>
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  className="pr-20 bg-gray-100 border-0"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="p-1">
                    <Smile className="w-4 h-4 text-gray-400" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1">
                    <Send className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Panel */}
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Notifications
            </h3>

            {/* Recent Notifications */}
            <div className="space-y-4 mb-8">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${notification.color} flex items-center justify-center text-white text-sm`}
                  >
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-900 mb-4">
                Activities
              </h4>
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                      {activity.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">
                Contacts
              </h4>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                          {contact.avatar}
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-900">
                        {contact.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="p-1">
                        <Phone className="w-4 h-4 text-orange-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1">
                        <Video className="w-4 h-4 text-orange-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1">
                        <span className="w-4 h-4 flex items-center justify-center text-orange-500 text-xs">
                          💬
                        </span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesInterface;
