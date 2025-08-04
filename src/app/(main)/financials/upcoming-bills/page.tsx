"use client";
import React from "react";
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
  Plus,
} from "lucide-react";
import Link from "next/link";

const AllUpcomingBills = () => {
  const upcomingBills = [
    {
      date: "Oct 5",
      name: "Adombi Site",
      lastCharge: "14 May, 2025",
      amount: 150,
      category: "Rent",
    },
    {
      date: "Nov 21",
      name: "WareHouse Servicing",
      lastCharge: "17 Jun, 2025",
      amount: 559,
      category: "Maintenance",
    },
    {
      date: "Dec 1",
      name: "Software Subscription",
      lastCharge: "1 Nov, 2024",
      amount: 99,
      category: "Software",
    },
    {
      date: "Dec 15",
      name: "Insurance Premium",
      lastCharge: "15 Nov, 2024",
      amount: 350,
      category: "Insurance",
    },
    {
      date: "Jan 1, 2026",
      name: "Vehicle Lease",
      lastCharge: "1 Dec, 2025",
      amount: 450,
      category: "Transport",
    },
    {
      date: "Jan 10, 2026",
      name: "Utility Bill",
      lastCharge: "10 Dec, 2025",
      amount: 200,
      category: "Utilities",
    },
  ];

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
            <span className="font-medium">All Upcoming Bills</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search bills"
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
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Upcoming Bills</CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" /> Add New Bill
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center w-16">
                      <div className="text-xs text-gray-500">
                        {bill.date.split(" ")[0]}
                      </div>
                      <div className="text-2xl font-bold">
                        {bill.date.split(" ")[1]}
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="font-medium">{bill.name}</div>
                      <div className="text-xs text-gray-500">
                        Last Charge - {bill.lastCharge}
                      </div>
                    </div>
                  </div>

                  <div className="text-lg font-semibold">
                    ${bill.amount.toFixed(2)}
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

export default AllUpcomingBills;
