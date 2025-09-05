"use client";

import { useState, useEffect } from 'react';
import { getUserFromSession, deleteSession } from '@/app/services/auth/sessions';
import { Logout } from '@/app/services/auth';
import { User } from '@/app/services/auth/types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const userData = await getUserFromSession();
      if (userData) {
        setUser({
          id: userData.id,
          fullName: '',
          email: userData.email,
          role: userData.role,
          isEmailVerified: true,
        });
      } else {
        setUser(null);
      }
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