import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { signupSchema, type SignupFormData } from "@/lib/schemas";
import logo from "@/assets/logo-elements.png";
import loginPageImage from "@/assets/login-page.png";
import { toast } from "sonner";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Signup attempt:", data);

      // Handle successful signup
      navigate("/two-factor");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    console.log("Google sign up attempted");
    toast.error("Google Sign up not implemented yet");
    // Handle Google OAuth
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
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
            <img
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
            <h1 className="text-white text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-white/90 text-lg mb-8 text-center">
              Sign up to start creating and
              <br />
              monitoring your projects remotely
            </p>

            {/* Existing User Section */}
            <div className="mt-auto flex flex-col justify-center items-center">
              <p className="text-white/90 text-lg mb-4">
                Already have an account?
              </p>
              <Button
                onClick={handleLogin}
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white text-white hover:bg-white hover:text-orange-500"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Signup Title */}
          <h2 className="text-orange-500 text-4xl font-bold mb-8 text-center">
            Sign Up
          </h2>

          {/* Google Signup Button */}
          <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            size="lg"
            className="w-full mb-6 cursor-pointer border-gray-300 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="text-center text-gray-500 mb-6">
            or use your email to register:
          </div>

          {/* Signup Form with React Hook Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                          placeholder="Email"
                          className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Lock className="w-5 h-5" />
                        </div>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Password"
                          className="w-full bg-orange-50 border-0 rounded-lg py-6 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms and Conditions */}
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal leading-relaxed">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-orange-500 hover:text-orange-600 underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-orange-500 hover:text-orange-600 underline"
                      >
                        Privacy Policy
                      </a>
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-lg font-semibold text-lg transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
