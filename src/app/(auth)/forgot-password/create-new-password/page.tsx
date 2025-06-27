"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  createNewPasswordSchema,
  type CreateNewPasswordFormData,
} from "@/lib/schemas";

function CreateNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get token from URL params (would come from reset email link)
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateNewPasswordFormData>({
    resolver: zodResolver(createNewPasswordSchema),
    mode: "onChange",
  });

  const password = watch("password");
  const onSubmit = async (data: CreateNewPasswordFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call to reset password
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Creating new password with token:", token);
      console.log("New password data:", { password: data.password });

      // Redirect to login page on success
      router.push("/login");
    } catch (error) {
      console.error("Failed to reset password:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="flex-1 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
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
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-3">
              <span className="text-orange-500 font-bold text-lg">N</span>
            </div>
            <span className="text-white font-semibold text-xl">Nexnode</span>
          </div>

          {/* Main Content */}
          <div className="mt-auto mb-auto flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold mb-4">
              Forgot Password?
            </h1>
            <p className="text-white/90 text-lg mb-8 text-center">
              Fill in the form to reset your
              <br />
              password
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Create New Password Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-orange-500 text-4xl font-bold mb-4 text-center">
            Create New Password
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-8">
            A link will be sent to the provided e-mail to create
            <br />a new password
          </p>

          {/* Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Error Message for Password */}
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Confirm Password Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <Input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Error Message for Confirm Password */}
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}

            {/* Password Strength Indicator */}
            {password && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Password requirements:</p>
                <div className="space-y-1 text-xs">
                  <div
                    className={`flex items-center ${
                      password.length >= 8 ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        password.length >= 8 ? "bg-green-600" : "bg-gray-300"
                      }`}
                    ></div>
                    At least 8 characters
                  </div>
                  <div
                    className={`flex items-center ${
                      /[A-Z]/.test(password)
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        /[A-Z]/.test(password) ? "bg-green-600" : "bg-gray-300"
                      }`}
                    ></div>
                    One uppercase letter
                  </div>
                  <div
                    className={`flex items-center ${
                      /[a-z]/.test(password)
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        /[a-z]/.test(password) ? "bg-green-600" : "bg-gray-300"
                      }`}
                    ></div>
                    One lowercase letter
                  </div>
                  <div
                    className={`flex items-center ${
                      /\d/.test(password) ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        /\d/.test(password) ? "bg-green-600" : "bg-gray-300"
                      }`}
                    ></div>
                    One number
                  </div>
                </div>
              </div>
            )}

            {/* Reset Button */}
            <Button
              type="submit"
              variant="orange"
              size="xl"
              className="w-full mt-8"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset"}
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Make sure your password is strong and secure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
