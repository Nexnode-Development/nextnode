
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VideoCall = () => {
  const [message, setMessage] = useState('');

  const participants = [
    { name: 'Dianne Russell', avatar: '/placeholder.svg', status: 'active', initials: 'DR' },
    { name: 'Guy Hawkins', avatar: '/placeholder.svg', status: 'muted', initials: 'GH' },
    { name: 'Kathryn Murphy', avatar: '/placeholder.svg', status: 'speaking', initials: 'KM' }
  ];

  const chatMessages = [
    {
      sender: 'Kathryn Murphy',
      time: '11:01 AM',
      message: 'Good afternoon, everyone.',
      avatar: 'KM'
    },
    {
      sender: 'Kathryn Murphy',
      time: '11:02 AM',
      message: 'We will start this meeting',
      avatar: 'KM'
    },
    {
      sender: 'Joshua Abraham',
      time: '11:02 AM',
      message: "Yes, Let's start this meeting",
      avatar: 'JA'
    },
    {
      sender: 'Kathryn Murphy',
      time: '12:04 AM',
      message: 'Today, we are here to discuss last week\'s sales.',
      avatar: 'KM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 h-screen flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Projects</span>
                <span>/</span>
                <span>Project 1</span>
                <span>/</span>
                <span className="text-gray-900">Video Call</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">🔍 Search</Button>
            </div>
          </div>

          <div className="flex-1 flex space-x-6">
            {/* Main Video Area */}
            <div className="flex-1 flex flex-col">
              {/* Video Call Header */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📹</span>
                  </div>
                  <h2 className="text-xl font-bold">Client Meeting Scheduled – "Urban Living Tower"</h2>
                </div>
                <p className="text-sm text-gray-500">May 1st, 2025 | 12:05 AM</p>
              </div>

              {/* Main Video */}
              <Card className="flex-1 mb-4">
                <CardContent className="p-0 relative h-full">
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">24:01:45</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="sm" className="text-white">
                      ⛶
                    </Button>
                  </div>
                  <div className="h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-blue-500 text-white text-2xl">AJ</AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                        <span className="font-medium">Adam Joseph</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Participant Videos */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="h-32 bg-gray-200 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                      <div className="absolute bottom-2 left-2 text-white text-sm font-medium flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🎤</span>
                        </div>
                        <span>Jessie Jung</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <div className="h-32 bg-gray-200 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                      <div className="absolute bottom-2 left-2 text-white text-sm font-medium flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🎤</span>
                        </div>
                        <span>Alice Wong</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <div className="h-32 bg-gray-200 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                      <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                        <span>Theresa Webb</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600">
                  🎤
                </Button>
                <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600">
                  📹
                </Button>
                <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600">
                  ➕
                </Button>
                <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600">
                  ▶️
                </Button>
                <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600">
                  💬
                </Button>
                <Button className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400">
                  ⋯
                </Button>
                <Button className="w-16 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white">
                  End Call
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 space-y-6">
              {/* Participants */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Participants</h3>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1">
                      Add Participant 👥
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {participants.map((participant, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={participant.avatar} />
                            <AvatarFallback className="bg-blue-500 text-white text-sm">
                              {participant.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{participant.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-orange-500">
                            🎤
                          </Button>
                          <Button variant="ghost" size="sm" className="text-orange-500">
                            ✏️
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat */}
              <Card className="flex-1">
                <CardContent className="p-4 h-full flex flex-col">
                  <Tabs defaultValue="group" className="flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="group">Group</TabsTrigger>
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="group" className="flex-1 flex flex-col">
                      <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                        {chatMessages.map((msg, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Avatar className="h-6 w-6 mt-1">
                              <AvatarFallback className="bg-orange-500 text-white text-xs">
                                {msg.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium">{msg.sender}</span>
                                <span className="text-xs text-gray-500">{msg.time}</span>
                              </div>
                              <p className="text-sm text-gray-700">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Input
                          placeholder="Type Something..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1"
                        />
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          ➤
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="personal">
                      <div className="text-center text-gray-500 text-sm">
                        No personal messages yet
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoCall;
