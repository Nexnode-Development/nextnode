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
import logo from "@/assets/nexnode-logo.png";
import Image from "next/image";
import backgroundImage from "@/assets/background-image.png";
import { toast, Toaster } from "sonner";
import { VerifyEmail, VerifyLoginOTP, ResendOTP } from "@/app/services/auth";

function TwoFactorAuthPage() {
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoginFlow, setIsLoginFlow] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email");
    const userIdParam = urlParams.get("userId");

    if (emailParam && userIdParam) {
      setEmail(emailParam);
      setUserId(userIdParam);
      setIsLoginFlow(true);
    } else {
      const storedEmail = sessionStorage.getItem("nexnode_user_email");
      const storedUserId = sessionStorage.getItem("nexnode_user_id");

      if (storedEmail) setEmail(storedEmail);
      if (storedUserId) setUserId(storedUserId);
      setIsLoginFlow(false);
    }
  }, []);

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
      if (!email || !userId) {
        toast.error("Session expired. Please try again.");
        router.push(isLoginFlow ? "/login" : "/signup");
        return;
      }

      let result;

      if (isLoginFlow) {
        result = await VerifyLoginOTP({ userId, otp: data.code });
      } else {
        result = await VerifyEmail({ email, otp: data.code });
      }

      if (result.success) {
        if (isLoginFlow) {
          toast.success("Login successful!");
          sessionStorage.removeItem("nexnode_user_email");
          sessionStorage.removeItem("nexnode_user_id");
          router.push("/dashboard");
        } else {
          toast.success("Email verified successfully! Please log in.");
          sessionStorage.removeItem("nexnode_user_email");
          sessionStorage.removeItem("nexnode_user_id");
          router.push("/login");
        }
      } else {
        toast.error(result.error || "Verification failed");
        form.reset();
      }
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error("An unexpected error occurred");
      form.reset();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);

    try {
      if (!email) {
        toast.error("Email not found. Please try again.");
        return;
      }

      const purpose = isLoginFlow ? "login" : "registration";
      const result = await ResendOTP({ email, purpose });

      if (result.success) {
        toast.success("Verification code resent successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to resend code");
      }
    } catch (error) {
      console.error("Failed to resend code:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsResending(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
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
              Enter the 6-digit code sent to {email || "your email"}
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
                          disabled={isVerifying}
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
                  className="w-full rounded-full py-6 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors"
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
                    disabled={isVerifying || isResending}
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
              {isLoginFlow
                ? "Complete your login by entering the verification code sent to your email."
                : "Check your email for the 6-digit verification code to activate your account."}
              <br />
              The code will expire in 10 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFactorAuthPage;
