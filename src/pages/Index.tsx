
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ProjectOverview from '@/components/dashboard/ProjectOverview';
import StatisticsSection from '@/components/dashboard/StatisticsSection';
import PendingApprovals from '@/components/dashboard/PendingApprovals';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="p-6 space-y-6">
          <DashboardHeader />
          <ProjectOverview />
          <PendingApprovals />
          <StatisticsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
