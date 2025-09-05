import { z } from "zod"

export const twoFactorSchema = z.object({
  code: z
    .string()
    .min(6, "Verification code must be 6 digits")
    .max(6, "Verification code must be 6 digits")
    .regex(/^\d{6}$/, "Verification code must contain only digits"),
})

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
})

export const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.string().min(1, "Role is required"),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
})

export const resetPasswordRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export const verifyPasswordResetSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export const resetPasswordSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const emailVerificationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export const verifyLoginOTPSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export const generateLoginOTPSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  method: z.enum(["email", "sms"]).optional().default("email"),
})

export const googleAuthSchema = z.object({
  googleToken: z.string().min(1, "Google token is required"),
})

export const linkGoogleSchema = z.object({
  googleToken: z.string().min(1, "Google token is required"),
})

export const unlinkGoogleSchema = z.object({
  password: z.string().min(1, "Password is required"),
})

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const resendOTPSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  purpose: z.enum(["registration", "password_reset", "login"]).optional().default("registration"),
})

export type TwoFactorFormData = z.infer<typeof twoFactorSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ResetPasswordRequestFormData = z.infer<typeof resetPasswordRequestSchema>
export type VerifyPasswordResetFormData = z.infer<typeof verifyPasswordResetSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type EmailVerificationFormData = z.infer<typeof emailVerificationSchema>
export type VerifyLoginOTPFormData = z.infer<typeof verifyLoginOTPSchema>
export type GenerateLoginOTPFormData = z.infer<typeof generateLoginOTPSchema>
export type GoogleAuthFormData = z.infer<typeof googleAuthSchema>
export type LinkGoogleFormData = z.infer<typeof linkGoogleSchema>
export type UnlinkGoogleFormData = z.infer<typeof unlinkGoogleSchema>
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
export type ResendOTPFormData = z.infer<typeof resendOTPSchema> 