"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Simple progress component for budget tracking
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
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Download,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PAGE_LAYOUTS, FINANCIAL_DATA } from "@/lib/constants";

export default function Financials() {
  const {
    totalBudget,
    allocated,
    spent,
    remaining,
    monthlyBurn,
    projectAllocations,
  } = FINANCIAL_DATA;

  const spentPercentage = (spent / totalBudget) * 100;
  const allocatedPercentage = (allocated / totalBudget) * 100;

  return (
    <div className={PAGE_LAYOUTS.main}>
      <PageHeader
        title="Financial Management"
        description="Monitor budgets, track expenses, and analyze financial performance"
        actions={
          <>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </>
        }
      />

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBudget.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              For all active projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Allocated</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${allocated.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {allocatedPercentage.toFixed(1)}% of total budget
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spent</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${spent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {spentPercentage.toFixed(1)}% of total budget
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${remaining.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Monthly burn: ${monthlyBurn.toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Allocated</span>
                <span>${allocated.toLocaleString()}</span>
              </div>
              <Progress value={allocatedPercentage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Spent</span>
                <span>${spent.toLocaleString()}</span>
              </div>
              <Progress value={spentPercentage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Remaining Budget</span>
                <span>${remaining.toLocaleString()}</span>
              </div>
              <Progress
                value={(remaining / totalBudget) * 100}
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Monthly Burn Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Burn Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                ${monthlyBurn.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Current monthly spending rate
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Projected Completion</div>
                  <div className="text-gray-600">
                    {Math.ceil(remaining / monthlyBurn)} months
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Budget Utilization</div>
                  <div className="text-gray-600">
                    {((spent / allocated) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Allocations */}
      <Card>
        <CardHeader>
          <CardTitle>Project Budget Allocations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projectAllocations.map((project, index) => {
              const spentPercentage = (project.spent / project.allocated) * 100;
              const remainingBudget = project.allocated - project.spent;

              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{project.project}</h3>
                    <Badge
                      variant={
                        spentPercentage > 90
                          ? "destructive"
                          : spentPercentage > 75
                          ? "secondary"
                          : "default"
                      }
                    >
                      {spentPercentage.toFixed(1)}% used
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                    <div>
                      <span className="text-gray-600">Allocated: </span>
                      <span className="font-medium">
                        ${project.allocated.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Spent: </span>
                      <span className="font-medium">
                        ${project.spent.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Remaining: </span>
                      <span className="font-medium">
                        ${remainingBudget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Progress value={spentPercentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Financial Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Budget Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Overall Status</span>
                <Badge variant="default">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Projects Over Budget</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Projects Near Budget Limit</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Average Budget Utilization</span>
                <span className="font-medium">75.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="w-4 h-4 mr-2" />
              Request Budget Increase
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Detailed Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Export Financial Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <PieChart className="w-4 h-4 mr-2" />
              Budget Reallocation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
