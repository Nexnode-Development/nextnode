"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  Target,
  CheckCircle,
  Edit,
  Share,
  ArrowLeft,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PAGE_LAYOUTS, SAMPLE_PROJECTS } from "@/lib/constants";
import { useRouter } from "next/navigation";

const Progress = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => (
  <div
    className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
  >
    <div
      className="h-full bg-orange-500 transition-all duration-300 ease-out"
      style={{ width: `${Math.min(value, 100)}%` }}
    />
  </div>
);

export default function Project5() {
  const router = useRouter();
  const [selectedProject] = useState(SAMPLE_PROJECTS[4]); // Use fifth project

  return (
    <div className={PAGE_LAYOUTS.main}>
      <PageHeader
        title="Security Compliance Audit"
        description="Comprehensive security assessment and compliance framework implementation"
        actions={
          <>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share Project
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Edit className="w-4 h-4 mr-2" />
              Edit Project
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Progress</p>
                <p className="text-2xl font-bold">
                  {selectedProject.progress}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Status</p>
                <p className="text-lg font-bold">{selectedProject.status}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Budget</p>
                <p className="text-2xl font-bold">{selectedProject.budget}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Deadline</p>
                <p className="text-2xl font-bold">{selectedProject.deadline}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Comprehensive security compliance audit to ensure adherence to
              industry standards and regulatory requirements. Includes
              vulnerability assessment, penetration testing, and compliance
              framework implementation.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Audit Progress</span>
                <span className="font-medium">{selectedProject.progress}%</span>
              </div>
              <Progress value={selectedProject.progress} className="h-2" />
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Compliance Standards</h4>
              <div className="flex flex-wrap gap-2">
                {["ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS"].map(
                  (standard) => (
                    <Badge key={standard} variant="outline">
                      {standard}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-gray-600">Critical Issues</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                  <div className="text-sm text-gray-600">Medium Issues</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Compliance Score</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">Controls Tested</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Recent Activity</h4>
                <div className="space-y-2 text-sm">
                  <p>• Penetration testing completed</p>
                  <p>• Vulnerability scan in progress</p>
                  <p>• Compliance documentation review scheduled</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
