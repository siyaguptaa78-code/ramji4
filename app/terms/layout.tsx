import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tournament Terms & Settlement Guidelines",
  description: "Clear rules governing IPL tournament markets, super-over settlements, and account operations.",
  keywords: ["ipl betting rules","super over settlement rules","RAMJI247 ipl terms"],
  alternates: {
    canonical: "https://ramji247ipl.com/terms",
  },
  openGraph: {
    title: "Tournament Terms & Settlement Guidelines | RAMJI247",
    description: "Clear rules governing IPL tournament markets, super-over settlements, and account operations.",
    url: "https://ramji247ipl.com/terms",
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
    title: "Tournament Terms & Settlement Guidelines | RAMJI247",
    description: "Clear rules governing IPL tournament markets, super-over settlements, and account operations.",
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
