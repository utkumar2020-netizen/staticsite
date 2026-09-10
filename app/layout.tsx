import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Change to your domain later
  title: 'IT Services | Websites, Applications & Automation',
  description: 'Professional websites, web applications, and automation solutions built by an experienced engineering team.',
  keywords: 'IT services, web development, application development, automation, India, international',
  authors: [{ name: 'IT Services Team' }],
  openGraph: {
    title: 'IT Services | Websites, Applications & Automation',
    description: 'Professional websites, web applications, and automation solutions built by an experienced engineering team.',
    url: 'https://itservices.com',
    siteName: 'IT Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services | Websites, Applications & Automation',
    description: 'Professional websites, web applications, and automation solutions built by an experienced engineering team.',
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}