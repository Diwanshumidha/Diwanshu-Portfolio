import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./(Root)/Providers";


const roboto = Roboto({
  variable: "--roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
        <body
          className={`${roboto.className} w-full  min-h-[100dvh]   text-foreground  bg-background `}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
