export interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  phone?: string;
  isEmailVerified: boolean;
  profilePicture?: string;
  authProvider?: string[];
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
  requiresAuth?: boolean;
  userId?: string;
  otpExpiresAt?: string;
  otpExpiry?: string;
}

export interface APIError {
  response?: {
    status?: number;
    data?: {
      message?: unknown;
    };
  };
}

export interface SessionPayload {
  access_token: string;
}

export interface JWTPayload {
  id: string;
  email: string;
  role: string;
  exp: number;
  iat: number;
}