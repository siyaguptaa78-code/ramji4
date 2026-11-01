'use client';

import React from 'react';
import { Bell, Flame } from 'lucide-react';
import { LIVE_TICKER_ITEMS } from '../constants';

interface LiveTickerProps {
  items?: string[];
  badgeText?: string;
  className?: string;
}

export const LiveTicker: React.FC<LiveTickerProps> = ({
  items = LIVE_TICKER_ITEMS,
  badgeText = 'LIVE UPDATES',
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden flex items-center bg-black/60 border-y border-white/5 backdrop-blur-md text-xs py-2 px-3 sm:px-6 select-none ${className}`}>
      <div className="flex items-center gap-1.5 shrink-0 pr-4 border-r border-white/10 font-bold tracking-wider text-amber-400">
        <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span className="hidden sm:inline">{badgeText}</span>
      </div>

      <div className="relative flex-1 overflow-hidden whitespace-nowrap pl-4">
        <div className="inline-flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, idx) => (
            <span key={idx} className="text-neutral-300 font-medium tracking-wide flex items-center gap-2">
              <span>{item}</span>
              <span className="text-neutral-600 font-bold">•</span>
            </span>
          ))}
          {/* Duplicate loop for infinite seamless scroll */}
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="text-neutral-300 font-medium tracking-wide flex items-center gap-2">
              <span>{item}</span>
              <span className="text-neutral-600 font-bold">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

