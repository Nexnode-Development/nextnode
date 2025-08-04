"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Star,
  Search,
  Settings,
  RotateCcw,
  Bell,
  Grid3X3,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const AllRecentTransactions = () => {
  const [activeTab, setActiveTab] = useState("All");

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
    {
      name: "Steel Beams",
      category: "Materials",
      amount: 1250.0,
      date: "16 May 2023",
      type: "expense",
    },
    {
      name: "Consulting Fee",
      category: "Services",
      amount: 1500,
      date: "15 May 2023",
      type: "revenue",
    },
    {
      name: "Plumbing Supplies",
      category: "Materials",
      amount: 450.0,
      date: "15 May 2023",
      type: "expense",
    },
    {
      name: "Electrical Wiring",
      category: "Materials",
      amount: 780.0,
      date: "14 May 2023",
      type: "expense",
    },
    {
      name: "Rental Income",
      category: "Income",
      amount: 2500,
      date: "14 May 2023",
      type: "revenue",
    },
  ];

  const filteredTransactions = allTransactions.filter((transaction) => {
    if (activeTab === "All") return true;
    if (activeTab === "Revenue") return transaction.type === "revenue";
    if (activeTab === "Expenses") return transaction.type === "expense";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/financials"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <Star className="w-5 h-5 text-gray-400" />
            <span className="font-medium">All Recent Transactions</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search transactions"
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

      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
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
              {filteredTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
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
                    <div
                      className={`font-semibold ${
                        transaction.type === "revenue"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "revenue" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
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
      </div>
    </div>
  );
};

export default AllRecentTransactions;
