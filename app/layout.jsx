'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/RootLayout";
import { AppConfig } from "@/config/app.config";
import AuthProvider from "@/provider/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <AuthProvider>
            <MainLayout>{children}</MainLayout>
            <Toaster />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
