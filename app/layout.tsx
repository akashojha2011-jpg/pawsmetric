import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'PawsMetric: Free Veterinary Dog Calculators & Health Tools',
    template: '%s | PawsMetric',
  },
  description:
    'Instant, free dog calculators for age, calories, raw food, chocolate & xylitol toxicity, Benadryl dosage, crate sizes, and lifetime costs. Fact-checked by veterinarians.',
  metadataBase: new URL('https://www.pawsmetric.com'),
  verification: {
    google: 'zYf7QAqgZCcMuVgEayRf0sYcU1czQ6ZkW4hL56O1WZU',
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'PawsMetric: Free Veterinary Dog Calculators & Health Tools',
    description: 'Calculate dog age in human years, daily calories, emergency food toxicities, crate size, and pet costs instantly.',
    url: 'https://www.pawsmetric.com',
    siteName: 'PawsMetric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawsMetric: Free Dog Calculators & Pet Health Tools',
    description: 'Instant, fast, scientific dog calculators for age, nutrition, toxicities, gear size, and financial planning.',
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
};

export const viewport: Viewport = {
  themeColor: '#162737',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} font-sans scroll-smooth`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6119304743747461"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1C1917] antialiased overflow-x-hidden selection:bg-[#FDF1D0] selection:text-[#162737]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

