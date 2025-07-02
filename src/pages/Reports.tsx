
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const budgetData = [
    { name: 'Balance', value: 45, color: '#F97316' },
    { name: 'Amount Spent', value: 55, color: '#FB923C' }
  ];

  const workProgress = [
    { task: 'Excavation', lastUpdate: '29/04/2025', status: 'Completed' },
    { task: 'Plastering', lastUpdate: '29/04/2025', status: 'Ongoing' },
    { task: 'Plumbing', lastUpdate: '29/04/2025', status: 'Ongoing' },
    { task: 'Roofing', lastUpdate: '29/04/2025', status: 'Completed' },
    { task: 'Electrical Wiring', lastUpdate: '29/04/2025', status: 'Completed' }
  ];

  const issues = [
    { problem: 'Foundation needs more sand fill', risk: 'High' },
    { problem: 'Resize of the windows', risk: 'Moderate' },
    { problem: 'Wrong positioning of Columns', risk: 'Low' }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-500';
      case 'Moderate': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600';
      case 'Ongoing': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Central Plaza Construction</h1>
              <Badge className="bg-orange-500 text-white">Ongoing</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">📁</Button>
              <Button variant="ghost" size="sm">📅</Button>
              <Button variant="ghost" size="sm">⬇️</Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="legal">Legal documents</TabsTrigger>
              <TabsTrigger value="inventory">Inventory & Purchases</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              {/* Project Status */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">65%</div>
                    <div className="text-sm text-gray-500">Progress Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">12/04/2024</div>
                    <div className="text-sm text-gray-500">Start Date</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">12/12/24</div>
                    <div className="text-sm text-gray-500">Expected Completion Date</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">12/12/24</div>
                    <div className="text-sm text-gray-500">Last Updated</div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Phases */}
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-500 font-medium">Site Prep</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-500 font-medium">Foundation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
                  <span className="text-orange-300 font-medium">Framing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400">Roofing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400">Finishing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Work Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-500">Work Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-500 mb-2">
                        <span>Task</span>
                        <span>Last Update</span>
                        <span>Current state</span>
                      </div>
                      {workProgress.map((task, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 text-sm">
                          <span className="font-medium">{task.task}</span>
                          <span className="text-gray-500">{task.lastUpdate}</span>
                          <span className={getStatusColor(task.status)}>{task.status}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Live Site Update */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-500">Live Site Update</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/02f16df3-e97d-42d2-8c11-4c1206017f15.png" 
                          alt="East view" 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">▶</span>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                          East view
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/02f16df3-e97d-42d2-8c11-4c1206017f15.png" 
                          alt="Front view" 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">▶</span>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                          Front view
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Performance & Project Details */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-orange-500">Financial Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={budgetData}
                                cx="50%"
                                cy="50%"
                                innerRadius={25}
                                outerRadius={35}
                                dataKey="value"
                              >
                                {budgetData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="text-sm text-gray-500">Budget</div>
                            <div className="font-bold">₵15,345.99</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Amount Spent</div>
                            <div className="font-bold">₵7345.67</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Balance</div>
                            <div className="font-bold">₵8,000.32</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-orange-500">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-500">Type of Building</div>
                          <div className="font-semibold">Private Housing</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Project Manager</div>
                          <div className="font-semibold">Jane Doe</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Current Phase</div>
                          <div className="font-semibold">Framing</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Permit Number</div>
                          <div className="font-semibold">PSN-234-546-667</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Contractors</div>
                          <div className="font-semibold">Basel Construction Ltd.</div>
                        </div>
                        <Button variant="ghost" className="text-orange-500 p-0">More Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Issues and Risk */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-orange-500">Issues and risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium text-gray-500 mb-4">
                    <span>Problems</span>
                    <span>Risk Level</span>
                  </div>
                  <div className="space-y-3">
                    {issues.map((issue, index) => (
                      <div key={index} className="grid grid-cols-2 gap-2 items-center">
                        <span className="text-sm">{issue.problem}</span>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getRiskColor(issue.risk)}`}></div>
                          <span className="text-sm">{issue.risk}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Legal Documents</h3>
                  <p className="text-gray-600">Legal documents content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Inventory & Purchases</h3>
                  <p className="text-gray-600">Inventory and purchases content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Reports;
