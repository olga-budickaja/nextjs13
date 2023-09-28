import './globals.css'
import type { Metadata } from 'next'
import { Inter , Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk =  Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A platform for creating and answering programming questions for a community around the world. Here you can explore topics related to web development and mobile applications.A platform for creating and answering programming questions for a community around the world. Here you can explore topics related to web development and mobile applications.',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        <h1 className='h1-bold'>This is a piece of text</h1>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
