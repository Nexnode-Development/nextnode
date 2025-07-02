
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Financials = () => {
  const transactions = [
    { name: 'Cement Bags', category: 'Gadget & Gear', amount: 160.00, date: '17 May 2023' },
    { name: 'Roofing', category: 'XL fashions', amount: 20.00, date: '17 May 2023' },
    { name: 'CCTV Cameras', category: 'Hajir Biryani', amount: 10.00, date: '17 May 2023' },
    { name: 'Sensors', category: 'Uber', amount: 12.00, date: '17 May 2023' },
    { name: 'Mortar', category: 'Gadget & Gear', amount: 22.00, date: '17 May 2023' }
  ];

  const chartData = [
    { day: '17 Sun', value: 200 },
    { day: '18 Mon', value: 150 },
    { day: '19 Tue', value: 100 },
    { day: '20 Wed', value: 300 },
    { day: '21 Thu', value: 250 },
    { day: '22 Fri', value: 400 },
    { day: '23 Sat', value: 350 }
  ];

  const expenseData = [
    { name: 'Housing', value: 250, color: '#F97316' },
    { name: 'Food', value: 350, color: '#FB923C' },
    { name: 'Transportation', value: 50, color: '#FDBA74' },
    { name: 'Services', value: 80, color: '#FED7AA' },
    { name: 'Workmanship', value: 420, color: '#FFEDD5' },
    { name: 'Others', value: 650, color: '#FFF7ED' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">All Projects</h1>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">Search</Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Total Balance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$240,399</div>
                <p className="text-sm text-gray-500">All Accounts</p>
                <div className="mt-4 p-4 bg-orange-500 text-white rounded-lg">
                  <div className="text-sm">Account Type</div>
                  <div className="text-lg font-semibold">Credit Card</div>
                  <div className="text-sm">**** **** **** 2598</div>
                  <div className="text-right text-xl font-bold">$25000</div>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$20,000</div>
                <p className="text-sm text-gray-500">May, 2023</p>
                <div className="mt-4">
                  <div className="text-sm text-gray-500">Target Achieved</div>
                  <div className="text-lg font-semibold">$12,500</div>
                  <div className="text-sm text-gray-500">This month Target</div>
                  <div className="text-lg font-semibold">$20,000</div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Bill */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Upcoming Bill</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">Adombi Site</div>
                      <div className="text-sm text-gray-500">Last Charge - 14 May, 2025</div>
                    </div>
                    <div className="text-lg font-bold">$150</div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">WareHouse Servicing</div>
                      <div className="text-sm text-gray-500">Last Charge - 17 Jun, 2025</div>
                    </div>
                    <div className="text-lg font-bold">$559</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Transaction */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transaction</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="expenses">Expenses</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">{transaction.name}</div>
                          <div className="text-sm text-gray-500">{transaction.category}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">${transaction.amount}</div>
                          <div className="text-sm text-gray-500">{transaction.date}</div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="revenue">Revenue transactions...</TabsContent>
                  <TabsContent value="expenses">Expense transactions...</TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
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
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Bar dataKey="value" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expenses Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Expenses Breakdown</CardTitle>
              <p className="text-sm text-gray-500">*Compare to last month</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {expenseData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold">${item.value}.00</div>
                    <div className="text-sm text-gray-500">{item.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Financials;
