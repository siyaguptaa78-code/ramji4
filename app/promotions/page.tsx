'use client';

import React, { useState } from 'react';
import { Gift, ShieldCheck, Zap, ArrowRight, MessageCircle, Star, Crown } from 'lucide-react';
import { Breadcrumb, WhatsAppCtaModal, SITE_CONFIGS } from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function PromotionsPage() {
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const promos = [
    {
      title: '100% Welcome Bonus on First ID Refill',
      badge: 'NEW MEMBERS',
      desc: 'Double your playing balance up to ₹10,000 on your initial deposit with lowest rollover requirement in India.',
      code: 'WELCOME100',
      icon: Gift,
      color: 'border-amber-500/40 from-amber-500/10 to-transparent'
    },
    {
      title: '10% Weekly Unlimited Loss Cashback',
      badge: 'EVERY MONDAY',
      desc: 'Get 10% auto cashback credited directly to your WhatsApp ID every Monday with no questions asked.',
      code: 'CASHBACK10',
      icon: Zap,
      color: 'border-emerald-500/40 from-emerald-500/10 to-transparent'
    },
    {
      title: 'IPL 2026 Zero Commission Special',
      badge: 'TOURNAMENT SPECIAL',
      desc: 'Trade all IPL 2026 cricket matches with 0% exchange commission on matched back and lay bets.',
      code: 'IPL2026ZERO',
      icon: Star,
      color: 'border-sky-500/40 from-sky-500/10 to-transparent'
    },
    {
      title: 'VIP High-Roller Concierge & Private Tables',
      badge: 'EXCLUSIVE VIP',
      desc: 'Exclusive WhatsApp relationship manager, customized deposit limits, and priority 2-minute withdrawals.',
      code: 'VIPROYAL',
      icon: Crown,
      color: 'border-rose-500/40 from-rose-500/10 to-transparent'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Promotions & VIP Rewards' }]} />

      <div className="text-center max-w-2xl mx-auto my-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Gift size={14} />
          <span>EXCLUSIVE OFFERS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Promotions & VIP Rewards
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2">
          Claim high-value welcome bonuses, weekly cashback, and VIP rewards directly via our 24/7 WhatsApp desk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {promos.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl border p-6 bg-gradient-to-br ${p.color} bg-neutral-900/90 shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-amber-400">
                    <Icon size={24} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold uppercase text-white tracking-wider">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400">PROMO: {p.code}</span>
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle size={14} />
                  <span>Claim on WhatsApp</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}
