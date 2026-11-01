'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, MessageCircle, ShieldCheck, Zap, ArrowRight, 
  Flame, CheckCircle, Sparkles, TrendingUp, Layers, Play
} from 'lucide-react';
import { 
  SITE_CONFIGS, 
  MOCK_MATCHES, 
  MOCK_CASINO_GAMES, 
  GENERAL_FAQS, 
  MatchCard, 
  CasinoCard, 
  QuickBetSlipModal, 
  WhatsAppCtaModal, 
  FaqAccordion, 
  ProvidersBar, 
  PaymentMethodsBar,
  WHATSAPP_LINK, 
  Match 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function HomePage() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
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

  const filteredMatches = selectedSport === 'all' 
    ? MOCK_MATCHES 
    : MOCK_MATCHES.filter(m => m.sport === selectedSport);

  return (
    <div className="w-full">
      {/* 1. EXCHANGE HERO */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b border-sky-500/20 bg-gradient-to-b from-[#081830] via-[#051020] to-[#040914]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase">
                <Layers size={14} />
                <span>Professional Cricket Trading Exchange</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Trade Sports With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">
                  Global Exchange Depth.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-sky-400 font-semibold">Ramji4</strong> provides institutional-grade cricket trading liquidity. Back and Lay live test matches, IPL fixtures, session runs and fancy markets with instant settlements via verified WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>Get WhatsApp Exchange ID</span>
                </button>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-sky-500/40 text-sky-300 font-bold text-sm transition-all"
                >
                  <Play size={16} className="fill-current" />
                  <span>Exchange Demo Login</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Full Liquidity</div>
                    <div className="text-[11px] text-neutral-400">Back & Lay Books</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Zero Delay</div>
                    <div className="text-[11px] text-neutral-400">In-Play Quotes</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-amber-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">100% Verified</div>
                    <div className="text-[11px] text-neutral-400">Direct WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-rose-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Session Bets</div>
                    <div className="text-[11px] text-neutral-400">Fancy & Khado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exchange Depth Mock Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-sky-500/30 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-sky-500/20 text-xs">
                  <span className="font-bold text-sky-400 uppercase">Live Exchange Orderbook</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">ICC TROPHY</span>
                </div>

                <div className="space-y-3 mb-4 text-xs">
                  <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-sm">England</div>
                      <div className="text-[11px] text-neutral-400">Match Winner Market</div>
                    </div>
                    <div className="flex gap-1.5 font-mono">
                      <button onClick={() => handleSelectOdds(MOCK_MATCHES[1], 'England', 1.92, 'back')} className="px-3 py-1.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold">1.92</button>
                      <button onClick={() => handleSelectOdds(MOCK_MATCHES[1], 'England', 1.95, 'lay')} className="px-3 py-1.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold">1.95</button>
                    </div>
                  </div>

                  <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-sm">South Africa</div>
                      <div className="text-[11px] text-neutral-400">Match Winner Market</div>
                    </div>
                    <div className="flex gap-1.5 font-mono">
                      <button onClick={() => handleSelectOdds(MOCK_MATCHES[1], 'South Africa', 1.94, 'back')} className="px-3 py-1.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold">1.94</button>
                      <button onClick={() => handleSelectOdds(MOCK_MATCHES[1], 'South Africa', 1.97, 'lay')} className="px-3 py-1.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold">1.97</button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Request WhatsApp Access & ID</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MATCHES LIST */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Active Orderbooks</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Exchange Fixtures & Matches</h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {['all', 'cricket', 'football', 'tennis', 'kabaddi'].map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                  selectedSport === sport
                    ? 'bg-sky-500 text-neutral-950 shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSelectOdds={handleSelectOdds}
              brandPrimary="text-sky-400"
            />
          ))}
        </div>
      </section>

      {/* 3. CASINO SECTION */}
      <section className="py-12 sm:py-16 bg-neutral-950/80 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Verified Tables</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Live Dealer Casino & Slots</h2>
            </div>
            <Link href="/casino" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1">
              <span>View Casino</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_CASINO_GAMES.map((game) => (
              <CasinoCard
                key={game.id}
                game={game}
                onPlayDemo={() => setCtaModalOpen(true)}
                brandPrimary="text-sky-400"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAYMENT & PROVIDERS */}
      <PaymentMethodsBar />
      <ProvidersBar />

      {/* 5. FAQS */}
      <FaqAccordion 
        faqs={GENERAL_FAQS}
        title="Ramji4 Frequently Asked Questions"
        subtitle="Learn about back/lay betting, session markets, and instant WhatsApp support."
        brandPrimary="text-sky-400"
      />

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

