import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";
import { AppConfig } from "@/config/app.config";
import AuthProvider from "@/components/Provider/AuthProvider";

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
            <MainLayout>
              {children}
            </MainLayout>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
