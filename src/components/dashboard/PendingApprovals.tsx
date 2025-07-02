
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PendingApprovals = () => {
  const approvals = [
    {
      date: 'May 15',
      companyName: 'Company Name',
      projectName: 'Project Name',
      description: 'Project Description',
      amount: '$150'
    },
    {
      date: 'Jun 16',
      companyName: 'Company Name',
      projectName: 'Project Name',
      description: 'Project Description',
      amount: '$559'
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-gray-900 font-semibold">Pending Approval</CardTitle>
        <Button variant="ghost" size="sm" className="text-orange-500">
          View All →
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {approvals.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500">{item.date.split(' ')[0]}</div>
                  <div className="text-lg font-bold text-gray-900">{item.date.split(' ')[1]}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">{item.companyName}</div>
                  <div className="font-semibold text-gray-900">{item.projectName}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingApprovals;
