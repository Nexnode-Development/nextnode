
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectOverview = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Total Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600 font-medium">Total Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900 mb-4">20</div>
          <div className="text-sm text-gray-500 mb-4">All Projects</div>
          
          <div className="bg-orange-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="text-sm opacity-90">Current Project</div>
            <div className="font-semibold">Good Condition</div>
            <div className="text-xs opacity-75">Project ID: 2598</div>
            <Button className="mt-2 bg-white text-orange-500 hover:bg-gray-100" size="sm">
              Check-Out
            </Button>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            <Button variant="ghost" size="sm">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Near Deadline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600 font-medium">Near Deadline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline space-x-2 mb-4">
            <span className="text-3xl font-bold text-gray-900">7</span>
            <span className="text-gray-400">📝</span>
          </div>
          <div className="text-sm text-gray-500 mb-6">May/June, 2025</div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Project Completed</span>
              <span className="font-semibold">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Project Target</span>
              <span className="font-semibold">4</span>
            </div>
            <div className="text-center text-sm text-gray-500">
              Target vs Achievement
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.8)}`}
                  className="text-orange-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold">4</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Summary */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-gray-600 font-medium">Task Summary</CardTitle>
          <Button variant="ghost" size="sm" className="text-orange-500">
            View All →
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Tasks completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Tasks in progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Tasks still waiting</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
