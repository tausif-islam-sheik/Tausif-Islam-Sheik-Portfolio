import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tausif Islam Sheik | Full-Stack Developer',
  description: 'Full-Stack Developer crafting fast, beautiful, scalable web experiences. View projects, skills, and download resume.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Tausif Islam Sheik' }],
  openGraph: {
    title: 'Tausif Islam Sheik | Full-Stack Developer',
    description: 'Full-Stack Developer crafting fast, beautiful, scalable web experiences.',
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
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
