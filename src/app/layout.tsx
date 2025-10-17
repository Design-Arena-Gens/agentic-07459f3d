import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project Meridian',
  description:
    'Project Meridian is a forward-looking digital product concept showcasing a sophisticated yet approachable experience for modern teams.',
  metadataBase: new URL('https://agentic-07459f3d.vercel.app'),
  openGraph: {
    title: 'Project Meridian',
    description:
      'Discover a visionary product experience designed to help teams plan, build, and deliver with confidence.',
    url: 'https://agentic-07459f3d.vercel.app',
    siteName: 'Project Meridian',
    images: [
      {
        url: 'https://dummyimage.com/1200x630/1f2933/ffffff.png&text=Project+Meridian',
        width: 1200,
        height: 630,
        alt: 'Project Meridian overview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Meridian',
    description:
      'An ambitious placeholder product crafted to demonstrate a complete and compelling web experience.',
    images: ['https://dummyimage.com/1200x630/1f2933/ffffff.png&text=Project+Meridian']
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
