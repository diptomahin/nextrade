import "./globals.css";
import MainLayout from "@/components/RootLayout";
import { AppConfig } from "@/config/app.config";
import AuthProvider from "@/provider/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-montserrat bg-zinc-100 text-black dark:bg-quaternary dark:text-zinc-100"
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <MainLayout>{children} </MainLayout>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
