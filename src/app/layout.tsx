import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'OverCloud',
  description: 'Dream It, Wear It',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-dark">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
