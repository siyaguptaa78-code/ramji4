'use client';

import React from 'react';
import { MessageCircle, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumb, SITE_CONFIGS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: '24/7 Official Contact & WhatsApp' }]} />

      <div className="text-center max-w-2xl mx-auto my-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Clock size={14} />
          <span>24/7/365 REAL-TIME SUPPORT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Official Support & WhatsApp Hotline
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2">
          Reach our verified customer service desk for instant ID activation, balance refills, and rapid 2-minute cashouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
        {/* Main WhatsApp Card */}
        <div className="lg:col-span-7 bg-neutral-900/90 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Primary Contact Channel</span>
              <h2 className="text-xl sm:text-2xl font-black text-white">24/7 WhatsApp Verified Desk</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            Chat directly with our support team. No automated bots — real account executives available in Hindi and English.
          </p>

          <div className="bg-black/60 rounded-xl p-4 border border-white/10 mb-6 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-neutral-400 block">WhatsApp Official Number:</span>
              <span className="text-base sm:text-lg font-mono font-bold text-emerald-400">+91 {WHATSAPP_NUMBER}</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold animate-pulse">
              ONLINE NOW
            </span>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-950 transition-all hover:scale-[1.01]"
          >
            <MessageCircle size={18} className="fill-white" />
            <span>Open WhatsApp Chat Now</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Support Channels & Guidelines */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Verification Notice</span>
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Always verify you are contacting our official number: <strong className="text-white">+91 {WHATSAPP_NUMBER}</strong>. We never ask for sensitive bank passwords or OTPs.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-3">Service Level Guarantees</h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Instant ID Generation: &lt; 60 seconds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Average WhatsApp Response: 15 seconds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>UPI Withdrawal Settlement: 2 to 5 minutes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>100% Data Confidentiality via End-to-End Chat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
