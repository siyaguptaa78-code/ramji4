import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming & Tournament Bankroll Protection",
  description: "Bankroll discipline and session limit management strategies for high-volume tournament seasons.",
  keywords: ["ipl bankroll management","tournament safe gaming","RAMJI247 protection"],
  alternates: {
    canonical: "https://ramji247ipl.com/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming & Tournament Bankroll Protection | RAMJI247",
    description: "Bankroll discipline and session limit management strategies for high-volume tournament seasons.",
    url: "https://ramji247ipl.com/responsible-gaming",
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
    title: "Responsible Gaming & Tournament Bankroll Protection | RAMJI247",
    description: "Bankroll discipline and session limit management strategies for high-volume tournament seasons.",
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
