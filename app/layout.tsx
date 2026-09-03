import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://briansun.me'),
  title: 'Brian Sun — Staff Solutions Engineer, Cloud & AI',
  description:
    'Brian Sun is a Staff Solutions Engineer at Microsoft building enterprise AI, cloud, and API products from discovery to production.',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Brian Sun', url: 'https://briansun.me' }],
  creator: 'Brian Sun',
  keywords: [
    'Brian Sun',
    'Staff Solutions Engineer',
    'Azure AI',
    'Enterprise AI',
    'Cloud Architecture',
    'Microsoft Copilot',
    'Vancouver',
  ],
  openGraph: {
    type: 'website',
    url: 'https://briansun.me',
    title: 'Brian Sun — Staff Solutions Engineer, Cloud & AI',
    description: 'Enterprise AI from discovery to production.',
    siteName: 'Brian Sun',
    locale: 'en_CA',
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Brian Sun — Staff Solutions Engineer, Cloud & AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Sun — Staff Solutions Engineer, Cloud & AI',
    description: 'Enterprise AI from discovery to production.',
    images: ['/og-card.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07101f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
