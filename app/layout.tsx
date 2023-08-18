import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Kadam",
  description: "Shubham Kadam web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-indigo-950 min-h-screen custom-scrollbar w-full`}
      >
        <Navbar />
        {children}
      </body>
      <BottomBar />
    </html>
  );
}
