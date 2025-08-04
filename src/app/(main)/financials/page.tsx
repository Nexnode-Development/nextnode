"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  CreditCard,
  Target,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Home,
  Utensils,
  Car,
  Wrench,
  Briefcase,
  MoreHorizontal,
  Star,
  Search,
  Settings,
  RotateCcw,
  Bell,
  Grid3X3,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");

  const chartData = [
    { day: "17 Sun", thisWeek: 200, lastWeek: 180 },
    { day: "18 Mon", thisWeek: 150, lastWeek: 220 },
    { day: "19 Tue", thisWeek: 80, lastWeek: 160 },
    { day: "20 Wed", thisWeek: 170, lastWeek: 190 },
    { day: "21 Thu", thisWeek: 190, lastWeek: 200 },
    { day: "22 Fri", thisWeek: 220, lastWeek: 170 },
    { day: "23 Sat", thisWeek: 180, lastWeek: 150 },
  ];

  const allTransactions = [
    {
      name: "Cement Bags",
      category: "Gadget & Gear",
      amount: 160.0,
      date: "17 May 2023",
      type: "expense",
    },
    {
      name: "Roofing",
      category: "XL fashions",
      amount: 20.0,
      date: "17 May 2023",
      type: "expense",
    },
    {
      name: "CCTV Cameras",
      category: "Hajir Biryani",
      amount: 10.0,
      date: "17 May 2023",
      type: "expense",
    },
    {
      name: "Sensors",
      category: "Uber",
      amount: 12.0,
      date: "17 May 2023",
      type: "expense",
    },
    {
      name: "Mortar",
      category: "Gadget & Gear",
      amount: 22.0,
      date: "17 May 2023",
      type: "expense",
    },
    {
      name: "Client Payment",
      category: "Income",
      amount: 5000,
      date: "18 May 2023",
      type: "revenue",
    },
  ];

  const filteredTransactions = allTransactions.filter((transaction) => {
    if (activeTab === "All") return true;
    if (activeTab === "Revenue") return transaction.type === "revenue";
    if (activeTab === "Expenses") return transaction.type === "expense";
    return true;
  });

  const expenses = [
    {
      category: "Housing",
      amount: 250.0,
      change: "15%",
      trend: "up",
      icon: Home,
    },
    {
      category: "Food",
      amount: 350.0,
      change: "08%",
      trend: "down",
      icon: Utensils,
    },
    {
      category: "Transportation",
      amount: 50.0,
      change: "12%",
      trend: "down",
      icon: Car,
    },
    {
      category: "Services",
      amount: 80.0,
      change: "15%",
      trend: "down",
      icon: Wrench,
    },
    {
      category: "Workmanship",
      amount: 420.0,
      change: "25%",
      trend: "up",
      icon: Briefcase,
    },
    {
      category: "Others",
      amount: 650.0,
      change: "23%",
      trend: "up",
      icon: MoreHorizontal,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Star className="w-5 h-5 text-gray-400" />
            <span className="font-medium">All Projects</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
            <RotateCcw className="w-5 h-5 text-gray-400" />
            <Bell className="w-5 h-5 text-gray-400" />
            <Grid3X3 className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-500 font-normal">
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">$240,399</div>
              <div className="text-sm text-gray-500 mb-4">All Accounts</div>

              {/* Credit Card */}
              <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 w-8 h-8 bg-red-600 rounded-full"></div>
                <div className="text-sm opacity-90">Account Type</div>
                <div className="font-semibold">Credit Card</div>
                <div className="text-xs opacity-75 mt-2">
                  **** **** **** 2598
                </div>
                <div className="text-right mt-2">
                  <div className="text-xl font-bold">$25000</div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button variant="ghost" size="sm">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-gray-500 font-normal">Goals</CardTitle>
              <span className="text-sm text-gray-400">May, 2023</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">$20,000</div>

              <div className="flex items-center mb-4">
                <Target className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Target Achieved</span>
              </div>
              <div className="text-xl font-semibold mb-2">$12,500</div>

              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.62)}`}
                      className="text-orange-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">62%</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>This month Target</span>
                <span>12K</span>
              </div>
              <div className="text-lg font-semibold">$20,000</div>
              <div className="text-xs text-gray-400">Target vs Achievement</div>
            </CardContent>
          </Card>

          {/* Upcoming Bills */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-gray-500 font-normal">
                Upcoming Bill
              </CardTitle>
              <Link href="/financials/upcoming-bills">
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Oct</div>
                    <div className="text-2xl font-bold">5</div>
                  </div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="font-medium">Adombi Site</div>
                  <div className="text-xs text-gray-500">
                    Last Charge - 14 May, 2025
                  </div>
                </div>
                <div className="text-lg font-semibold">$150</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Nov</div>
                    <div className="text-2xl font-bold">21</div>
                  </div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="font-medium">WareHouse Servicing</div>
                  <div className="text-xs text-gray-500">
                    Last Charge - 17 Jun, 2025
                  </div>
                </div>
                <div className="text-lg font-semibold">$559</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-gray-500 font-normal">
                Recent Transaction
              </CardTitle>
              <Link href="/financials/recent-transactions">
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 border-b mb-4">
                <button
                  onClick={() => setActiveTab("All")}
                  className={`pb-2 ${
                    activeTab === "All"
                      ? "border-b-2 border-orange-500 text-orange-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("Revenue")}
                  className={`pb-2 ${
                    activeTab === "Revenue"
                      ? "border-b-2 border-orange-500 text-orange-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  Revenue
                </button>
                <button
                  onClick={() => setActiveTab("Expenses")}
                  className={`pb-2 ${
                    activeTab === "Expenses"
                      ? "border-b-2 border-orange-500 text-orange-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  Expenses
                </button>
              </div>

              <div className="space-y-4">
                {filteredTransactions.slice(0, 5).map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-sm text-gray-500">
                          {transaction.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        ${transaction.amount.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics and Expenses */}
          <div className="space-y-6">
            {/* Statistics Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-gray-500 font-normal">
                  Statistics
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                    <span className="text-sm">This week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                    <span className="text-sm">Last week</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barCategoryGap="20%">
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        className="text-xs"
                      />
                      <YAxis hide />
                      <Bar
                        dataKey="lastWeek"
                        fill="#e5e7eb"
                        radius={[2, 2, 0, 0]}
                      />
                      <Bar
                        dataKey="thisWeek"
                        fill="#f97316"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Expenses Breakdown */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-gray-500 font-normal">
                  Expenses Breakdown
                </CardTitle>
                <span className="text-xs text-gray-400">
                  *Compare to last month
                </span>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {expenses.map((expense, index) => {
                    const Icon = expense.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {expense.category}
                            </div>
                            <div className="text-lg font-bold">
                              ${expense.amount.toFixed(2)}
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{expense.change}</span>
                              <TrendingUp
                                className={`w-3 h-3 ml-1 ${
                                  expense.trend === "up"
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
