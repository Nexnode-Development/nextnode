"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  MessageSquare,
  Users,
  Clock,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import {
  PAGE_LAYOUTS,
  SAMPLE_MESSAGES,
  SAMPLE_TEAM_MEMBERS,
} from "@/lib/constants";

export default function Messaging() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const filteredMessages = SAMPLE_MESSAGES.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className={PAGE_LAYOUTS.main}>
      <PageHeader
        title="Team Communication"
        description="Stay connected with your team members and project stakeholders"
        actions={
          <>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Create Group
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <MessageSquare className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </>
        }
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Messages
                </p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Active Users
                </p>
                <p className="text-2xl font-bold">
                  {
                    SAMPLE_TEAM_MEMBERS.filter((m) => m.status === "online")
                      .length
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unread</p>
                <p className="text-2xl font-bold">
                  {SAMPLE_MESSAGES.filter((m) => m.unread).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Video Calls</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Conversations Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Conversations
              <Badge variant="secondary">
                {SAMPLE_MESSAGES.filter((m) => m.unread).length}
              </Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredMessages.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b ${
                    selectedConversation === conversation.id
                      ? "bg-orange-50 border-l-4 border-l-orange-500"
                      : ""
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-orange-500 text-white">
                        {conversation.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(
                        "online"
                      )} rounded-full border-2 border-white`}
                    />
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm truncate">
                        {conversation.sender}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 truncate">
                      {conversation.message}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="ml-2">
                      <Badge className="bg-orange-500 text-xs">New</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-3">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-orange-500 text-white">
                        {
                          SAMPLE_MESSAGES.find(
                            (m) => m.id === selectedConversation
                          )?.avatar
                        }
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {
                          SAMPLE_MESSAGES.find(
                            (m) => m.id === selectedConversation
                          )?.sender
                        }
                      </h3>
                      <p className="text-sm text-green-600">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 max-h-[400px] overflow-y-auto">
                <div className="space-y-4">
                  {/* Sample messages - in a real app, these would be fetched based on conversation */}
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-100 rounded-lg p-3">
                      <p className="text-sm">
                        Hey! How&apos;s the project going?
                      </p>
                      <span className="text-xs text-gray-500">10:30 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-orange-500 text-white rounded-lg p-3">
                      <p className="text-sm">
                        Going well! Just finished the design phase.
                      </p>
                      <span className="text-xs text-orange-200">10:32 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-100 rounded-lg p-3">
                      <p className="text-sm">
                        Great! Can you send me the mockups?
                      </p>
                      <span className="text-xs text-gray-500">10:35 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-orange-500 text-white rounded-lg p-3">
                      <p className="text-sm">
                        Sure! I&apos;ll upload them to the shared folder.
                      </p>
                      <span className="text-xs text-orange-200">10:37 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="pr-10"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    onClick={sendMessage}
                    className="bg-orange-500 hover:bg-orange-600"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a conversation
                </h3>
                <p>Choose a conversation from the sidebar to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAMPLE_TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedConversation("new-" + index)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500 text-white">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(
                      member.status
                    )} rounded-full border-2 border-white`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    {member.role}
                  </p>
                </div>
                <Badge
                  variant={member.status === "online" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {member.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
