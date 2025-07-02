
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    {
      id: 1,
      name: 'Blue Print',
      description: 'Blue print of the building to be constructed...',
      dateAdded: '12/04/2025',
      type: 'legal'
    },
    {
      id: 2,
      name: 'Interior renderings',
      description: 'Renderings of the interior of the building...',
      dateAdded: '23/03/2025',
      type: 'legal'
    },
    {
      id: 3,
      name: 'Mobilization Details',
      description: 'Mobilization and',
      dateAdded: '15/03/2025',
      type: 'inventory'
    },
    {
      id: 4,
      name: 'Land Survey',
      description: 'Details on the land from the land surveyor...',
      dateAdded: '12/03/2025',
      type: 'legal'
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Tabs defaultValue="legal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="legal">Legal documents</TabsTrigger>
              <TabsTrigger value="inventory">Inventory & Purchases</TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="mt-4">
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
                  <p className="text-gray-600">Overview content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Legal Documents</CardTitle>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    + Documents
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <input type="checkbox" className="rounded" />
                        </TableHead>
                        <TableHead>Document Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date Added</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments
                        .filter(doc => doc.type === 'legal')
                        .map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell>
                            <input type="checkbox" className="rounded" />
                          </TableCell>
                          <TableCell className="font-medium">{doc.name}</TableCell>
                          <TableCell>{doc.description}</TableCell>
                          <TableCell>{doc.dateAdded}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Inventory & Purchases</CardTitle>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    + Documents
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <input type="checkbox" className="rounded" />
                        </TableHead>
                        <TableHead>Document Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date Added</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments
                        .filter(doc => doc.type === 'inventory')
                        .map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell>
                            <input type="checkbox" className="rounded" />
                          </TableCell>
                          <TableCell className="font-medium">{doc.name}</TableCell>
                          <TableCell>{doc.description}</TableCell>
                          <TableCell>{doc.dateAdded}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Documents;
