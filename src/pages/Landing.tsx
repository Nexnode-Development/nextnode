import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-elements.png";
import loginPageImage from "@/assets/login-page.png";

function Landing() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
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
            <h1 className="text-white text-5xl font-bold mb-6 text-center">
              Remote Monitoring System
            </h1>
            <p className="text-white/90 text-xl mb-12 text-center max-w-2xl">
              Monitor and manage your projects remotely with our comprehensive
              <br />
              dashboard and real-time tracking capabilities
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-white/80 text-sm">
                  Track project progress and performance metrics in real-time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Secure Access
                </h3>
                <p className="text-white/80 text-sm">
                  Enterprise-grade security with two-factor authentication
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Team Collaboration
                </h3>
                <p className="text-white/80 text-sm">
                  Work together seamlessly with integrated messaging and file
                  sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Options */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md text-center">
          {/* Welcome Title */}
          <h2 className="text-orange-500 text-4xl font-bold mb-4">
            Welcome to Nextnode
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-12">
            Get started with your remote monitoring journey
          </p>

          {/* Auth Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleLogin}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-lg font-semibold text-lg transition-colors"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Button
              onClick={handleSignUp}
              variant="outline"
              size="lg"
              className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 py-6 rounded-lg font-semibold text-lg transition-colors"
            >
              Create Account
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>By continuing, you agree to our</p>
            <p>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
