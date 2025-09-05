"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ChevronLeft,
  ChevronRight,
  Edit,
  Target,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const weeklyData = [
    { day: "17 Sun", thisWeek: 18, lastWeek: 12 },
    { day: "18 Mon", thisWeek: 13, lastWeek: 10 },
    { day: "19 Tue", thisWeek: 9, lastWeek: 15 },
    { day: "20 Wed", thisWeek: 16, lastWeek: 14 },
    { day: "21 Thu", thisWeek: 16, lastWeek: 13 },
    { day: "22 Fri", thisWeek: 18, lastWeek: 14 },
    { day: "23 Sat", thisWeek: 15, lastWeek: 16 },
    { day: "17 Sun", thisWeek: 19, lastWeek: 11 },
    { day: "18 Mon", thisWeek: 13, lastWeek: 15 },
    { day: "19 Tue", thisWeek: 9, lastWeek: 13 },
    { day: "20 Wed", thisWeek: 15, lastWeek: 14 },
    { day: "21 Thu", thisWeek: 16, lastWeek: 12 },
  ];

  const progressData = [
    { name: "Completed", value: 78, color: "#f97316" },
    { name: "Remaining", value: 22, color: "#e5e7eb" },
  ];

  const targetData = [
    { name: "Achieved", value: 4, color: "#f97316" },
    { name: "Remaining", value: 6, color: "#e5e7eb" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome <span className="text-orange-500">Daniel</span>
          </h1>
          <p className="text-gray-600">
            Here&apos;s an <span className="text-orange-500">Overview</span> of
            your projects
          </p>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Projects */}
          <Card>
            <CardContent className="px-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-600 font-medium">Total Project</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 p-0 h-auto"
                >
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20</div>
              <p className="text-sm text-gray-500">All Projects</p>

              {/* Current Project Card */}
              <Card className="bg-orange-500 text-white mt-4">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-orange-100 text-xs">Current Project</p>
                      <p className="font-semibold">Good Condition</p>
                      <p className="text-orange-200 text-xs">
                        Project ID: 2598
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-orange-500 hover:bg-gray-100"
                    >
                      Check-Out <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </Button>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Near Deadline */}
          <Card>
            <CardContent className="px-6">
              <h3 className="text-gray-600 font-medium mb-4">Near Deadline</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl font-bold text-gray-900">7</div>
                <Edit className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mb-6">May/June, 2025</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Project Completed</p>
                    <p className="text-xl font-bold text-gray-900">4</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Project Target</p>
                    <p className="text-xl font-bold text-gray-900">10</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Target vs Achievement</span>
                  <span>4/10</span>
                </div>
                <div className="relative w-20 h-20 mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={targetData}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={35}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {targetData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Approval */}
          <Card>
            <CardContent className="px-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-600 font-medium">Pending Approval</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 p-0 h-auto"
                >
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-gray-900">
                        15
                      </span>
                      <span className="text-sm text-gray-500">May</span>
                    </div>
                    <p className="text-sm text-gray-500">Company Name</p>
                    <p className="font-medium text-gray-900">Project Name</p>
                    <p className="text-sm text-gray-500">Project Description</p>
                  </div>
                  <div className="text-lg font-bold text-gray-900">$150</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-gray-900">
                        16
                      </span>
                      <span className="text-sm text-gray-500">Jun</span>
                    </div>
                    <p className="text-sm text-gray-500">Company Name</p>
                    <p className="font-medium text-gray-900">Project Name</p>
                    <p className="text-sm text-gray-500">Project Description</p>
                  </div>
                  <div className="text-lg font-bold text-gray-900">$559</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-600 font-medium">
              Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">
                  Weekly Comparison
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-sm text-gray-600">This week</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">Last week</span>
                </div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barCategoryGap="20%">
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    domain={[0, 20]}
                    ticks={[0, 5, 10, 15, 20]}
                  />
                  <Bar
                    dataKey="lastWeek"
                    fill="#e5e7eb"
                    radius={[2, 2, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="thisWeek"
                    fill="#f97316"
                    radius={[2, 2, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
