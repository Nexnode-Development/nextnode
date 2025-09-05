"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { resetPasswordRequestSchema, type ResetPasswordRequestFormData } from "@/lib/schemas";
import logo from "@/assets/nexnode-logo.png";
import Image from "next/image";
import backgroundImage from "@/assets/background-image.png";
import { toast, Toaster } from "sonner";
import { RequestPasswordReset } from "@/app/services/auth";

function ResetPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordRequestFormData>({
    resolver: zodResolver(resetPasswordRequestSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ResetPasswordRequestFormData) => {
    setIsSubmitting(true);

    try {
      const result = await RequestPasswordReset({ email: data.email });

      if (result.success) {
        toast.success("OTP sent successfully!");
        router.push(`/forgot-password/verify-otp?email=${encodeURIComponent(data.email)}`);
      } else {
        toast.error(result.error || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Failed to send reset email:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex">
      <Toaster />
      {/* Left Side - Hero Section */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex-1 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-10 right-10 w-64 h-64 border border-white/30 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/20 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-white/10 -rotate-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-white font-semibold text-xl">Nextnode</span>
          </div>

          {/* Main Content */}
          <div className="mt-auto mb-auto flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold mb-4">
              Forgot Password?
            </h1>
            <p className="text-white/90 text-lg mb-8 text-center">
              Enter your email and we&apos;ll send you
              <br />a link to reset your password
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Reset Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Reset Password Title */}
          <h2 className="text-orange-500 text-4xl font-bold mb-4 text-center">
            Reset Password
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-8">
            Enter your email address and we&apos;ll send you
            <br />a link to reset your password
          </p>

          {/* Reset Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          disabled={isSubmitting}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Action Buttons */}
              <div className="space-y-4">
                {/* Reset Password Button */}
                <Button
                  type="submit"
                  className="w-full rounded-full py-6 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>

                {/* Back to Login Button */}
                <Button
                  type="button"
                  onClick={handleBackToLogin}
                  variant="outline"
                  className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full py-6 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  Back to Log In
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
