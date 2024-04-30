import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
// import { Background } from "@/components/background/Background";

import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Chatbot = dynamic(
  () => import("@/components/chatbot"), {
    ssr:false
  }
)

const FollowingCursor = dynamic(
  () => import("@/components/background/FollowingCursor")
);
const Background = dynamic(() => import("@/components/background/Background"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diwanshumidha.vercel.app/"),
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block border-b-2  bg-primary z-[10000] w-full top-0 h-full right-0  fixed animate"></div>
      <Suspense>
        <div className=" absolute left-0 top-0 w-full h-screen pointer-events-none ">
          <Background />
        </div>
      </Suspense>
      <div className=" w-full overflow-hidden z-[1] ">
        <Suspense fallback={<FollowingCursorSuspense />}>
          <FollowingCursor />
        </Suspense>
      </div>

      <div className=" z-[5]">
        <Navbar />
        <main className="mx-auto max-w-[1400px] px-5 md:px-14 ">
          {children}
        </main>
        <Chatbot/>
        <Toaster />
        <Footer />
      </div>
    </>
  );
}

const FollowingCursorSuspense = () => {
  return (
    <div className="h-[400px] blob aspect-square blur-3xl spin pointer-events-none   dark:opacity-25 opacity-60 bg-white rounded-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  );
};
