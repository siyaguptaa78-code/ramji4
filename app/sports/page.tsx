'use client';

import React, { useState } from 'react';
import { Trophy, Activity, MessageCircle, Filter, Zap, Clock } from 'lucide-react';
import { 
  MOCK_MATCHES, 
  MatchCard, 
  Breadcrumb, 
  QuickBetSlipModal, 
  WhatsAppCtaModal, 
  Match, 
  SITE_CONFIGS, 
  WHATSAPP_LINK 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function SportsPage() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'live' | 'upcoming'>('all');
  const [betSlipOpen, setBetSlipOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState<{
    match: Match;
    team: string;
    odds: number;
    type: 'back' | 'lay';
  } | null>(null);

  const handleSelectOdds = (match: Match, team: string, odds: number, type: 'back' | 'lay') => {
    setActiveSelection({ match, team, odds, type });
    setBetSlipOpen(true);
  };

  const filteredMatches = MOCK_MATCHES.filter((m) => {
    const matchesSport = selectedSport === 'all' || m.sport === selectedSport;
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesSport && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Sports & Exchange' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
            <Trophy size={14} />
            <span>Real-Time Market Depth</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sports Betting Exchange
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Back and lay on Cricket, Football, Tennis, Kabaddi & Horse Racing with lowest commission rates.
          </p>
        </div>

        <button
          onClick={() => setCtaModalOpen(true)}
          className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
        >
          <MessageCircle size={15} />
          <span>Get Exchange ID</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
        {/* Sport Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Sports' },
            { id: 'cricket', label: '🏏 Cricket' },
            { id: 'football', label: '⚽ Football' },
            { id: 'tennis', label: '🎾 Tennis' },
            { id: 'kabaddi', label: '🤼 Kabaddi' },
            { id: 'horse-racing', label: '🏇 Horse Racing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSport(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedSport === tab.id
                  ? 'bg-amber-500 text-neutral-950 shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Status Toggle */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1 rounded text-xs font-semibold ${
              statusFilter === 'all' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('live')}
            className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 ${
              statusFilter === 'live' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Live In-Play
          </button>
          <button
            onClick={() => setStatusFilter('upcoming')}
            className={`px-2.5 py-1 rounded text-xs font-semibold ${
              statusFilter === 'upcoming' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Upcoming
          </button>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onSelectOdds={handleSelectOdds}
            brandPrimary="text-amber-400"
          />
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
          <Clock size={36} className="text-neutral-500 mx-auto mb-2" />
          <h3 className="text-base font-bold text-white">No active matches found</h3>
          <p className="text-xs text-neutral-400 mt-1">Please select another sport or check upcoming tournaments.</p>
        </div>
      )}

      {/* Quick Bet Slip & WhatsApp Modals */}
      <QuickBetSlipModal
        isOpen={betSlipOpen}
        onClose={() => setBetSlipOpen(false)}
        selection={activeSelection}
        siteName={config.name}
      />

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}
