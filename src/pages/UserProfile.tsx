
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const UserProfile = () => {
  const [username, setUsername] = useState('Logical');
  const [email, setEmail] = useState('logicallegend221@gmail.com');
  const [phone, setPhone] = useState('+233 (0) 54-987-8990');
  const [bio, setBio] = useState("I'm Logical Legend, an architectural designer..........");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [soundNotifications, setSoundNotifications] = useState(true);
  const [subscriptionNotifications, setSubscriptionNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">📤 Export Data</Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Share 🔗
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Go Pro ⭐
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-orange-500 text-white text-xl">LL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-bold">Logical Legend</h2>
                      <p className="text-gray-600">{email}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Architect</Badge>
                      <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-orange-500 text-white">LL</AvatarFallback>
                      </Avatar>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Biography ℹ️</label>
                    <Textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself..."
                      className="min-h-24"
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      325 characters remaining
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notification</h4>
                      <p className="text-sm text-gray-500">You will be notified when a new email arrives.</p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Sound Notification</h4>
                      <p className="text-sm text-gray-500">You will be notified with sound when someone messages you.</p>
                    </div>
                    <Switch
                      checked={soundNotifications}
                      onCheckedChange={setSoundNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Subscription</h4>
                      <p className="text-sm text-gray-500">You will be notified when you subscribe to an account.</p>
                    </div>
                    <Switch
                      checked={subscriptionNotifications}
                      onCheckedChange={setSubscriptionNotifications}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    📊 View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🔒 Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    💳 Billing Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🎨 Appearance
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    ❓ Help & Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Plan</span>
                      <Badge>Free</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Storage Used</span>
                      <span className="text-sm">2.3 GB of 5 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Member Since</span>
                      <span className="text-sm">Jan 2024</span>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
                      Upgrade to Pro
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
