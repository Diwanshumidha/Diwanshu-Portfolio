"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import {Chatbot} from '@chatbuild/widget'


export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {


  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      {...props}
    >
      <Chatbot  roundedButton   apiKey="c4100fc3-700b-4cf1-a3eb-209b772b1795" themeColor="#6d28d9"  />
      {children}
    </NextThemesProvider>
  );
}
