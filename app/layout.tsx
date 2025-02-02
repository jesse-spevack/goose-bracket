import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goose Jam Bracket 2024',
  description: 'A bracket for Goose songs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#5f6163]">{children}</body>
    </html>
  )
}
