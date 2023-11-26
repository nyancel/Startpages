import type { Metadata } from 'next'
import './globals.css'
import SystemClock from '@/components/system-clock'

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
      <body className='w-screen min-h-screen bg-dg-950 text-dg-50 flex flex-col justify-between p-12'>

        <header>
          <h1 className='text-2xl font-bold text-dg-800'>_Fokus</h1>

        </header>

        <main>
          {children}
        </main>

        <footer>
          <SystemClock />
        </footer>

      </body>
    </html>
  )
}
