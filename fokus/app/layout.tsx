import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fokus',
  description: 'A StartPage by Nyan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-screen min-h-screen bg-dg-950 text-dg-100'>{children}</body>
    </html>
  )
}
