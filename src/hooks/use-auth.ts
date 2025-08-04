"use client";

import { useState, useEffect } from 'react';
import { getUserFromSession, deleteSession } from '@/app/services/auth/sessions';
import { Logout } from '@/app/services/auth';

interface User {
  user_id: string;
  email: string;
  role: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const userData = await getUserFromSession();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await Logout();
    } catch (error) {
      console.error('Error during logout:', error);
      await deleteSession();
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return {
    user,
    loading,
    logout,
    refreshUser,
  };
} 