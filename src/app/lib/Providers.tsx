"use client"

// 1. import `NextUIProvider` component
import { HeroUIProvider } from "@heroui/react";

import {ThemeProvider as NextThemesProvider} from "next-themes";
function Providers({ children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return <HeroUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
    {children}
    </NextThemesProvider>
  </HeroUIProvider>;
}
export default Providers;