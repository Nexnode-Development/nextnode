"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Plus,
  Filter,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoreHorizontal,
  Star,
  FolderPlus,
  Eye,
  Settings,
} from "lucide-react";
import Link from "next/link";

type ProjectStatus = "In Progress" | "Planning" | "Completed" | "On Hold";
type Priority = "High" | "Medium" | "Low";
type ProjectType = "Commercial" | "Residential" | "Infrastructure";

interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  budget: string;
  spent: string;
  startDate: string;
  endDate: string;
  manager: string;
  team: number;
  priority: Priority;
  tasks: {
    completed: number;
    total: number;
  };
  location: string;
  type: ProjectType;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Sample project data
  const projects: Project[] = [
    {
      id: "project1",
      name: "Central Plaza Construction",
      description:
        "Mixed-use commercial and residential building project in downtown area",
      status: "In Progress",
      progress: 78,
      budget: "$2,500,000",
      spent: "$1,950,000",
      startDate: "2024-01-15",
      endDate: "2024-12-30",
      manager: "Jane Doe",
      team: 12,
      priority: "High",
      tasks: { completed: 66, total: 96 },
      location: "Downtown Plaza",
      type: "Commercial",
    },
    {
      id: "project2",
      name: "Residential Complex A",
      description: "Modern apartment complex with 50 units and amenities",
      status: "Planning",
      progress: 15,
      budget: "$1,800,000",
      spent: "$270,000",
      startDate: "2024-03-01",
      endDate: "2025-08-15",
      manager: "Robert Smith",
      team: 8,
      priority: "Medium",
      tasks: { completed: 8, total: 64 },
      location: "West Side",
      type: "Residential",
    },
    {
      id: "project3",
      name: "Office Tower Renovation",
      description: "Complete renovation of 15-story office building",
      status: "Completed",
      progress: 100,
      budget: "$3,200,000",
      spent: "$3,150,000",
      startDate: "2023-06-01",
      endDate: "2024-02-28",
      manager: "Sarah Johnson",
      team: 15,
      priority: "High",
      tasks: { completed: 89, total: 89 },
      location: "Business District",
      type: "Commercial",
    },
    {
      id: "project4",
      name: "Shopping Mall Expansion",
      description: "Adding new wing with retail spaces and food court",
      status: "On Hold",
      progress: 45,
      budget: "$4,500,000",
      spent: "$2,025,000",
      startDate: "2023-09-15",
      endDate: "2024-11-30",
      manager: "Michael Brown",
      team: 20,
      priority: "Low",
      tasks: { completed: 32, total: 78 },
      location: "Shopping District",
      type: "Commercial",
    },
    {
      id: "project5",
      name: "Green Housing Initiative",
      description: "Eco-friendly housing development with solar panels",
      status: "In Progress",
      progress: 62,
      budget: "$2,100,000",
      spent: "$1,302,000",
      startDate: "2024-02-01",
      endDate: "2024-10-15",
      manager: "Emily Davis",
      team: 10,
      priority: "High",
      tasks: { completed: 45, total: 72 },
      location: "Eco Village",
      type: "Residential",
    },
    {
      id: "project6",
      name: "Infrastructure Upgrade",
      description: "Road and utility infrastructure improvements",
      status: "Planning",
      progress: 8,
      budget: "$1,200,000",
      spent: "$96,000",
      startDate: "2024-05-01",
      endDate: "2025-02-28",
      manager: "David Wilson",
      team: 6,
      priority: "Medium",
      tasks: { completed: 3, total: 42 },
      location: "Multiple Sites",
      type: "Infrastructure",
    },
  ];

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case "In Progress":
        return "bg-orange-100 text-orange-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Planning":
        return "bg-blue-100 text-blue-600";
      case "On Hold":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.status === activeFilter;
  });

  // Calculate overview statistics
  const totalProjects = projects.length;
  const inProgressProjects = projects.filter(
    (p) => p.status === "In Progress"
  ).length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;
  const averageProgress = Math.round(
    projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Project <span className="text-orange-500">Management</span>
          </h1>
          <p className="text-gray-600">
            Monitor and manage all your{" "}
            <span className="text-orange-500">construction projects</span> in
            one place
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Projects</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {totalProjects}
                  </p>
                  <p className="text-green-600 text-sm flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +2 this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">In Progress</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {inProgressProjects}
                  </p>
                  <p className="text-orange-600 text-sm flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Active projects
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {completedProjects}
                  </p>
                  <p className="text-green-600 text-sm flex items-center mt-1">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    This year
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Avg. Progress</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {averageProgress}%
                  </p>
                  <p className="text-blue-600 text-sm flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Overall completion
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search projects..."
                className="pl-10 w-64 bg-white border-gray-200"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm"
              >
                <option value="All">All Projects</option>
                <option value="In Progress">In Progress</option>
                <option value="Planning">Planning</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-1">
                        {project.name}
                      </h3>
                      <Badge
                        className={getStatusColor(project.status)}
                        variant="secondary"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{project.type}</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">
                      {project.progress}%
                    </span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Budget */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="font-semibold text-gray-900">
                      {project.budget}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Spent</p>
                    <p className="font-semibold text-gray-900">
                      {project.spent}
                    </p>
                  </div>
                </div>

                {/* Team & Tasks */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {project.team} members
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {project.tasks.completed}/{project.tasks.total} tasks
                    </span>
                  </div>
                </div>

                {/* Manager & Priority */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Project Manager</p>
                    <p className="text-sm font-medium text-gray-900">
                      {project.manager}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Priority</p>
                    <p
                      className={`text-sm font-medium ${getPriorityColor(
                        project.priority
                      )}`}
                    >
                      {project.priority}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="px-3">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              {activeFilter === "All"
                ? "Get started by creating your first project"
                : `No projects with status "${activeFilter}"`}
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
