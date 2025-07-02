import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Financials from "./pages/Financials";
import Messages from "./pages/Messages";
import ProjectDetails from "./pages/ProjectDetails";
import Milestones from "./pages/Milestones";
import Notifications from "./pages/Notifications";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import UserProfile from "./pages/UserProfile";
import VideoCall from "./pages/VideoCall";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import TwoFactor from "./pages/TwoFactor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/two-factor" element={<TwoFactor />} />

          {/* Main App Routes */}
          <Route path="/dashboard" element={<Index />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/video-call" element={<VideoCall />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
