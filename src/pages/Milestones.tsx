
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Milestones = () => {
  const milestones = [
    {
      id: 1,
      title: 'Pre-Design Phase',
      subtitle: 'Client Consultation\nSite Analysis & Visit',
      status: 'completed',
      color: 'bg-green-500',
      week: 'Week 1',
      position: { x: 10, y: 20 }
    },
    {
      id: 2,
      title: 'Pre-Design Phase',
      subtitle: 'Feasibility Studies\nInitial Budget &\nTimeline Estimation\nConceptual Sketches',
      status: 'completed',
      color: 'bg-blue-500',
      week: 'Week 2',
      position: { x: 10, y: 60 }
    },
    {
      id: 3,
      title: 'Schematic Design Phase',
      subtitle: 'Develop Preliminary\nFloor Plans & Elevations',
      status: 'pending',
      color: 'bg-orange-500',
      week: 'Week 3',
      position: { x: 25, y: 30 }
    },
    {
      id: 4,
      title: 'Design Development Phase',
      subtitle: 'Detailed Plans,\nSections & Elevations\nMaterial Selection\n3D Modelling or\nRenderings',
      status: 'pending',
      color: 'bg-purple-500',
      week: 'Week 4',
      position: { x: 25, y: 70 }
    },
    {
      id: 5,
      title: 'Construction Documentation Phase',
      subtitle: 'Prepare Detailed\nDrawings for Permits &\nBidding\nTechnical\nSpecifications\nDocumentation',
      status: 'pending',
      color: 'bg-pink-500',
      week: 'Week 5',
      position: { x: 40, y: 50 }
    },
    {
      id: 6,
      title: 'Permitting Phase',
      subtitle: 'Assist Client in\nSelecting Contractors',
      status: 'pending',
      color: 'bg-orange-500',
      week: 'Week 6',
      position: { x: 55, y: 25 }
    },
    {
      id: 7,
      title: 'Construction Phase',
      subtitle: 'Assist Client in\nSelecting Contractors',
      status: 'pending',
      color: 'bg-orange-500',
      week: 'Week 6',
      position: { x: 55, y: 40 }
    },
    {
      id: 8,
      title: 'Tender & Bidding Phase',
      subtitle: 'Answer RFIs (Request\nfor Information)',
      status: 'pending',
      color: 'bg-blue-500',
      week: 'Week 7',
      position: { x: 70, y: 35 }
    },
    {
      id: 9,
      title: 'Construction Phase',
      subtitle: 'Address Construction\nIssues\nEnsure Design Intent\nis Maintained\nIssue Certificates of\nPayment',
      status: 'pending',
      color: 'bg-orange-500',
      week: 'Week 9',
      position: { x: 85, y: 25 }
    },
    {
      id: 10,
      title: 'Project Close-Out',
      subtitle: 'Final Site Walkthrough\n(Punch List)\nHand Over As-Built\nDrawings',
      status: 'pending',
      color: 'bg-teal-500',
      week: 'Week 10',
      position: { x: 85, y: 65 }
    }
  ];

  const tasks = [
    { id: 8, title: 'Marketing Phase', subtitle: 'Site Visits & Progress\nReports\nReview Shop Drawings\n& Submittals', color: 'bg-yellow-400' },
    { id: 6, title: 'Assist Client in\nSelecting Contractors', color: 'bg-orange-500' },
    { id: 3, title: 'Schematic Design Phase\nDevelop Preliminary\nFloor Plans & Elevations', color: 'bg-orange-500' }
  ];

  const notifications = [
    { title: 'Permit Approved: Mixed-Us...', time: 'Just now' },
    { title: 'Meeting Scheduled: Client R...', time: '59 minutes ago' },
    { title: 'New Revision Uploaded: Flo...', time: '12 hours ago' },
    { title: 'Milestone Achieved: Design...', time: 'Today, 11:59 AM' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">All Milestones</h1>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">+</Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2 text-sm">
                <Button variant="ghost" size="sm">Year</Button>
                <Button variant="ghost" size="sm">Week</Button>
                <Button variant="ghost" size="sm">Month</Button>
                <Button variant="ghost" size="sm">Day</Button>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Timeline */}
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>April - May</span>
                <div className="flex space-x-8">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                  <span>Week 5</span>
                  <span>Week 6</span>
                  <span>Week 7</span>
                </div>
              </div>

              <div className="relative bg-white rounded-lg p-6 min-h-96 border">
                {/* Milestone Title */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs">📅</span>
                    </div>
                    <span className="font-medium">Milestone Title</span>
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>
                </div>

                {/* Add options */}
                <div className="absolute top-16 left-8 space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>📍</span>
                    <span>Add Place</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>📅</span>
                    <span>Add Date</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>⏰</span>
                    <span>Add Time</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>👥</span>
                    <span>Assign Members</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>📝</span>
                    <span>Add Notes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>➕</span>
                    <span>Add Task</span>
                  </div>
                </div>

                {/* Task Cards */}
                <div className="absolute top-4 right-4 space-y-4">
                  {tasks.map((task, index) => (
                    <div key={task.id} className={`${task.color} text-white p-3 rounded-lg text-sm max-w-48`}>
                      <div className="font-medium mb-1">{task.title}</div>
                      {task.subtitle && <div className="text-xs opacity-90 whitespace-pre-line">{task.subtitle}</div>}
                      <div className="flex items-center justify-center mt-2">
                        <div className="w-4 h-4 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-center text-xs mt-1">Task {task.id}</div>
                    </div>
                  ))}
                </div>

                {/* Timeline connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                            refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#F97316" />
                    </marker>
                  </defs>
                  
                  {/* Connecting lines */}
                  <line x1="20%" y1="50%" x2="80%" y2="50%" 
                        stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="20%" y1="80%" x2="80%" y2="80%" 
                        stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 ml-6 space-y-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">Holison commented on your...</div>
                    <div className="text-sm">You uploaded Site Plan Revi...</div>
                    <div className="text-sm">You were assigned a new ta...</div>
                    <div className="text-sm">You approved the changes t...</div>
                    <div className="text-sm">You joined the project: "Mod...</div>
                  </div>
                </CardContent>
              </Card>

              {/* Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Holison</span>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="text-orange-500">📞</Button>
                        <Button variant="ghost" size="sm" className="text-orange-500">💬</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rosemond</span>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="text-orange-500">📞</Button>
                        <Button variant="ghost" size="sm" className="text-orange-500">💬</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Famous</span>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="text-orange-500">📞</Button>
                        <Button variant="ghost" size="sm" className="text-orange-500">💬</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Milestones;
