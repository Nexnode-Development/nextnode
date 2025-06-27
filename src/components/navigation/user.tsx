"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { User as Usr } from '@/services/auth/types';

export default function User() {
  const [user, setUser] = useState<any | undefined>(undefined);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const usr = JSON.parse(data) as any;
      setUser(usr);
    }
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={""} alt={""} />
        <AvatarFallback className="rounded-lg">
          {user?.first_name[0]} {user?.last_name[0]}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">
          {user?.first_name} {user?.last_name}
        </span>
        <span className="truncate text-xs">{user?.email}</span>
      </div>
    </div>
  );
}
