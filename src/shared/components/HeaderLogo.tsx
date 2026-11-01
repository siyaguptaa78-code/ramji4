import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderLogoProps {
  siteName: string;
  brandNumber?: string;
  className?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ siteName, brandNumber, className = '' }) => {
  return (
    <Link href="/" className={`flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] ${className}`} aria-label={`${siteName} Home`}>
      <div className="relative flex items-center">
        <Image
          src="/images/logo.png"
          alt={`${siteName} Official Logo`}
          width={220}
          height={48}
          priority
          className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />
        {brandNumber && (
          <span className="hidden sm:inline-flex ml-2 px-2 py-0.5 text-xs font-black tracking-widest uppercase rounded border bg-amber-500/10 text-amber-400 border-amber-500/30">
            {siteName}
          </span>
        )}
      </div>
    </Link>
  );
};

