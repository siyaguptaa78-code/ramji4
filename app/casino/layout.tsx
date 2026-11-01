import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPL In-Play Casino & Mid-Innings Games",
  description: "Quick-round card games, Roulette, and Aviator to enjoy during strategic timeouts and mid-innings breaks.",
  keywords: ["ipl break games","mid innings casino","fast casino games"],
  alternates: {
    canonical: "https://ramji247ipl.com/casino",
  },
  openGraph: {
    title: "IPL In-Play Casino & Mid-Innings Games | RAMJI247",
    description: "Quick-round card games, Roulette, and Aviator to enjoy during strategic timeouts and mid-innings breaks.",
    url: "https://ramji247ipl.com/casino",
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
    title: "IPL In-Play Casino & Mid-Innings Games | RAMJI247",
    description: "Quick-round card games, Roulette, and Aviator to enjoy during strategic timeouts and mid-innings breaks.",
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
