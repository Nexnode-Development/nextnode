
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ProjectDetails = () => {
  const trackingData = [
    { day: 'Mon', value: 300 },
    { day: 'Tue', value: 250 },
    { day: 'Wed', value: 200 },
    { day: 'Thurs', value: 400 },
    { day: 'Fri', value: 350 },
    { day: 'Sat', value: 280 }
  ];

  const budgetData = [
    { name: 'Total Budget', value: 60, color: '#F97316' },
    { name: 'Used Funds', value: 25, color: '#FB923C' },
    { name: 'Others', value: 10, color: '#FDBA74' },
    { name: 'Balance', value: 5, color: '#D1D5DB' }
  ];

  const tasks = [
    { task: 'Lay Foundation', description: 'Excavate and pour concrete for th...', assignedTo: 'Logical', deadline: '11/12/2025', status: 'Completed' },
    { task: 'Set Up Formwork', description: 'Install timber or metal forms for be...', assignedTo: 'Esther', deadline: '21/12/2025', status: 'Ongoing' },
    { task: 'Bricklaying - Ground Floor', description: 'Lay concrete blocks up to lintel lev...', assignedTo: 'Holison', deadline: '5/12/2025', status: 'Completed' },
    { task: 'Roof Truss Installation', description: 'Assemble and install timber trusse...', assignedTo: 'Rosemond', deadline: '8/12/2025', status: 'Not Started' },
    { task: 'Floor Tiling - Bathrooms', description: 'Lay ceramic floor tiles in all bathro...', assignedTo: 'Famous', deadline: '9/1/2025', status: 'Completed' },
    { task: 'Paint Interior Walls', description: 'Apply two coats of emulsion paint...', assignedTo: 'Daniel', deadline: '11/11/2025', status: 'Ongoing' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-orange-100 text-orange-800';
      case 'Not Started':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Project 1</h1>
              <Button variant="outline" size="sm">Today</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">78%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Tasks completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                    <span>Tasks in progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Tasks still waiting</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Badge className="bg-orange-500 text-white">66</Badge>
                  <Badge className="bg-orange-300 text-white">14</Badge>
                  <Badge className="bg-gray-300 text-gray-700">16</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feed from outside door */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Feed from outside door</h3>
                    <p className="text-sm text-gray-500">Camera 002 | outside door | 03:32</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-500">Go Live</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project 1 Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Project 1 Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trackingData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Bar dataKey="value" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Budget Breakdown */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Budget Breakdown</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">📊</Button>
                  <Button variant="ghost" size="sm">📤</Button>
                  <Button variant="ghost" size="sm">⬇️</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-32 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={budgetData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          dataKey="value"
                        >
                          {budgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-2">
                  {budgetData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* List of Assigned Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>List of Assigned Tasks</CardTitle>
              <div className="flex space-x-2">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Assign Task</Button>
                <Button variant="outline">Priority</Button>
                <Button variant="outline">Download</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Task Description</TableHead>
                    <TableHead>Assigned to</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{task.task}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>{task.assignedTo}</TableCell>
                      <TableCell>{task.deadline}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(task.status)}>
                          {task.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between mt-4">
                <Button variant="outline">Previous</Button>
                <span className="text-sm text-gray-500">Page 1 of 3</span>
                <Button variant="outline">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
