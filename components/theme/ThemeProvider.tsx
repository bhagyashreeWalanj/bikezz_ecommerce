"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemeProvider {...props} attribute="class" defaultTheme="light">
      {children}
    </NextThemeProvider>
  );
}
