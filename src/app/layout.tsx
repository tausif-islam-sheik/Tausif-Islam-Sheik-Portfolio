import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tausif Islam Sheik | Full-Stack Developer',
  description:
    'Full-Stack Developer crafting production-ready, scalable web experiences. Strong foundations. Real-world projects.',
  keywords: [
    'Full-Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Tausif Islam Sheik' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Tausif Islam Sheik | Full-Stack Developer',
    description:
      'Strong foundations. Real-world projects. Production-ready skills used by top companies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
