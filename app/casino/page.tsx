'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle, Flame } from 'lucide-react';
import { 
  MOCK_CASINO_GAMES, 
  CasinoCard, 
  Breadcrumb, 
  WhatsAppCtaModal, 
  SITE_CONFIGS, 
  CasinoCategory 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function CasinoPage() {
  const [selectedCategory, setSelectedCategory] = useState<CasinoCategory>('all');
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const filteredGames = MOCK_CASINO_GAMES.filter((g) => {
    const matchesCat = selectedCategory === 'all' || g.category === selectedCategory;
    const matchesProv = selectedProvider === 'all' || g.provider.toLowerCase().includes(selectedProvider.toLowerCase());
    return matchesCat && matchesProv;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Live Casino & Crash Games' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles size={14} />
            <span>VIP Dealer Suites</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Casino & Indian Card Games
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Live Teen Patti, Andar Bahar, Lightning Roulette, Aviator & high-RTP slots with instant payouts.
          </p>
        </div>

        <button
          onClick={() => setCtaModalOpen(true)}
          className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
        >
          <MessageCircle size={15} />
          <span>Get Free Demo ID</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Games' },
            { id: 'indian', label: '🃏 Indian Card Games' },
            { id: 'live-casino', label: '🎡 Live Dealer Tables' },
            { id: 'crash', label: '🚀 Aviator & Crash' },
            { id: 'slots', label: '🎰 Top Slots' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as CasinoCategory)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === tab.id
                  ? 'bg-amber-500 text-neutral-950 shadow-md'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGames.map((game) => (
          <CasinoCard
            key={game.id}
            game={game}
            onPlayDemo={() => setCtaModalOpen(true)}
            brandPrimary="text-amber-400"
          />
        ))}
      </div>

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}
