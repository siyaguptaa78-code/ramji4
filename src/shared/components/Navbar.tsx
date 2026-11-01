'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, MessageCircle, Flame, Shield, Trophy, 
  Gamepad2, Sparkles, ChevronRight, PhoneCall 
} from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';
import { WhatsAppCtaModal } from './WhatsAppCtaModal';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

interface NavbarProps {
  siteName: string;
  brandNumber: string;
  accentColor?: string;
  badgeStyle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  siteName,
  brandNumber,
  accentColor = 'border-amber-500/30 text-amber-400',
  badgeStyle = 'bg-amber-500/10 text-amber-400'
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const navLinks = [
    { label: 'Exchange & Sports', href: '/sports', icon: Trophy },
    { label: 'Live In-Play', href: '/sports#live', icon: Flame, isHot: true },
    { label: 'Live Casino', href: '/casino', icon: Gamepad2 },
    { label: 'Crash / Aviator', href: '/casino#crash', icon: Sparkles },
    { label: 'VIP Promotions', href: '/promotions', icon: Shield },
    { label: 'Contact & WhatsApp', href: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-neutral-950/90 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <HeaderLogo siteName={siteName} brandNumber={brandNumber} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && !item.href.includes('#'));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-white bg-white/10 border border-white/10 shadow-inner'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-amber-400' : 'text-neutral-400'} />
                    <span>{item.label}</span>
                    {item.isHot && (
                      <span className="ml-1 px-1.5 py-0.2 rounded-full text-[9px] font-black uppercase bg-red-600 text-white animate-pulse">
                        HOT
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => setCtaModalOpen(true)}
                className="px-3.5 py-2 text-xs font-bold rounded-lg border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors"
              >
                Demo ID
              </button>

              <button
                onClick={() => setCtaModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle size={14} className="fill-white" />
                <span>Get Instant ID</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setCtaModalOpen(true)}
                className="px-2.5 py-1.5 text-[11px] font-bold rounded-md bg-emerald-500 text-white flex items-center gap-1"
              >
                <MessageCircle size={12} />
                <span>ID</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="py-2 px-3 rounded-lg bg-neutral-900 border border-neutral-800 mb-3 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Official WhatsApp:</span>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer" 
                className="font-mono font-bold text-emerald-400 flex items-center gap-1"
              >
                <span>+91 {WHATSAPP_NUMBER}</span>
                <ChevronRight size={12} />
              </a>
            </div>

            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-amber-400" />
                    <span>{item.label}</span>
                  </div>
                  {item.isHot && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-600 text-white">
                      HOT
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCtaModalOpen(true);
                }}
                className="w-full py-3 text-center text-xs font-bold rounded-xl bg-neutral-900 border border-neutral-700 text-white"
              >
                Request Free Demo ID
              </button>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello ${siteName} Support! I want an Instant ID now.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-extrabold uppercase tracking-wide rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Open Instant WhatsApp ID</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Instant ID WhatsApp Modal */}
      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={siteName}
      />
    </>
  );
};

