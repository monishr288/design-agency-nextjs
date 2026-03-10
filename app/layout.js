import { Inter } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAgency - Modern Next.js Design Agency',
  description: 'Building the future of web with cutting-edge Next.js technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}