"use server"

import { 
  loginSchema, 
  signupSchema,
  resetPasswordRequestSchema,
  verifyPasswordResetSchema,
  resetPasswordSchema,
  emailVerificationSchema,
  verifyLoginOTPSchema,
  generateLoginOTPSchema,
  googleAuthSchema,
  linkGoogleSchema,
  unlinkGoogleSchema,
  changePasswordSchema,
  resendOTPSchema,
  type LoginFormData,
  type SignupFormData,
  type ResetPasswordRequestFormData,
  type VerifyPasswordResetFormData,
  type ResetPasswordFormData,
  type EmailVerificationFormData,
  type VerifyLoginOTPFormData,
  type GenerateLoginOTPFormData,
  type GoogleAuthFormData,
  type LinkGoogleFormData,
  type UnlinkGoogleFormData,
  type ChangePasswordFormData,
  type ResendOTPFormData
} from "@/lib/schemas";
import http from "@/lib/axios";
import { createSession, deleteSession } from "./sessions";
import { redirect } from "next/navigation";

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

export async function Login(data: LoginFormData) {
  try {
    const validatedData = loginSchema.parse(data);
    
    const response = await http.post('/auth/login', validatedData);
    
    if (response.data?.success) {
      if (response.data.requiresAuth) {
        return { 
          success: true, 
          requiresTwoFactor: true, 
          data: response.data 
        };
      }
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Invalid credentials' };
  } catch (error: unknown) {
    console.error('Login error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function Register(data: SignupFormData) {
  try {
    const validatedData = signupSchema.parse(data);
    
    const response = await http.post('/auth/register', validatedData);
    
    if (response.data?.success) {
      return { success: true, data: response.data };
    }
    
    return { success: false, error: response.data?.message || 'Registration failed' };
  } catch (error: unknown) {
    console.error('Register error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function VerifyEmail(data: EmailVerificationFormData) {
  try {
    const validatedData = emailVerificationSchema.parse(data);
    
    const response = await http.post('/auth/verify-email', validatedData);
    
    if (response.data.success) {
      if (response.data.token) {
        await createSession({ access_token: response.data.token });
      }
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Invalid verification code' };
  } catch (error: unknown) {
    console.error('Email verification error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function VerifyLoginOTP(data: VerifyLoginOTPFormData) {
  try {
    const validatedData = verifyLoginOTPSchema.parse(data);
    
    const response = await http.post('/auth/verify-login-otp', validatedData);
    
    if (response.data.success && response.data.token) {
      await createSession({ access_token: response.data.token });
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Invalid verification code' };
  } catch (error: unknown) {
    console.error('Verify login OTP error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function GenerateLoginOTP(data: GenerateLoginOTPFormData) {
  try {
    const validatedData = generateLoginOTPSchema.parse(data);
    
    const response = await http.post('/auth/generate-login-otp', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Generate login OTP error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function ResendOTP(data: ResendOTPFormData) {
  try {
    const validatedData = resendOTPSchema.parse(data);
    
    const response = await http.post('/auth/resend-otp', validatedData);
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Resend OTP error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function RequestPasswordReset(data: ResetPasswordRequestFormData) {
  try {
    const validatedData = resetPasswordRequestSchema.parse(data);
    
    const response = await http.post('/auth/request-password-reset', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Request password reset error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function VerifyPasswordReset(data: VerifyPasswordResetFormData) {
  try {
    const validatedData = verifyPasswordResetSchema.parse(data);
    
    const response = await http.post('/auth/verify-password-reset', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Verify password reset error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function ResetPassword(data: ResetPasswordFormData) {
  try {
    const validatedData = resetPasswordSchema.parse(data);
    
    const response = await http.post('/auth/reset-password', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Reset password error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function ChangePassword(data: ChangePasswordFormData) {
  try {
    const validatedData = changePasswordSchema.parse(data);
    
    const response = await http.post('/auth/change-password', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Change password error:', error);
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

export async function GoogleAuth(data: GoogleAuthFormData) {
  try {
    const validatedData = googleAuthSchema.parse(data);
    
    const response = await http.post('/auth/google-login', validatedData);
    
    if (response.data.success && response.data.token) {
      await createSession({ access_token: response.data.token });
      return { success: true, data: response.data };
    }
    
    return { success: false, error: 'Google authentication failed' };
  } catch (error: unknown) {
    console.error('Google auth error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function LinkGoogle(data: LinkGoogleFormData) {
  try {
    const validatedData = linkGoogleSchema.parse(data);
    
    const response = await http.post('/auth/link-google', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Link Google error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function UnlinkGoogle(data: UnlinkGoogleFormData) {
  try {
    const validatedData = unlinkGoogleSchema.parse(data);
    
    const response = await http.post('/auth/unlink-google', validatedData);
    
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('Unlink Google error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}