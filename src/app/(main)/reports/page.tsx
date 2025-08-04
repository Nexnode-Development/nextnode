"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Settings,
  RotateCcw,
  Bell,
  Menu,
  Star,
  Folder,
  Calendar,
  Download,
  Play,
  CheckCircle,
  Clock,
  Loader,
  AlertTriangle,
  Trash2,
  Plus,
} from "lucide-react";

const legalDocumentsData = [
  {
    name: "Blue Print",
    description: "Blue print of the building to be constructed...",
    date: "12/04/2025",
  },
  {
    name: "Interior renderings",
    description: "Renderings of the interior of the building...",
    date: "23/03/2025",
  },
  {
    name: "Mobilization Details",
    description: "Mobilization and",
    date: "15/03/2025",
  },
  {
    name: "Land Survey",
    description: "Deatails on the land from the land surveyor...",
    date: "12/03/2025",
  },
];

const inventoryData = [
  {
    name: "Cement",
    description: "200 bags of cement for plastering",
    date: "12/04/2025",
  },
  {
    name: "Sand",
    description: "5 trucks of sand for block work",
    date: "23/03/2025",
  },
  {
    name: "Iron Rods",
    description: "2 tons of iron rods for...",
    date: "15/03/2025",
  },
  {
    name: "Tiles",
    description: "Floor tiles for the living room area...",
    date: "12/03/2025",
  },
];

const DocumentsTable = ({ documents }: { documents: any[] }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex justify-end items-center mb-6 gap-2">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Trash2 className="h-5 w-5" />
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Documents
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                <Checkbox id="selectAll" />
              </th>
              <th className="text-left p-3 font-semibold text-sm text-gray-600">
                Document Name
              </th>
              <th className="text-left p-3 font-semibold text-sm text-gray-600">
                Description
              </th>
              <th className="text-left p-3 font-semibold text-sm text-gray-600">
                Date Added
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">
                  <Checkbox id={`doc-${i}`} />
                </td>
                <td className="p-3 text-sm font-medium">{doc.name}</td>
                <td className="p-3 text-sm text-gray-500">{doc.description}</td>
                <td className="p-3 text-sm text-gray-500">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const ConstructionReports = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Financial data for pie chart
  const financialData = [
    { name: "Amount Spent", value: 55, color: "#fb923c" },
    { name: "Balance", value: 45, color: "#f97316" },
  ];

  const workProgressData = [
    {
      task: "Excavation",
      lastUpdate: "29/04/2025",
      status: "Completed",
      statusColor: "text-green-600",
    },
    {
      task: "Plastering",
      lastUpdate: "29/04/2025",
      status: "Ongoing",
      statusColor: "text-orange-500",
    },
    {
      task: "Plumbing",
      lastUpdate: "29/04/2025",
      status: "Ongoing",
      statusColor: "text-orange-500",
    },
    {
      task: "Roofing",
      lastUpdate: "29/04/2025",
      status: "Completed",
      statusColor: "text-green-600",
    },
    {
      task: "Electrical Wiring",
      lastUpdate: "29/04/2025",
      status: "Completed",
      statusColor: "text-green-600",
    },
  ];

  const issues = [
    {
      problem: "Foundation needs more sand fill",
      risk: "High",
      riskColor: "bg-red-500",
    },
    {
      problem: "Resize of the windows",
      risk: "Moderate",
      riskColor: "bg-yellow-500",
    },
    {
      problem: "Wrong positioning of Columns",
      risk: "Low",
      riskColor: "bg-green-500",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Legal documents":
        return <DocumentsTable documents={legalDocumentsData} />;
      case "Inventory & Purchases":
        return <DocumentsTable documents={inventoryData} />;
      case "Overview":
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Work Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-500">
                    Work Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 text-gray-600 font-medium">
                            Task
                          </th>
                          <th className="text-left py-3 text-gray-600 font-medium">
                            Last Update
                          </th>
                          <th className="text-left py-3 text-gray-600 font-medium">
                            Current state
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {workProgressData.map((item, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-4 font-medium text-gray-900">
                              {item.task}
                            </td>
                            <td className="py-4 text-gray-600">
                              {item.lastUpdate}
                            </td>
                            <td className="py-4">
                              <span
                                className={`font-medium ${item.statusColor}`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Issues and Risk */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-500">
                    Issues and risk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {issues.map((issue, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">{issue.problem}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            Risk Level
                          </span>
                          <div
                            className={`w-3 h-3 rounded-full ${issue.riskColor}`}
                          ></div>
                          <span className="text-sm font-medium text-gray-900">
                            {issue.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Financial Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-500">
                    Financial Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={financialData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                          >
                            {financialData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-bold">45%</span>
                        <span className="text-xs text-gray-500">55%</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget</span>
                        <span className="font-bold text-gray-900">
                          ₵15,345.99
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount Spent</span>
                        <span className="font-bold text-gray-900">
                          ₵7345.67
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Balance</span>
                        <span className="font-bold text-gray-900">
                          ₵8,000.32
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">Balance</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-600">Amount Spent</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Site Update */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-500">
                    Live Site Update
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=200&fit=crop"
                        alt="Construction site east view"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      East view
                    </p>

                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1590856029826-c7178d11f37c?w=400&h=200&fit=crop"
                        alt="Construction site front view"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Front view
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-500">
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 text-sm">Type of Building</p>
                      <p className="font-semibold text-gray-900">
                        Private Housing
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Project Manager</p>
                      <p className="font-semibold text-gray-900">Jane Doe</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Current Phase</p>
                      <p className="font-semibold text-gray-900">Framing</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Permit Number</p>
                      <p className="font-semibold text-gray-900">
                        PSN-234-546-667
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Contractors</p>
                      <p className="font-semibold text-gray-900">
                        Basel Construction Ltd.
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium"
                    >
                      More Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 bg-gray-100 border-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-gray-100 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Central Plaza Construction
            </h1>
            <div className="flex items-center gap-3">
              <Badge className="bg-orange-500 text-white px-3 py-1">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Ongoing
              </Badge>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-8 border-b mb-8">
            <button
              onClick={() => setActiveTab("Overview")}
              className={`py-2 px-1 text-sm font-medium ${
                activeTab === "Overview"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("Legal documents")}
              className={`py-2 px-1 text-sm font-medium ${
                activeTab === "Legal documents"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Legal documents
            </button>
            <button
              onClick={() => setActiveTab("Inventory & Purchases")}
              className={`py-2 px-1 text-sm font-medium ${
                activeTab === "Inventory & Purchases"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Inventory & Purchases
            </button>
          </div>

          {activeTab === "Overview" && (
            <>
              {/* Project Stats */}
              <div className="grid grid-cols-4 gap-8 mb-8">
                <div>
                  <p className="text-gray-600 text-sm mb-1">
                    Progress Completed
                  </p>
                  <p className="text-2xl font-bold text-gray-900">65%</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Start Date</p>
                  <p className="text-lg font-semibold text-gray-900">
                    12/04/2024
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">
                    Expected Completion Date
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    12/12/24
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Last Updated</p>
                  <p className="text-lg font-semibold text-gray-900">
                    12/12/24
                  </p>
                </div>
              </div>
              {/* Phase Progress */}
              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-medium">Site Prep</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-medium">
                    Foundation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Loader className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-medium">Framing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Roofing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Finishing</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">{renderContent()}</div>
    </div>
  );
};

export default ConstructionReports;
