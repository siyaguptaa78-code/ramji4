'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface WhatsAppFloatingButtonProps {
  siteName: string;
  customMessage?: string;
  className?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  siteName,
  customMessage = `Hi ${siteName} Support! I want to get an Instant ID & Demo.`,
  className = ''
}) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const targetUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group ${className}`}>
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="relative mb-1 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/95 border border-emerald-500/30 text-white shadow-2xl backdrop-blur-md animate-bounce">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="text-xs">
            <p className="font-semibold text-emerald-400">Get Instant ID in 60s</p>
            <p className="text-[11px] text-neutral-300">WhatsApp: +91 8360750829</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main WhatsApp CTA Floating Button */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contact Official Desk on WhatsApp"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
        </span>
        <span className="hidden md:inline-block text-sm font-bold tracking-wide">
          24/7 WhatsApp Desk
        </span>
      </a>
    </div>
  );
};

