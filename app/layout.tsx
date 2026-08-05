import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'PawsMetric: Free Veterinary Dog Calculators & Health Tools',
    template: '%s | PawsMetric',
  },
  description:
    'Instant, free dog calculators for age, calories, raw food, chocolate & xylitol toxicity, Benadryl dosage, crate sizes, and lifetime costs. Fact-checked by veterinarians.',
  metadataBase: new URL('https://pawsmetric.com'),
  verification: {
    google: 'zYf7QAqgZCcMuVgEayRf0sYcU1czQ6ZkW4hL56O1WZU',
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'PawsMetric: Free Veterinary Dog Calculators & Health Tools',
    description: 'Calculate dog age in human years, daily calories, emergency food toxicities, crate size, and pet costs instantly.',
    url: 'https://pawsmetric.com',
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
  themeColor: '#082C1B',
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
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-[#F0F1EA] text-[#082C1B] antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
