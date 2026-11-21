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
  title: 'Brian Sun — Senior Solutions Engineer II (L64), Cloud & AI',
  description:
    'Brian Sun is a Senior Solutions Engineer II (L64), Cloud & AI at Microsoft building enterprise AI, cloud, and API products from discovery to production.',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Brian Sun', url: 'https://briansun.me' }],
  creator: 'Brian Sun',
  keywords: [
    'Brian Sun',
    'Senior Solutions Engineer II (L64)',
    'Azure AI',
    'Enterprise AI',
    'Cloud Architecture',
    'Microsoft Copilot',
    'Vancouver',
  ],
  openGraph: {
    type: 'website',
    url: 'https://briansun.me',
    title: 'Brian Sun — Senior Solutions Engineer II (L64), Cloud & AI',
    description: 'Enterprise AI from discovery to production.',
    siteName: 'Brian Sun',
    locale: 'en_CA',
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Brian Sun — Senior Solutions Engineer II (L64), Cloud & AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Sun — Senior Solutions Engineer II (L64), Cloud & AI',
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
        <script
          id="statcounter"
          dangerouslySetInnerHTML={{
            __html: `
              window.sc_project = 13357643;
              window.sc_invisible = 1;
              window.sc_security = "f4ef8931";
              var counter = document.createElement("script");
              counter.src = "https://www.statcounter.com/counter/counter.js";
              counter.async = true;
              document.body.appendChild(counter);
            `,
          }}
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13357643/0/f4ef8931/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
