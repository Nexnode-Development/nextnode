"use client";
import Image from "next/image";
import logo from "@/assets/logo-elements.png";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
          width={100}
          height={100}
          className="w-16 h-16 border mx-2"
        />
        <p className="text-4xl font-bold text-white">Nextnode </p>
      </div>

      {/* auth */}
      <div className="font-semibold flex flex-col w-fullitems-center justify-center gap-2 md:w-[320px] mt-16">
        <Button
          variant="default"
          onClick={() => {
            router.push("/login");
          }}
          className="border border-white text-white px-4 py-2 rounded-full cursor-pointer"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            router.push("/signup");
          }}
          className="bg-white text-[#FF512F] px-4 py-2 rounded-full cursor-pointer"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
