import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLogoProps {
  siteName: string;
  className?: string;
}

export const FooterLogo: React.FC<FooterLogoProps> = ({ siteName, className = '' }) => {
  return (
    <Link href="/" className={`inline-block group ${className}`} aria-label={`${siteName} Footer Logo`}>
      <Image
        src="/images/logo.png"
        alt={`${siteName} Footer Brand Logo`}
        width={240}
        height={52}
        className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
      />
    </Link>
  );
};

