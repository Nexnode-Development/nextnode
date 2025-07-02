import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserProfileProps {
  isCollapsed: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isCollapsed }) => {
  return (
    <div className={cn("flex items-center", isCollapsed ? "justify-center" : "space-x-4")}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {!isCollapsed && (
        <div>
          <p className="font-semibold">User Name</p>
          <p className="text-sm text-gray-500">user@example.com</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;