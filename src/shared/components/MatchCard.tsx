'use client';

import React from 'react';
import { Activity, Clock, Shield, Trophy } from 'lucide-react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  onSelectOdds?: (match: Match, selection: string, odds: number, type: 'back' | 'lay') => void;
  brandPrimary?: string;
  brandAccent?: string;
}

export const MatchCard: React.FC<MatchCardProps> = ({
  match,
  onSelectOdds,
  brandPrimary = 'text-amber-400',
}) => {
  const isLive = match.status === 'live';

  return (
    <div className="group relative rounded-xl bg-neutral-900/80 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 p-4 shadow-lg hover:shadow-xl backdrop-blur-sm">
      {/* Top Bar: League & Status */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs">
        <div className="flex items-center gap-1.5 text-neutral-400 font-medium truncate max-w-[70%]">
          <Trophy size={13} className="text-neutral-500 shrink-0" />
          <span className="truncate">{match.league}</span>
        </div>

        {isLive ? (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold tracking-wider text-[10px] animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>LIVE IN-PLAY</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
            <Clock size={12} className="text-neutral-500" />
            <span>{match.startTime}</span>
          </div>
        )}
      </div>

      {/* Match Teams & Live Score */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="font-bold text-white text-sm sm:text-base tracking-wide">
                {match.team1}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="font-bold text-white text-sm sm:text-base tracking-wide">
                {match.team2}
              </span>
            </div>
          </div>

          {match.score && (
            <p className="text-xs text-amber-400/90 font-mono mt-1 font-medium">
              {match.score} {match.currentOver && <span className="text-neutral-400">({match.currentOver})</span>}
            </p>
          )}
        </div>

        {/* Exchange Back & Lay Odds Boxes */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          {/* Team 1 Odds */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-400 font-medium truncate">{match.team1}</span>
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => onSelectOdds?.(match, match.team1, match.odds.back1, 'back')}
                className="py-1.5 px-2 rounded bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 text-sky-300 font-bold transition-all hover:scale-[1.03] active:scale-95"
                title={`Back ${match.team1}`}
              >
                <div className="text-[9px] uppercase tracking-wider text-sky-400">Back</div>
                <div className="font-mono text-xs">{match.odds.back1.toFixed(2)}</div>
              </button>

              <button
                onClick={() => onSelectOdds?.(match, match.team1, match.odds.lay1, 'lay')}
                className="py-1.5 px-2 rounded bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-300 font-bold transition-all hover:scale-[1.03] active:scale-95"
                title={`Lay ${match.team1}`}
              >
                <div className="text-[9px] uppercase tracking-wider text-rose-400">Lay</div>
                <div className="font-mono text-xs">{match.odds.lay1.toFixed(2)}</div>
              </button>
            </div>
          </div>

          {/* Team 2 Odds */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-400 font-medium truncate">{match.team2}</span>
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => onSelectOdds?.(match, match.team2, match.odds.back2, 'back')}
                className="py-1.5 px-2 rounded bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 text-sky-300 font-bold transition-all hover:scale-[1.03] active:scale-95"
                title={`Back ${match.team2}`}
              >
                <div className="text-[9px] uppercase tracking-wider text-sky-400">Back</div>
                <div className="font-mono text-xs">{match.odds.back2.toFixed(2)}</div>
              </button>

              <button
                onClick={() => onSelectOdds?.(match, match.team2, match.odds.lay2, 'lay')}
                className="py-1.5 px-2 rounded bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-300 font-bold transition-all hover:scale-[1.03] active:scale-95"
                title={`Lay ${match.team2}`}
              >
                <div className="text-[9px] uppercase tracking-wider text-rose-400">Lay</div>
                <div className="font-mono text-xs">{match.odds.lay2.toFixed(2)}</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Quick Action */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <Activity size={12} />
          <span>Real-time Verified Market Depth</span>
        </span>
        <button
          onClick={() => onSelectOdds?.(match, match.team1, match.odds.back1, 'back')}
          className="text-neutral-300 hover:text-white underline font-semibold transition-colors"
        >
          Instant Slip &rarr;
        </button>
      </div>
    </div>
  );
};

