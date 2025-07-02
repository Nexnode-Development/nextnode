
import React from 'react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="mb-4 lg:mb-0">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome <span className="text-orange-500">Daniel</span>
        </h1>
        <p className="text-gray-600 mt-1">
          Here's an <span className="text-orange-500 font-medium">Overview</span> of your projects
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center relative">
            <span className="text-white font-semibold">78%</span>
            <svg className="absolute inset-0 w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-orange-200"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.78)}`}
                className="text-white"
              />
            </svg>
          </div>
          <span className="text-sm text-gray-600">Recent Project</span>
        </div>
        
        <div className="flex space-x-2">
          <div className="px-3 py-1 bg-orange-500 text-white rounded-md text-sm font-medium">
            66
          </div>
          <div className="px-3 py-1 bg-orange-300 text-white rounded-md text-sm font-medium">
            14
          </div>
          <div className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm font-medium">
            16
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
