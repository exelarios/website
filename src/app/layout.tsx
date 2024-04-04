import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Deric Kwok",
  description: "I like to build things -- mostly software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-5xl mx-auto flex flex-col h-screen`}>
        <Navbar city="los angeles"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
