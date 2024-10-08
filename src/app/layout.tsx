import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomTabs from "@/components/ui/bottom-tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Intolerance App",
  description: "Makes managing food intolerances easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BottomTabs>{children}</BottomTabs>
      </body>
    </html>
  );
}
