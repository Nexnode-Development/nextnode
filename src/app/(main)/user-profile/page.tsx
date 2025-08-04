"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Star,
  Search,
  Sun,
  Clock,
  Bell,
  Upload,
  Share,
  HelpCircle,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

// As per the image, this is a part of the page content
const PageHeader = () => (
  <div className="flex items-center justify-between py-4 px-8 border-b">
    <div className="flex items-center gap-2">
      <Star className="w-5 h-5 text-gray-500" />
      <h1 className="text-lg font-medium">User Profile</h1>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Search" className="pl-10 bg-gray-100 border-0" />
      </div>
      <Sun className="w-5 h-5 text-gray-500" />
      <Clock className="w-5 h-5 text-gray-500" />
      <Bell className="w-5 h-5 text-gray-500" />
    </div>
  </div>
);

export default function UserProfile() {
  const [biography, setBiography] = useState(
    "I'm Logical Legend, an achitectural designer........."
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader />
      <div className="p-8 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>LL</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-3xl font-bold">Logical Legend</h2>
            <p className="text-gray-500">logiclegend221@gmail.com</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              <Star className="w-4 h-4 mr-2" />
              Go Pro
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="flex gap-4">
              <Input value="Architect" className="w-1/4" />
              <Input value="Logical" />
              <Button variant="ghost" size="icon">
                <HelpCircle className="text-gray-400" />
              </Button>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex gap-2 items-center">
              <Select defaultValue="+233">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+233">+233</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
              <Input value="(0) 54-987-8990" />
            </div>
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>LL</AvatarFallback>
              </Avatar>
              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>

          {/* Biography */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Biography
              </label>
              <HelpCircle className="text-gray-400" />
            </div>
            <textarea
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              rows={4}
              maxLength={400}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-right text-sm text-gray-500 mt-1">
              {400 - biography.length} characters remaining
            </p>
          </div>

          {/* Notifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Notifications
            </label>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Checkbox id="email-notif" className="mt-1" />
                <div>
                  <label htmlFor="email-notif" className="font-medium">
                    Email Notification
                  </label>
                  <p className="text-sm text-gray-500">
                    You will be notified when a new email arrives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <label htmlFor="sound-notif" className="font-medium">
                    Sound Notification
                  </label>
                  <p className="text-sm text-gray-500">
                    You will be notified with sound when someone messages you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Checkbox id="subscription-notif" className="mt-1" />
                <div>
                  <label htmlFor="subscription-notif" className="font-medium">
                    Subscription
                  </label>
                  <p className="text-sm text-gray-500">
                    You will be notified when you subscribe to an account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
