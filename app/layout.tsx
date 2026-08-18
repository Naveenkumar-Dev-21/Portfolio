import type { Metadata, Viewport } from 'next'
import { Titillium_Web, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { siteConfig } from '@/lib/data'

const titillium = Titillium_Web({
  subsets: ['latin'],
  // Titillium Web ships static weights only (no 500). We load the ones the
  // UI uses; `font-medium` (500) resolves to the nearest loaded face.
  weight: ['300', '400', '600', '700'],
  variable: '--font-titillium',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#FAFAF9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Naveenkumar V',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Naveenkumar V — Penetration Tester & Security Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@naveenkumar_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0B0F0E',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Naveenkumar V',
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  sameAs: [
    'https://github.com/Naveenkumar-Dev-21',
    'https://www.linkedin.com/in/naveenkumarv-varatharajan',
    'https://tryhackme.com/p/naveenkumar03585',
    'https://learn.cylabacademy.org/users/ForestRanger',
    'https://www.youtube.com/channel/UCffZTsvM49AFjviY3RrtjRQ',
    'https://rangerblogs.hashnode.dev',
  ],
  jobTitle: 'Penetration Tester & Security Researcher',
  worksFor: {
    '@type': 'Organization',
    name: 'Kongu Engineering College',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Kongu Engineering College',
  },
  knowsAbout: [
    'Penetration Testing',
    'Vulnerability Assessment',
    'Web Application Security',
    'Threat Intelligence',
    'Security Monitoring',
    'Blue Team Operations',
    'Python',
    'Java',
    'JavaScript',
    'React',
    'Node.js',
    'Linux Administration',
    'Docker',
    'AWS',
  ],
  description: 'Information Technology student and penetration tester focused on offensive security, vulnerability research, security engineering, and building practical software.',
  email: 'mailto:naveenkumar2006.kongu@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${titillium.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme ? theme === 'dark' : prefersDark;
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  )
}