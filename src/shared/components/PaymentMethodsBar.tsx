import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const PaymentMethodsBar: React.FC = () => {
  const methods = [
    { name: 'UPI Fast Pay', speed: 'Instant' },
    { name: 'Google Pay', speed: 'Instant' },
    { name: 'PhonePe', speed: 'Instant' },
    { name: 'Paytm UPI', speed: 'Instant' },
    { name: 'IMPS Bank Transfer', speed: '2 Mins' },
    { name: 'USDT (TRC20)', speed: 'Zero Fee' },
  ];

  return (
    <section className="w-full py-8 bg-neutral-900/30 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Zap size={16} className="text-amber-400" />
              Instant Payment & Rapid Withdrawal Gateway
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Direct deposit & withdrawal processing with 0% commission. Available 24/7/365.
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Lock size={12} />
            <span>Encrypted Banking Gateways</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {methods.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div className="text-xs font-bold text-white">{m.name}</div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800 text-[10px]">
                <span className="text-neutral-400">Processing:</span>
                <span className="font-semibold text-emerald-400">{m.speed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

