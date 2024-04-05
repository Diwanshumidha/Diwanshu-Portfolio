"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  useEffect(() => {
    // Ensure the DOM is loaded before executing the script
    document.addEventListener("DOMContentLoaded", function() {
        // Check if Chatbot object is available
        if (typeof Chatbot !== 'undefined') {
            // Mount the chatbot onto the specified DOM element
            Chatbot.mount(document.getElementById('chatbot'), {
                api_key: "c4100fc3-700b-4cf1-a3eb-209b772b1795" // Replace with your actual API key
            });
        } else {
            console.error('Chatbot object not found. Make sure the necessary script is loaded.');
        }
    });
}, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      {...props}
    >
      <>
        <script src="https://cdn.jsdelivr.net/gh/bwestwood11/chatbot-widget/bundle/index1.js"></script>
        <div id="chatbot"></div>
        {children}
      </>
    </NextThemesProvider>
  );
}
