
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const StatisticsSection = () => {
  const chartData = [
    { day: '17 Sun', thisWeek: 18, lastWeek: 12 },
    { day: '18 Mon', thisWeek: 12, lastWeek: 8 },
    { day: '19 Tue', thisWeek: 8, lastWeek: 15 },
    { day: '20 Wed', thisWeek: 15, lastWeek: 10 },
    { day: '21 Thu', thisWeek: 16, lastWeek: 12 },
    { day: '22 Fri', thisWeek: 18, lastWeek: 14 },
    { day: '23 Sat', thisWeek: 14, lastWeek: 16 },
    { day: '17 Sun', thisWeek: 20, lastWeek: 11 },
    { day: '18 Mon', thisWeek: 12, lastWeek: 9 },
    { day: '19 Tue', thisWeek: 8, lastWeek: 13 },
    { day: '20 Wed', thisWeek: 16, lastWeek: 15 },
    { day: '21 Thu', thisWeek: 17, lastWeek: 14 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-900 font-semibold">Statistics</CardTitle>
        <div className="flex items-center space-x-4">
          <select className="text-sm border border-gray-200 rounded-md px-3 py-2">
            <option>Weekly Comparison</option>
            <option>Monthly Comparison</option>
          </select>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span>This week</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <span>Last week</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="20%">
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                domain={[0, 20]}
                ticks={[0, 5, 10, 15, 20]}
              />
              <Bar 
                dataKey="lastWeek" 
                fill="#D1D5DB" 
                radius={[2, 2, 0, 0]}
                maxBarSize={24}
              />
              <Bar 
                dataKey="thisWeek" 
                fill="#F97316" 
                radius={[2, 2, 0, 0]}
                maxBarSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsSection;
