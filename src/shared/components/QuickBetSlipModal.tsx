'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, Calculator } from 'lucide-react';
import { Match } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface QuickBetSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selection: {
    match: Match;
    team: string;
    odds: number;
    type: 'back' | 'lay';
  } | null;
  siteName: string;
}

export const QuickBetSlipModal: React.FC<QuickBetSlipModalProps> = ({
  isOpen,
  onClose,
  selection,
  siteName
}) => {
  const [stake, setStake] = useState<number>(1000);

  if (!isOpen || !selection) return null;

  const { match, team, odds, type } = selection;
  const potentialReturn = Math.round(stake * odds);
  const potentialProfit = Math.round(potentialReturn - stake);

  const predefinedStakes = [500, 1000, 2500, 5000, 10000];

  const whatsappMessage = `Hi ${siteName} Support! I want to confirm an ID bet:
Match: ${match.title}
Market: ${match.league}
Selection: ${team} (${type.toUpperCase()})
Odds: ${odds.toFixed(2)}
Stake: ₹${stake.toLocaleString('en-IN')}
Estimated Payout: ₹${potentialReturn.toLocaleString('en-IN')}`;

  const targetUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-5 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
          aria-label="Close slip"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-neutral-800">
          <Calculator className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">Live Odds Slip Simulator</h3>
          <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${
            type === 'back' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
          }`}>
            {type.toUpperCase()}
          </span>
        </div>

        {/* Selection Details */}
        <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-800 text-xs space-y-1 mb-4">
          <p className="text-neutral-400 font-medium truncate">{match.league}</p>
          <p className="text-white font-bold text-sm truncate">{match.title}</p>
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="text-neutral-300">Selection: <strong className="text-white">{team}</strong></span>
            <span className="font-mono text-sm font-bold text-emerald-400">@ {odds.toFixed(2)}</span>
          </div>
        </div>

        {/* Stake Selector */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-neutral-300 mb-1.5 block">
            Select Test Stake Amount (INR):
          </label>
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {predefinedStakes.map((amt) => (
              <button
                key={amt}
                onClick={() => setStake(amt)}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  stake === amt
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                ₹{amt >= 1000 ? `${amt / 1000}k` : amt}
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-neutral-400 font-mono text-xs">₹</span>
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(Math.max(100, Number(e.target.value)))}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2 pl-7 pr-3 text-sm font-mono text-white focus:outline-none focus:border-amber-500"
              placeholder="Custom Stake"
            />
          </div>
        </div>

        {/* Payout Summary */}
        <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3.5 mb-4 text-xs space-y-1.5">
          <div className="flex justify-between text-neutral-300">
            <span>Selected Stake:</span>
            <span className="font-mono font-bold text-white">₹{stake.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span>Potential Profit:</span>
            <span className="font-mono font-bold text-emerald-400">+₹{potentialProfit.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-white pt-1.5 border-t border-emerald-500/20">
            <span>Total Expected Return:</span>
            <span className="font-mono text-emerald-400">₹{potentialReturn.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* WhatsApp Submit Action */}
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02] active:scale-95"
        >
          <MessageCircle size={16} />
          <span>Confirm on WhatsApp Official Desk</span>
          <ArrowRight size={16} />
        </a>

        <p className="text-[11px] text-neutral-500 text-center mt-2.5">
          Fast WhatsApp validation with immediate slip confirmation.
        </p>
      </div>
    </div>
  );
};

