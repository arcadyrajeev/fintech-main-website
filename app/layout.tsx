import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollProvider from "./utils/smoothScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Fintech Product & Narrative partner - Rajeev",
  description: "Building clarity for Fintech and SaaS Products and Platform ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </SmoothScrollProvider>
    </html>
  );
}
