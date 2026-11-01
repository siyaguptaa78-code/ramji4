import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPL Season Special Bonus & Cashback Rewards",
  description: "Score big with IPL season opener bonuses, team loyalty rewards, and daily tournament cashbacks.",
  keywords: ["ipl bonus 2025","ipl cashback rewards","tournament promo cricket"],
  alternates: {
    canonical: "https://ramji247ipl.com/promotions",
  },
  openGraph: {
    title: "IPL Season Special Bonus & Cashback Rewards | RAMJI247",
    description: "Score big with IPL season opener bonuses, team loyalty rewards, and daily tournament cashbacks.",
    url: "https://ramji247ipl.com/promotions",
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
    title: "IPL Season Special Bonus & Cashback Rewards | RAMJI247",
    description: "Score big with IPL season opener bonuses, team loyalty rewards, and daily tournament cashbacks.",
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
