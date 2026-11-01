import type { Metadata } from 'next';
import './globals.css';
import { 
  Navbar, 
  Footer, 
  WhatsAppFloatingButton, 
  LiveTicker, 
  JsonLd,
  SITE_CONFIGS 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export const metadata: Metadata = {
  metadataBase: new URL(config.domain),
  title: {
    default: `${config.name} | The Ultimate Sports Exchange & Real-Time Trading Arena`,
    template: `%s | ${config.name}`,
  },
  description: config.description,
  keywords: [
    'Ramji4',
    'cricket exchange trading',
    'back and lay cricket',
    'zero delay odds',
    'betting exchange id india',
    'whatsapp betting id provider',
    'live session fancy bets',
    'instant id in 60 seconds'
  ],
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: config.domain,
  },
  verification: {
    google: '5fDi0Wznjr1mJRtL5ADh0Cw4G_5ZKtsjPWcN6JOsAWk',
  },
  openGraph: {
    title: `${config.name} | Live Sports Trading & Exchange ID`,
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: `${config.name} Brand Logo`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.name} | Instant Exchange ID on WhatsApp`,
    description: config.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${config.domain}/#website`,
        'url': config.domain,
        'name': config.name,
        'description': config.description,
      },
      {
        '@type': 'Organization',
        '@id': `${config.domain}/#organization`,
        'name': config.name,
        'url': config.domain,
        'logo': `${config.domain}/images/logo.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': `+91-${config.whatsappNumber}`,
          'contactType': 'customer service',
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className="bg-[#040914] text-neutral-100 flex flex-col min-h-screen antialiased selection:bg-sky-500 selection:text-black">
        <LiveTicker badgeText="RAMJI4 EXCHANGE" />
        <Navbar 
          siteName={config.name} 
          brandNumber={config.brandNumber}
          accentColor="text-sky-400 border-sky-500/30"
          badgeStyle="bg-sky-500/10 text-sky-400"
        />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer 
          siteName={config.name} 
          brandNumber={config.brandNumber} 
          tagline={config.tagline} 
        />
        <WhatsAppFloatingButton 
          siteName={config.name} 
          customMessage={config.defaultWhatsAppMessage} 
        />
      </body>
    </html>
  );
}

