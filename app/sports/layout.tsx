import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPL Match Fixtures, Session Odds & Trading Arena",
  description: "Complete fixture schedule, head-to-head odds, and live session markets for all Indian Premier League matches.",
  keywords: ["ipl match odds","ipl session rates","ipl fixtures trading"],
  alternates: {
    canonical: "https://ramji247ipl.com/sports",
  },
  openGraph: {
    title: "IPL Match Fixtures, Session Odds & Trading Arena | RAMJI247",
    description: "Complete fixture schedule, head-to-head odds, and live session markets for all Indian Premier League matches.",
    url: "https://ramji247ipl.com/sports",
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
    title: "IPL Match Fixtures, Session Odds & Trading Arena | RAMJI247",
    description: "Complete fixture schedule, head-to-head odds, and live session markets for all Indian Premier League matches.",
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
