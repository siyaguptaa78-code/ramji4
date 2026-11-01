import React from 'react';
import { Breadcrumb, SITE_CONFIGS } from '@ramji/shared';

const config = SITE_CONFIGS.ramji4;

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Terms of Service & User Guidelines' }]} />

      <h1 className="text-3xl font-extrabold text-white mt-6 mb-4">
        Terms of Service & Informational Guidelines
      </h1>
      <p className="text-xs text-neutral-400 mb-8">Last Updated: November 2026</p>

      <div className="space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 space-y-2">
          <h2 className="text-base font-bold text-white">1. Informational Platform Scope</h2>
          <p>
            {config.name} provides frontend sports market statistics, exchange information, odds displays, and customer communication assistance. This platform does not process payments or house gambling games directly on this web server.
          </p>
        </section>

        <section className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 space-y-2">
          <h2 className="text-base font-bold text-white">2. Age Eligibility (18+ Only)</h2>
          <p>
            Access is strictly restricted to individuals who are 18 years of age or older (or the legal age of majority in their jurisdiction). Any individual under the legal age is prohibited from requesting demo or real account access.
          </p>
        </section>

        <section className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 space-y-2">
          <h2 className="text-base font-bold text-white">3. Direct WhatsApp Assistance</h2>
          <p>
            All user interactions, credential deliveries, and queries are conducted via our official WhatsApp desk (+91 {config.whatsappNumber}). Users are responsible for safeguarding their login credentials and avoiding unauthorized third-party links.
          </p>
        </section>

        <section className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 space-y-2">
          <h2 className="text-base font-bold text-white">4. Fair Play & Financial Risk</h2>
          <p>
            Sports trading and gaming carry financial risks. Users acknowledge that past outcomes do not guarantee future results and agree to participate solely with discretionary funds they can afford to risk.
          </p>
        </section>
      </div>
    </div>
  );
}
