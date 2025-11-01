import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Lara Berge Illustrations',
  description: 'Artist and illustrator from Cape Town, South Africa',
  icons: {
    icon: '/assets/img/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://kit.fontawesome.com/af356b6923.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

