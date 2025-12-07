import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Momshies Website - Daily Zany Jokes!",
  description: 'Get your daily dose of weird Filipino, Bisaya, and English jokes!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


