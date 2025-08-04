"use client";
import Image from "next/image";
import logo from "@/assets/nexnode-logo.png";
import { useRouter } from "next/navigation";
// import { motion } from "motion/react";

function LandingPage() {
  const router = useRouter();

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #FF512F 0%, #F09819 100%)",
      }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="Nextnode"
          width={50}
          height={50}
          className="mx-4"
        />
        <p className="text-4xl font-bold text-white">Nextnode </p>
      </div>

      {/* auth */}
      <div className="font-semibold flex flex-col w-fullitems-center justify-center gap-2 md:w-[320px] mt-16">
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="border border-white text-white px-4 py-2 rounded-full cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => {
            router.push("/signup");
          }}
          className="bg-white text-[#FF512F] px-4 py-2 rounded-full cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
