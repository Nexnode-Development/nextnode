"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { OTPInput } from "@/components/ui/otp-input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { twoFactorSchema, type TwoFactorFormData } from "@/lib/schemas";
import logo from "@/assets/logo-elements.png";
import Image from "next/image";
import loginPageImage from "@/assets/login-page.png";
import { PAGE_LAYOUTS } from "@/lib/constants";

function TwoFactorAuth() {
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();

  const form = useForm<TwoFactorFormData>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: {
      code: "",
    },
    mode: "onChange",
  });

  const codeValue = form.watch("code");

  const onSubmit = async (data: TwoFactorFormData) => {
    setIsVerifying(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Verifying code:", data.code);

      // Handle successful verification - redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);

    try {
      // Simulate API call to resend code
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Resending verification code...");

      // Reset form and show success message
      form.reset();
    } catch (error) {
      console.error("Failed to resend code:", error);
    } finally {
      setIsResending(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className={PAGE_LAYOUTS.auth}>
      {/* Left Side - Hero Section */}
      <div
        style={{
          backgroundImage: `url(${loginPageImage})`,
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
              Almost There!
            </h1>
            <p className="text-white/90 text-lg mb-8 text-center">
              Just one more step to secure
              <br />
              your account access
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - 2FA Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            {/* Phone Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6 relative">
              <Smartphone className="w-8 h-8 text-white" />
              {/* Signal waves */}
              <div className="absolute -top-1 -right-1">
                <div className="flex space-x-0.5">
                  <div className="w-1 h-2 bg-orange-600 rounded-full"></div>
                  <div className="w-1 h-3 bg-orange-600 rounded-full"></div>
                  <div className="w-1 h-2 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-orange-500 text-4xl font-bold mb-4">
              Two-Factor Authentication
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-base">
              Enter the 6-digit code sent to your SMS
            </p>
          </div>

          {/* OTP Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <OTPInput
                          length={6}
                          value={field.value}
                          onChange={field.onChange}
                          className="justify-center"
                        />
                      </FormControl>
                      <FormMessage className="text-center" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button
                  type="submit"
                  variant="orange"
                  size="xl"
                  className="w-full"
                  disabled={codeValue.length !== 6 || isVerifying}
                >
                  {isVerifying ? "Verifying..." : "Verify Code"}
                </Button>

                {/* Resend Code Link */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors disabled:opacity-50"
                  >
                    {isResending
                      ? "Sending..."
                      : "Didn't receive a code? Resend"}
                  </button>
                </div>

                {/* Back to Login */}
                <div className="text-center">
                  <Button
                    type="button"
                    onClick={handleBackToLogin}
                    variant="ghost"
                    className="text-gray-500 hover:text-orange-500"
                  >
                    Back to Log In
                  </Button>
                </div>
              </div>
            </form>
          </Form>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Check your SMS messages for the 6-digit verification code.
              <br />
              The code will expire in 10 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFactorAuth;
