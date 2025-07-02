
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Messages = () => {
  const [selectedTeam, setSelectedTeam] = useState('UI/UX Team');
  
  const teams = [
    { name: 'UI/UX Team', unread: 0 },
    { name: 'Project 1', unread: 0 },
    { name: 'Project 3', unread: 0 }
  ];

  const directMessages = [
    { name: 'Daniel', unread: 4, initial: 'D', color: 'bg-pink-500' },
    { name: 'Leroy', unread: 6, initial: 'L', color: 'bg-red-500' },
    { name: 'kk', unread: 10, initial: 'K', color: 'bg-blue-500' }
  ];

  const messages = [
    {
      sender: 'Daniel',
      time: '1:20 PM',
      message: 'Just reviewed it, James. Structurally, it looks solid. I\'d suggest thickening the support beams near the elevator shaft. We might need to account for heavy load distribution.',
      initial: 'D',
      color: 'bg-pink-500'
    },
    {
      sender: 'KK',
      time: '1:20 PM',
      message: 'Not from any side either. I\'ll just need a bit more wall space to install the main electrical panels — preferably near the entrance but hidden from direct view.',
      initial: 'K',
      color: 'bg-blue-500'
    },
    {
      sender: 'You',
      time: '1:20 PM',
      message: 'Thanks, James! I love the open space in the lobby. I\'m thinking of using natural wood and glass for a warmer feel. Would that clash with any structural elements, Sofia?',
      initial: 'Y',
      color: 'bg-green-500'
    },
    {
      sender: 'Leroy',
      time: '1:20 PM',
      message: 'Hey team, just uploaded the initial blueprint for the lobby area. Can everyone check if it aligns with the vision we discussed during the last meeting?',
      initial: 'L',
      color: 'bg-red-500'
    }
  ];

  const notifications = [
    { title: 'Permit Approved: Mixed-Us...', time: 'Just now' },
    { title: 'Meeting Scheduled: Client R...', time: '59 minutes ago' },
    { title: 'New Revision Uploaded: Flo...', time: '12 hours ago' },
    { title: 'Milestone Achieved: Design...', time: 'Today, 11:59 AM' }
  ];

  const activities = [
    { user: 'Holison', action: 'commented on your...', time: 'Just now' },
    { user: 'You', action: 'uploaded Site Plan Revi...', time: '59 minutes ago' },
    { user: 'You', action: 'were assigned a new ta...', time: '12 hours ago' },
    { user: 'You', action: 'approved the changes t...', time: 'Today, 11:59 AM' },
    { user: 'You', action: 'joined the project: "Mod...', time: 'Feb 5, 2025' }
  ];

  const contacts = [
    { name: 'Holison', status: 'online' },
    { name: 'Rosemond', status: 'offline' },
    { name: 'Famous', status: 'offline' },
    { name: 'Luna TK', status: 'online' },
    { name: 'Wallace', status: 'offline' },
    { name: 'Daniel', status: 'offline' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Messages</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Teams</h3>
                  <div className="space-y-1">
                    {teams.map((team) => (
                      <div
                        key={team.name}
                        className={`p-2 rounded cursor-pointer ${selectedTeam === team.name ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                        onClick={() => setSelectedTeam(team.name)}
                      >
                        {team.name}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-2 text-left justify-start">
                    Create Team
                  </Button>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Direct Messages</h3>
                  <div className="space-y-1">
                    {directMessages.map((dm) => (
                      <div key={dm.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className={`${dm.color} text-white text-sm`}>
                              {dm.initial}
                            </AvatarFallback>
                          </Avatar>
                          <span>{dm.name}</span>
                        </div>
                        {dm.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {dm.unread}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-white">
              <h2 className="text-xl font-bold text-orange-500">{selectedTeam}</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`${msg.color} text-white`}>
                      {msg.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold">{msg.sender}</span>
                      <span className="text-sm text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <Input placeholder="Write a message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 p-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-3">
                {notifications.map((notif, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{notif.title}</div>
                      <div className="text-xs text-gray-500">{notif.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Activities</h3>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-gray-300 text-xs">
                        {activity.user[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <div className="space-y-2">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-sm">{contact.name}</span>
                    </div>
                    <div className="text-xs text-gray-500">{contact.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
