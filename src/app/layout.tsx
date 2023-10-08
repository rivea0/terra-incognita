import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header/header'
import Footer from './components/footer/footer'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: {
    template: '%s | Terra Incognita',
    default: 'Terra Incognita',
  },
  description: 'Explore the destinations across the Solar System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
