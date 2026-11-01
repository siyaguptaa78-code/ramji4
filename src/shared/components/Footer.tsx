import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageCircle, AlertTriangle, Lock, Award, HeartHandshake } from 'lucide-react';
import { FooterLogo } from './FooterLogo';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

interface FooterProps {
  siteName: string;
  brandNumber: string;
  tagline: string;
}

export const Footer: React.FC<FooterProps> = ({ siteName, brandNumber, tagline }) => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      {/* Top Banner: 24/7 WhatsApp Hotline */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Need an Instant ID or Immediate Support?</h3>
              <p className="text-xs text-neutral-400">Official 24/7 WhatsApp customer desk. Average response time: 15 seconds.</p>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={15} className="fill-white" />
            <span>Chat on WhatsApp: +91 {WHATSAPP_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <FooterLogo siteName={siteName} />
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {tagline}. Providing cutting-edge sports odds, live cricket exchange, authentic live dealer suites, and verified instant ID services on WhatsApp.
            </p>
            <div className="flex items-center gap-3 text-neutral-300 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-emerald-400">
                <Lock size={12} />
                256-Bit SSL
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-amber-400">
                <Award size={12} />
                Certified Fair Play
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-rose-400">
                <AlertTriangle size={12} />
                18+ Only
              </span>
            </div>
          </div>

          {/* Col 2: Sports & Exchange */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Sports Exchange</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/sports" className="hover:text-white transition-colors">Cricket Exchange (IPL / ICC)</Link></li>
              <li><Link href="/sports" className="hover:text-white transition-colors">Football (EPL / Champions League)</Link></li>
              <li><Link href="/sports" className="hover:text-white transition-colors">Tennis (Grand Slams)</Link></li>
              <li><Link href="/sports" className="hover:text-white transition-colors">Pro Kabaddi League</Link></li>
              <li><Link href="/sports" className="hover:text-white transition-colors">Horse Racing</Link></li>
              <li><Link href="/sports" className="hover:text-white transition-colors">Virtual Sports In-Play</Link></li>
            </ul>
          </div>

          {/* Col 3: Live Casino */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Live Casino</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/casino" className="hover:text-white transition-colors">Teen Patti Live 20-20</Link></li>
              <li><Link href="/casino" className="hover:text-white transition-colors">Andar Bahar Pro</Link></li>
              <li><Link href="/casino" className="hover:text-white transition-colors">Lightning Roulette</Link></li>
              <li><Link href="/casino" className="hover:text-white transition-colors">Aviator Crash Games</Link></li>
              <li><Link href="/casino" className="hover:text-white transition-colors">Crazy Time & Game Shows</Link></li>
              <li><Link href="/casino" className="hover:text-white transition-colors">Dragon Tiger Live</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Trust & Support</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/contact" className="hover:text-white transition-colors">Official WhatsApp Desk</Link></li>
              <li><Link href="/promotions" className="hover:text-white transition-colors">VIP Rewards & Bonuses</Link></li>
              <li><Link href="/responsible-gaming" className="hover:text-white transition-colors">Responsible Gaming (18+)</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Information</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Instant WhatsApp Demo</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Settlement Trust Bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
            <span className="font-semibold text-neutral-300">Supported Payout Channels:</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">UPI / QR</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">PhonePe</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">Google Pay</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">Paytm</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">IMPS 24x7</span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">USDT / Crypto</span>
          </div>

          <div className="text-[11px] text-neutral-500">
            Average Withdrawal Speed: <span className="font-bold text-emerald-400">2 to 5 minutes</span>
          </div>
        </div>

        {/* Responsible Gaming & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-neutral-900 text-[11px] leading-relaxed text-neutral-500 space-y-2">
          <p>
            <strong className="text-neutral-400">Disclaimer & Responsible Gaming:</strong> This website is an informational frontend platform intended for users aged 18 and above only. Online sports trading and gaming involve financial risk and may be habit-forming. Please play responsibly and within your financial limits. We strictly operate informational assistance; no automated wagering or gambling transactions occur on this server.
          </p>
          <p className="text-neutral-600">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved. Powered by enterprise Next.js and secure verified WhatsApp communications.
          </p>
        </div>
      </div>
    </footer>
  );
};

