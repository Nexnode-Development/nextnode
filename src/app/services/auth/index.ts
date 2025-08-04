"use server"

import z from "zod";
import http from "@/lib/axios";
import { createSession, deleteSession } from "./sessions";
import { redirect } from "next/navigation";


const RegisterSchema = z.object({
  fullName: z
  .string({ error: 'First name is required' })
  .min(1, 'First name is required'),
  email: z
    .string({ error: 'Email is required' })
    .email({ error: 'Invalid email format' }),
    phone: z
    .string({ error: 'Phone number is required' })
    .min(1, 'Phone number is required'),
  password: z
    .string({ error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters'),
  role: z
    .string({ error: 'Role is required' })
    .min(1, 'Role is required')
});

const LoginSchema = z.object({
  email: z
    .string({ error: 'Email is required' })
    .email({ error: 'Invalid email format' }),
  password: z
    .string({ error: 'Password is required' })
    .min(1, 'Password is required'),
});

const TwoFactorSchema = z.object({
  code: z
    .string({ error: 'Verification code is required' })
    .min(6, 'Verification code must be 6 digits')
    .max(6, 'Verification code must be 6 digits'),
});

const ResetPasswordSchema = z.object({
  email: z
    .string({ error: 'Email is required' })
    .email({ error: 'Invalid email format' }),
});

const CreateNewPasswordSchema = z.object({
  password: z
    .string({ error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: z
    .string({ error: 'Confirm password is required' }),
  token: z
    .string({ error: 'Reset token is required' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Helper function to safely extract error message
function getErrorMessage(error: unknown): string {
  if (error && typeof error === 'object' && 'response' in error) {
    const response = error.response as { status?: number, data?: { message?: unknown } };
    if (response.status === 409) {
      return "An account with this email already exists.";
    }
    if (response.data && response.data.message) {
      return String(response.data.message);
    }
  }
  return 'An unexpected error occurred';
}

export async function Login(data: z.infer<typeof LoginSchema>) {
  try {
    const validatedData = LoginSchema.parse(data);
    console.log(validatedData)
    
    const response = await http.post('/auth/login', validatedData);
    
    if (response.data?.data?.success) {
      return { success: true, data: response.data.data };
    }
    
    return { success: false, error: 'Invalid credentials' };
  } catch (error: unknown) {
    console.error('Login error:', error.response.message);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function Register(data: z.infer<typeof RegisterSchema>) {
  try {
    const validatedData = RegisterSchema.parse(data);
    
    const response = await http.post('/auth/register', validatedData);
    
    if (response.data?.data?.success) {
      return { success: true, data: response.data.data };
    }
    
    return { success: false, error: response.data?.data?.message || 'Registration failed' };
  } catch (error: unknown) {
    console.error('Register error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function VerifyEmail(data: z.infer<typeof TwoFactorSchema> & { email: string }) {
  try {
    const validatedData = TwoFactorSchema.extend({ email: z.string().email() }).parse(data);
    
    const response = await http.post('/auth/verify-email', {
      email: validatedData.email,
      otp: validatedData.code,
    });
    
    if (response.data.success) {
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Invalid verification code' };
  } catch (error: unknown) {
    console.error('Email verification error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function ResendTwoFactorCode() {
  try {
    const response = await http.post('/auth/resend-otp');
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Resend 2FA code error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function ResetPassword(data: z.infer<typeof ResetPasswordSchema>) {
  try {
    const validatedData = ResetPasswordSchema.parse(data);
    
    const response = await http.post('/auth/reset-password', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Reset password error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function CreateNewPassword(data: z.infer<typeof CreateNewPasswordSchema>) {
  try {
    const validatedData = CreateNewPasswordSchema.parse(data);
    
    const response = await http.post('/auth/reset-password/confirm', {
      password: validatedData.password,
      token: validatedData.token,
    });
    
    if (response.data.access_token) {
      await createSession({ access_token: response.data.access_token });
      return { success: true, data: response.data };
    }
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Create new password error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function Logout() {
  try {
    await http.post('/auth/logout');
    await deleteSession();
    redirect('/login');
  } catch (error: unknown) {
    console.error('Logout error:', error);
    await deleteSession();
    redirect('/login');
  }
}

export async function GoogleAuth(code: string) {
  try {
    const response = await http.post('/auth/google-login', { code });
    
    if (response.data.access_token) {
      await createSession({ access_token: response.data.access_token });
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Google authentication failed' };
  } catch (error: unknown) {
    console.error('Google auth error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}