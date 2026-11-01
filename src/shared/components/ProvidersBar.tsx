import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProvidersBar: React.FC = () => {
  const providers = [
    { name: 'Evolution Gaming', category: 'Live Dealer' },
    { name: 'Pragmatic Play', category: 'Slots & Live' },
    { name: 'Ezugi Live', category: 'Indian Tables' },
    { name: 'Spribe Aviator', category: 'Crash Games' },
    { name: 'Betfair Exchange', category: 'Liquidity' },
    { name: 'Super Spade', category: 'Asian Casino' },
    { name: 'Betradar', category: 'Live Sports' },
  ];

  return (
    <div className="w-full py-8 border-y border-white/5 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            Certified Official Game & Liquidity Providers
          </span>
          <span className="text-[11px] text-neutral-500 hidden sm:inline">100% Licensed RNG & Verified Fairness</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {providers.map((p, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-center hover:border-neutral-700 transition-all hover:bg-neutral-900"
            >
              <div className="text-xs font-bold text-white tracking-wide truncate">{p.name}</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">{p.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

