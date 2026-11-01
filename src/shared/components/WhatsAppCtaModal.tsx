'use client';

import React from 'react';
import { X, MessageCircle, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

interface WhatsAppCtaModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteName: string;
  title?: string;
  subtitle?: string;
  customMessage?: string;
}

export const WhatsAppCtaModal: React.FC<WhatsAppCtaModalProps> = ({
  isOpen,
  onClose,
  siteName,
  title = 'Get Your Official Instant ID',
  subtitle = 'Instant setup in 60 seconds with verified 24/7 WhatsApp assistance',
  customMessage = `Hello ${siteName} Support! I would like to get an Instant ID & Demo Account.`
}) => {
  if (!isOpen) return null;

  const targetUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-2 pb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">{subtitle}</p>
        </div>

        {/* Informational Perks */}
        <div className="space-y-2.5 my-4 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80 text-xs">
          <div className="flex items-center gap-2.5 text-neutral-200">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check size={12} /></div>
            <span>No tedious signup forms — Direct WhatsApp KYC</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-200">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check size={12} /></div>
            <span>Free demo credentials with pre-loaded trial balance</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-200">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check size={12} /></div>
            <span>Instant UPI / IMPS deposit & 2-minute withdrawals</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-200">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check size={12} /></div>
            <span>24/7 dedicated personal account manager</span>
          </div>
        </div>

        {/* Contact Info Pill */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg mb-5 text-xs">
          <span className="text-neutral-400">Official Helpline:</span>
          <span className="font-mono font-bold text-emerald-400">+91 {WHATSAPP_NUMBER}</span>
        </div>

        {/* Primary Action Button */}
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/60 transition-all text-sm tracking-wide"
        >
          <span>Connect via WhatsApp Now</span>
          <ArrowRight size={16} />
        </a>

        <p className="text-[11px] text-neutral-500 text-center mt-3">
          18+ Only • Safe, Discreet & Strictly Informational Assistance
        </p>
      </div>
    </div>
  );
};

