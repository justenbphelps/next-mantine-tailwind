import "./globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Mantine-Tailwind",
  description: "App Skeleton using Next.js, Mantine, and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
