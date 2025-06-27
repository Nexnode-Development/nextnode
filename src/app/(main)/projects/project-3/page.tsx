"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  DollarSign,
  Target,
  MessageSquare,
  CheckCircle,
  Edit,
  Share,
  ArrowLeft,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import {
  PAGE_LAYOUTS,
  SAMPLE_PROJECTS,
  SAMPLE_TEAM_MEMBERS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";

// Progress component
const Progress = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => (
  <div
    className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
  >
    <div
      className="h-full bg-orange-500 transition-all duration-300 ease-out"
      style={{ width: `${Math.min(value, 100)}%` }}
    />
  </div>
);

export default function Project3() {
  const router = useRouter();
  const [selectedProject] = useState(SAMPLE_PROJECTS[2]); // Use third project

  return (
    <div className={PAGE_LAYOUTS.main}>
      <PageHeader
        title="AI-Powered Analytics Dashboard"
        description="Advanced analytics platform with machine learning capabilities and real-time insights"
        actions={
          <>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share Project
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Edit className="w-4 h-4 mr-2" />
              Edit Project
            </Button>
          </>
        }
      />

      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Progress</p>
                <p className="text-2xl font-bold">
                  {selectedProject.progress}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tasks Done</p>
                <p className="text-2xl font-bold">3/5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Budget</p>
                <p className="text-2xl font-bold">{selectedProject.budget}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Deadline</p>
                <p className="text-2xl font-bold">{selectedProject.deadline}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    This AI-powered analytics dashboard provides real-time
                    insights and predictive analytics for business intelligence.
                    The platform integrates machine learning algorithms to
                    analyze data patterns and generate actionable insights.
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Real-time Analytics",
                        "ML Models",
                        "Data Visualization",
                        "Predictive Analytics",
                        "Custom Reports",
                      ].map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Progress</h4>
                    <Progress
                      value={selectedProject.progress}
                      className="h-3"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>Started</span>
                      <span>{selectedProject.progress}% Complete</span>
                      <span>Target: {selectedProject.deadline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <Badge>{selectedProject.status}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority</span>
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      {selectedProject.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-medium">
                      {selectedProject.team.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-medium">
                      {selectedProject.budget}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">47</div>
                  <div className="text-sm text-gray-600">Data Sources</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">ML Models</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    99.5%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Project Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SAMPLE_TEAM_MEMBERS.slice(0, 4).map((member, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-orange-500 text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          member.status === "online" ? "default" : "secondary"
                        }
                      >
                        {member.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
