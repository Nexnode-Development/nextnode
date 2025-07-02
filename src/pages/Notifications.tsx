
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const notifications = [
    {
      id: 1,
      sender: 'Holison',
      subject: 'Site Plan Revision Uploaded for "Greenfield Mall"',
      content: 'A revised version of the site plan for "Greenfield Mall" has been uploaded by Michael Owusu. The changes include updated parking layouts and landscape design modifications.',
      time: '1 min ago',
      category: 'Project',
      isRead: false
    },
    {
      id: 2,
      sender: 'Rosemond',
      subject: 'Client Meeting Scheduled - "Urban Living Tower"',
      content: 'A new meeting has been scheduled with the client for the "Urban Living Tower" project. Meeting Details: Project: Urban Living Tower, Date: Friday, April 19, 2025, Time: 2:00 PM - 3:30 PM, Mode: Virtual Meeting, Platform: Zoom',
      time: '2 days ago',
      category: 'Meeting',
      isRead: false
    },
    {
      id: 3,
      sender: 'Famous',
      subject: 'Client Feedback Received - Residential Complex Phase II',
      content: 'The client has submitted feedback on the initial concept presentation for Phase II of the Residential Complex. Main concerns include structural floor plans, modifications to balcony sizes, and sustainability integration strategy.',
      time: '2 days ago',
      category: 'Weekend',
      isRead: false
    },
    {
      id: 4,
      sender: 'Mr. Daniel',
      subject: 'Reminder: Submit CPD Hours for 2025 Q1',
      content: 'Your Continuing Professional Development (CPD) log for Q1 2025 is due by April 30. You currently have 9 of the required 15 hours logged.',
      time: '3 days ago',
      category: 'Budget',
      isRead: false
    },
    {
      id: 5,
      sender: 'Mr. Logical',
      subject: 'You Were Mentioned in a Project Discussion',
      content: 'Kwame Boadu tagged you in a discussion on the "Airport Lounge Extension" model.',
      time: '3 days ago',
      category: 'Label',
      isRead: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Project':
        return 'bg-orange-500';
      case 'Meeting':
        return 'bg-orange-500';
      case 'Weekend':
        return 'bg-blue-500';
      case 'Budget':
        return 'bg-orange-500';
      case 'Label':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Notifications</h2>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">📧</Button>
                <Button variant="ghost" size="sm">🗑️</Button>
                <Button variant="ghost" size="sm">🗃️</Button>
                <Button variant="ghost" size="sm">🕒</Button>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">← </Button>
              <Button variant="ghost" size="sm">→</Button>
              <Button variant="ghost" size="sm">⋮</Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">All mail</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative">
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    !notification.isRead ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">{notification.sender}</span>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  
                  <div className="text-sm font-medium mb-1">{notification.subject}</div>
                  <div className="text-xs text-gray-600 line-clamp-2">{notification.content}</div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <Badge className={`${getCategoryColor(notification.category)} text-white text-xs`}>
                      {notification.category}
                    </Badge>
                    {notification.category === 'Budget' && (
                      <div className="flex space-x-1">
                        <Badge variant="outline" className="text-xs">About</Badge>
                        <Badge variant="outline" className="text-xs">Work</Badge>
                      </div>
                    )}
                    {notification.category === 'Label' && (
                      <div className="flex space-x-1">
                        <Badge variant="outline" className="text-xs">Label</Badge>
                        <Badge variant="outline" className="text-xs">Label</Badge>
                        <Badge variant="outline" className="text-xs">Label</Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">Rosemond</h3>
                    <span className="text-sm text-gray-500">Mar 25, 2025, 1:15:00 PM</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Re: Client Meeting Scheduled - "Urban Living Tower"
                </div>
                <div className="text-sm text-gray-600">
                  Re: rosemondoseiagyemang9@gmail.com
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Dear Architect,</p>
                  
                  <p>
                    This is to inform you that a client consultation meeting has been officially scheduled in relation to the 
                    ongoing "Urban Living Tower" project. Your presence and input will be essential as the meeting will 
                    involve high-level discussions that impact both design progression and implementation timelines.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Meeting Details</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Project: Urban Living Tower – High-Rise Residential Development</li>
                      <li>Date: Friday, April 19, 2025</li>
                      <li>Time: 2:00 PM – 3:30 PM (GMT)</li>
                      <li>Mode: Virtual Meeting</li>
                      <li>Platform: Zoom</li>
                      <li>Meeting Link: [Click to Join Meeting]</li>
                      <li>Meeting Host: Samuel Mensah (Client Representative – CityBuild Holdings)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Agenda Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Design Development Updates
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Review of updated architectural floor plans</li>
                          <li>Discussion on modifications to balcony sizes and structural adjustments</li>
                          <li>Presentation of revised unit layouts for premium-level suites</li>
                        </ul>
                      </li>
                      <li>Sustainability Integration Strategy
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Overview of proposed green building materials and passive design elements</li>
                          <li>Incorporating solar shading devices and rooftop greenery</li>
                          <li>Evaluation of rainwater harvesting and greywater reuse systems</li>
                        </ul>
                      </li>
                      <li>Façade Lighting Proposal
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Review of preliminary lighting concepts for night-time visibility and aesthetics</li>
                          <li>Coordination with MEP consultants on fixture placement and energy efficiency</li>
                          <li>Discussion on client preferences for mood, color temperature, and brand alignment</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <p>
                    Thanks,<br />
                    Rosemond
                  </p>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Reply Rosemond...</span>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Send</Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Mute this thread
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
