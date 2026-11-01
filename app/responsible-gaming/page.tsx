import React from 'react';
import { AlertTriangle, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Breadcrumb, SITE_CONFIGS, WHATSAPP_LINK } from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function ResponsibleGamingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Responsible Gaming (18+)' }]} />

      <div className="flex items-center gap-3 my-6">
        <div className="p-3 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">PLAYER PROTECTION POLICY</span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Responsible Gaming & Self-Exclusion</h1>
        </div>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-base font-bold text-white mb-2">Our Commitment to Safe Play</h2>
          <p>
            At {config.name}, we believe sports entertainment and casino gaming should remain enjoyable, controlled, and responsible. We actively advocate for self-regulation, time discipline, and financial safety.
          </p>
        </div>

        <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 space-y-3">
          <h2 className="text-base font-bold text-white">Guiding Principles for Responsible Play</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
            <li>Never view gaming or sports trading as a primary source of income or a solution to debt.</li>
            <li>Only wager money that you can comfortably afford to lose without impacting your lifestyle or family.</li>
            <li>Set strict daily, weekly, or monthly loss limits before placing any trade.</li>
            <li>Never chase losses with larger stakes or emotional decision-making.</li>
            <li>Take regular breaks to maintain balance in your daily life and responsibilities.</li>
          </ul>
        </div>

        <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-base font-bold text-white mb-2">Self-Exclusion and Account Cooling Off</h2>
          <p className="mb-4">
            If you ever feel you need a temporary or permanent break from gaming, message our official WhatsApp desk with the text <strong>"SELF EXCLUDE"</strong>. Our support team will immediately pause or disable your ID with zero questions asked.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider"
          >
            <span>Request WhatsApp Self-Exclusion</span>
          </a>
        </div>
      </div>
    </div>
  );
}
