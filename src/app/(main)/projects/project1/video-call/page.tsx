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
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  PhoneOff,
  MessageSquare,
  MoreHorizontal,
  Settings,
  Users,
  Maximize,
  Volume2,
  Send,
  PlusCircle,
  Edit,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const participants = [
  {
    name: "Dianne Russell",
    avatar: "/avatars/01.png",
    status: "speaking",
    isMuted: false,
    hasVideo: true,
  },
  {
    name: "Guy Hawkins",
    avatar: "/avatars/02.png",
    status: "listening",
    isMuted: true,
    hasVideo: true,
  },
  {
    name: "Kathryn Murphy",
    avatar: "/avatars/03.png",
    status: "speaking",
    isMuted: false,
    hasVideo: false,
  },
];

const chatMessages = [
  {
    user: "Kathryn Murphy",
    message: "Good afternoon, everyone.",
    time: "11:01 AM",
    avatar: "/avatars/03.png",
  },
  {
    user: "Kathryn Murphy",
    message: "We will start this meeting",
    time: "11:01 AM",
    avatar: "/avatars/03.png",
  },
  {
    user: "Joshua Abraham",
    message: "Yes, Let's start this meeting",
    time: "11:02 AM",
    avatar: "/avatars/04.png",
  },
  {
    user: "Kathryn Murphy",
    message: "Today, we are here to discuss last week's sales.",
    time: "12:04 AM",
    avatar: "/avatars/03.png",
  },
];

export default function VideoCallPage() {
  const [activeTab, setActiveTab] = useState("Group");
  const [isMuted, setIsMuted] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);
  const [message, setMessage] = useState("");

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
            <span>Video Call</span>
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
        {/* Left Panel - Video Call Interface */}
        <div className="flex-1 bg-white p-6">
          {/* Call Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Client Meeting Scheduled – &quot;Urban Living Tower&quot;
                </h1>
                <p className="text-sm text-gray-500">
                  May 1st, 2025 | 12:05 AM
                </p>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Add Participant
            </Button>
          </div>

          {/* Main Video Area */}
          <div
            className="relative bg-gray-200 rounded-lg overflow-hidden mb-6"
            style={{ height: "400px" }}
          >
            {/* Main Speaker Video */}
            <div className="relative w-full h-full">
              <Image
                src="/images/door-feed.jpg"
                alt="Adam Joseph"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                24:01:45
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Adam Joseph
              </div>
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Participant Video Grid */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="relative w-32 h-24 bg-gray-800 rounded overflow-hidden">
                <Image
                  src="/avatars/01.png"
                  alt="Jessie Jung"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                  Jessie Jung
                </div>
                <div className="absolute top-1 right-1">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mic className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              <div className="relative w-32 h-24 bg-gray-800 rounded overflow-hidden">
                <Image
                  src="/avatars/02.png"
                  alt="Alice Wong"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                  Alice Wong
                </div>
                <div className="absolute top-1 right-1">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mic className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              <div className="relative w-32 h-24 bg-gray-800 rounded overflow-hidden">
                <Image
                  src="/avatars/03.png"
                  alt="Theresa Webb"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                  Theresa Webb
                </div>
              </div>
            </div>
          </div>

          {/* Call Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={`w-12 h-12 rounded-full ${
                isMuted ? "bg-red-500 text-white" : "bg-orange-500 text-white"
              }`}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`w-12 h-12 rounded-full ${
                !hasVideo ? "bg-red-500 text-white" : "bg-orange-500 text-white"
              }`}
              onClick={() => setHasVideo(!hasVideo)}
            >
              {hasVideo ? (
                <Video className="w-6 h-6" />
              ) : (
                <VideoOff className="w-6 h-6" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-orange-500 text-white"
            >
              <PlusCircle className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-orange-500 text-white"
            >
              <Settings className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-orange-500 text-white"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-orange-500 text-white"
            >
              <MoreHorizontal className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-red-500 text-white"
            >
              End Call
            </Button>
          </div>
        </div>

        {/* Right Panel - Participants and Chat */}
        <div className="w-80 bg-white border-l">
          {/* Participants Section */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Participants</h2>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1">
                Add Participant
              </Button>
            </div>

            <div className="space-y-3">
              {participants.map((participant, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={participant.avatar} />
                      <AvatarFallback>
                        {participant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">
                      {participant.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        participant.isMuted ? "bg-red-100" : "bg-green-100"
                      }`}
                    >
                      {participant.isMuted ? (
                        <MicOff className="w-3 h-3 text-red-500" />
                      ) : (
                        <Mic className="w-3 h-3 text-green-500" />
                      )}
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        !participant.hasVideo ? "bg-red-100" : "bg-orange-100"
                      }`}
                    >
                      {participant.hasVideo ? (
                        <Video className="w-3 h-3 text-orange-500" />
                      ) : (
                        <VideoOff className="w-3 h-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            {/* Chat Tabs */}
            <div className="p-4 border-b">
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "Group" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("Group")}
                  className={
                    activeTab === "Group" ? "bg-orange-500 text-white" : ""
                  }
                >
                  Group
                </Button>
                <Button
                  variant={activeTab === "Personal" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("Personal")}
                >
                  Personal
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={msg.avatar} />
                    <AvatarFallback>
                      {msg.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{msg.user}</span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type Something..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button
                  size="icon"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
