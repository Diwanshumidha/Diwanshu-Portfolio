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
        <div id="chatbot"></div>
        <script src="https://cdn.jsdelivr.net/gh/bwestwood11/chatbot-widget/bundle/index1.js"></script>
        <script>
            Chatbot.mount(document.getElementById('chatbot'), {
                api_key: "c4100fc3-700b-4cf1-a3eb-209b772b1795"
            })
            Chatbot.loadCss("https://cdn.jsdelivr.net/gh/bwestwood11/chatbot-widget/bundle/index1.css")
        </script>
      </html>
    </>
  );
}
