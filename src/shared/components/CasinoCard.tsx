'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Sparkles, Flame, MessageCircle } from 'lucide-react';
import { CasinoGame } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface CasinoCardProps {
  game: CasinoGame;
  onPlayDemo?: (game: CasinoGame) => void;
  brandPrimary?: string;
}

export const CasinoCard: React.FC<CasinoCardProps> = ({
  game,
  onPlayDemo,
  brandPrimary = 'text-amber-400'
}) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1">
      {/* Thumbnail Aspect Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
        <Image
          src={game.image}
          alt={`${game.name} by ${game.provider}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Hot / New Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {game.isHot && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/90 text-white text-[10px] font-bold shadow-md">
              <Flame size={10} className="fill-white" />
              HOT
            </span>
          )}
          {game.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold shadow-md">
              <Sparkles size={10} />
              NEW
            </span>
          )}
        </div>

        {/* RTP Tag */}
        {game.rtp && (
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
            RTP {game.rtp}
          </span>
        )}

        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={() => onPlayDemo?.(game)}
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-neutral-950 text-xs font-bold transition-transform active:scale-95 shadow-lg"
          >
            <Play size={14} className="fill-current" />
            <span>Play Demo</span>
          </button>
          
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Support, I want to play ${game.name} (${game.provider}) with Real Balance.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-transform active:scale-95 shadow-lg"
          >
            <MessageCircle size={14} className="fill-current" />
            <span>Play on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Game Card Footer Info */}
      <div className="p-3 bg-neutral-900/95 flex items-center justify-between">
        <div className="truncate pr-2">
          <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-400 transition-colors">
            {game.name}
          </h4>
          <p className="text-[10px] text-neutral-400 truncate mt-0.5">
            {game.provider}
          </p>
        </div>
        {game.minBet && (
          <div className="text-right shrink-0">
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">Min</span>
            <span className="text-xs font-semibold text-emerald-400 font-mono">{game.minBet}</span>
          </div>
        )}
      </div>
    </div>
  );
};

