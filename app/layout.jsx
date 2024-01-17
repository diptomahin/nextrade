import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/Layout/MainLayout'
import { AppConfig } from '@/config/app.config'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className='lg:px-14 md:px-10 px-5'>
        <MainLayout>{children}</MainLayout>
        </div>
        </body>
    </html>
  )
}
