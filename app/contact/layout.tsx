import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Dedicated IPL WhatsApp Helpdesk",
  description: "Specialized 24/7 tournament desk for instant IPL ID creation, fast refills, and rapid payouts.",
  keywords: ["ipl id whatsapp number","ipl support 247","RAMJI247 ipl desk"],
  alternates: {
    canonical: "https://ramji247ipl.com/contact",
  },
  openGraph: {
    title: "24/7 Dedicated IPL WhatsApp Helpdesk | RAMJI247",
    description: "Specialized 24/7 tournament desk for instant IPL ID creation, fast refills, and rapid payouts.",
    url: "https://ramji247ipl.com/contact",
    siteName: "RAMJI247",
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: "RAMJI247 Official Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "24/7 Dedicated IPL WhatsApp Helpdesk | RAMJI247",
    description: "Specialized 24/7 tournament desk for instant IPL ID creation, fast refills, and rapid payouts.",
    images: ['/images/logo.png'],
  },
};

export default function SubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
