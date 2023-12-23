import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// import { Background } from "@/components/background/Background";

import Footer from "@/components/Footer";
import FollowingCursor from "@/components/background/FollowingCursor";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Background = dynamic(() => import("@/components/background/Background"), {
  ssr: false,
});

const roboto = Roboto({
  variable: "--roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} w-full  min-h-[100dvh]   text-foreground  bg-background `}
      >
        <div className=" absolute left-0 top-0 w-full h-screen pointer-events-none ">
          <Background />
        </div>
        <div className=" w-full overflow-hidden z-[1] ">
          <Suspense fallback={<div></div>}>
            <FollowingCursor />
          </Suspense>
        </div>

        <Providers>
          <div className=" z-[5]">
            <Navbar />
            <main className="mx-auto max-w-[1400px] px-5 md:px-14 ">
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
