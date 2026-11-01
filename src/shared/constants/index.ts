import { SiteConfig, Match, CasinoGame, FaqItem } from '../types';

export const WHATSAPP_NUMBER = '8360750829';
export const WHATSAPP_LINK = 'https://wa.me/918360750829';

export const SITE_CONFIGS: Record<string, SiteConfig> = {
  ramji2: {
    id: 'ramji2',
    name: 'Ramji2',
    brandNumber: '2',
    tagline: "India's Premier Sports Betting Exchange & Live Casino",
    description: "Experience the royal standard of sports exchange & live dealer gaming with Ramji2. Get an Instant ID in 60 seconds on WhatsApp with 24/7 dedicated support.",
    domain: 'https://ramji2.com',
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: WHATSAPP_LINK,
    defaultWhatsAppMessage: 'Hello Ramji2 Support, I would like to get an Instant ID & Demo details.',
    theme: {
      primary: '#f59e0b', // Luxury Amber Gold
      primaryHover: '#d97706',
      accent: '#ef4444', // Crimson Red
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      gradientBg: 'from-[#120a06] via-[#1a0f0a] to-[#0a0604]',
      cardBg: 'bg-[#18110b]/80 border-amber-500/20 hover:border-amber-500/50',
      borderColor: 'border-amber-500/20',
      glowColor: 'shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    },
    features: [
      { title: '60-Second Instant ID', description: 'Quick verification via WhatsApp with zero hassle and immediate access.', icon: 'Zap' },
      { title: 'Fastest 2-Minute Withdrawal', description: 'Direct transfers via UPI, IMPS, Google Pay, PhonePe & Paytm.', icon: 'CheckCircle' },
      { title: 'Premium Exchange Odds', description: 'Highest market depth with back and lay options on all major cricket events.', icon: 'TrendingUp' },
      { title: '24/7 VIP Concierge', description: 'Dedicated personal account managers on WhatsApp available around the clock.', icon: 'Headphones' },
    ]
  },
  ramji3: {
    id: 'ramji3',
    name: 'Ramji3',
    brandNumber: '3',
    tagline: 'Next-Gen Sportsbook, eSports & Turbo Casino',
    description: 'Ultra-fast odds and live in-play sports betting on Ramji3. Connect directly on WhatsApp for seamless registration, live updates, and instant payouts.',
    domain: 'https://ramji3.com',
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: WHATSAPP_LINK,
    defaultWhatsAppMessage: 'Hello Ramji3 Team, please provide me with an Instant ID and active bonus information.',
    theme: {
      primary: '#10b981', // Cyber Emerald
      primaryHover: '#059669',
      accent: '#06b6d4', // Cyan
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      gradientBg: 'from-[#071512] via-[#0b1e19] to-[#040c0a]',
      cardBg: 'bg-[#0c221c]/80 border-emerald-500/20 hover:border-emerald-500/50',
      borderColor: 'border-emerald-500/20',
      glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    },
    features: [
      { title: 'Lightning Fast Live Bets', description: 'Real-time in-play odds with zero delay on cricket, football and tennis.', icon: 'Zap' },
      { title: '100% Secure & Verified', description: 'Direct encrypted transactions processed directly with our verified desk.', icon: 'ShieldCheck' },
      { title: '1000+ Casino & Crash Games', description: 'Enjoy Aviator, Roulette, Teen Patti, Andar Bahar, and premium slots.', icon: 'Sparkles' },
      { title: 'WhatsApp Instant Support', description: 'Real human agents answering all queries in Hindi and English in 15 seconds.', icon: 'MessageCircle' },
    ]
  },
  ramji4: {
    id: 'ramji4',
    name: 'Ramji4',
    brandNumber: '4',
    tagline: 'The Ultimate Sports Exchange & Real-Time Trading Arena',
    description: 'Precision sports trading and exchange liquidity at Ramji4. Back and Lay cricket leagues, football cups, and live casino with 1-click WhatsApp onboarding.',
    domain: 'https://ramji4.com',
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: WHATSAPP_LINK,
    defaultWhatsAppMessage: 'Hi Ramji4 Support, I want to open an Exchange Account with demo login.',
    theme: {
      primary: '#38bdf8', // Electric Sky Blue
      primaryHover: '#0284c7',
      accent: '#f59e0b', // Amber Accent
      badge: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      gradientBg: 'from-[#06101e] via-[#09182d] to-[#030811]',
      cardBg: 'bg-[#0c1e36]/80 border-sky-500/20 hover:border-sky-500/50',
      borderColor: 'border-sky-500/20',
      glowColor: 'shadow-[0_0_30px_rgba(56,189,248,0.25)]',
    },
    features: [
      { title: 'Exchange Liquidity', description: 'Trade sports contracts with competitive market commissions and deep books.', icon: 'TrendingUp' },
      { title: 'Instant WhatsApp KYC', description: 'Seamless hassle-free onboarding without document clutter.', icon: 'UserCheck' },
      { title: 'Instant Refill & Cashouts', description: 'All major Indian banking & UPI gateways supported with instant settlement.', icon: 'CreditCard' },
      { title: 'Dedicated 24x7 Desk', description: 'Continuous assistance from seasoned trading and casino specialists.', icon: 'Headphones' },
    ]
  },
  ramji5: {
    id: 'ramji5',
    name: 'Ramji5',
    brandNumber: '5',
    tagline: 'Exclusive High-Roller VIP Lounge & Global Gaming Suite',
    description: 'Step into luxury with Ramji5. Elite sports coverage, private high-limit tables, and concierge service on WhatsApp 24/7.',
    domain: 'https://ramji5.com',
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: WHATSAPP_LINK,
    defaultWhatsAppMessage: 'Greetings Ramji5 VIP Desk, please send me my VIP Access and ID details.',
    theme: {
      primary: '#e11d48', // Royal Ruby Red
      primaryHover: '#be123c',
      accent: '#fbbf24', // Rich Gold
      badge: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      gradientBg: 'from-[#1a060d] via-[#240a13] to-[#0d0206]',
      cardBg: 'bg-[#210912]/80 border-rose-500/20 hover:border-rose-500/50',
      borderColor: 'border-rose-500/20',
      glowColor: 'shadow-[0_0_30px_rgba(225,29,72,0.25)]',
    },
    features: [
      { title: 'Elite VIP Limits', description: 'Higher betting limits and personalized stakes tailored for high-rollers.', icon: 'Crown' },
      { title: 'VIP WhatsApp Concierge', description: 'Direct personal manager on WhatsApp with priority queue priority.', icon: 'Star' },
      { title: 'Exclusive Jackpots', description: 'Access to special daily prize pools and progressive high-roller games.', icon: 'Trophy' },
      { title: 'Instant 24/7 Settlements', description: 'Round-the-clock priority withdrawal processing within minutes.', icon: 'ShieldCheck' },
    ]
  }
};

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    sport: 'cricket',
    league: 'IPL 2026 / T20 International Series',
    title: 'India vs Australia — 3rd T20I',
    team1: 'India',
    team2: 'Australia',
    startTime: 'Today, 07:00 PM IST',
    status: 'live',
    score: 'IND 184/3 (17.4 ov) • AUS Yet to bat',
    currentOver: 'Target: 215 • RR: 10.4',
    odds: { back1: 1.48, lay1: 1.50, back2: 2.85, lay2: 2.92 },
    isFeatured: true
  },
  {
    id: 'm2',
    sport: 'cricket',
    league: 'ICC Champions Trophy',
    title: 'England vs South Africa',
    team1: 'England',
    team2: 'South Africa',
    startTime: 'Tomorrow, 02:30 PM IST',
    status: 'upcoming',
    odds: { back1: 1.92, lay1: 1.95, back2: 1.94, lay2: 1.97 },
    isFeatured: true
  },
  {
    id: 'm3',
    sport: 'cricket',
    league: 'Pakistan Super League (PSL)',
    title: 'Lahore Qalandars vs Karachi Kings',
    team1: 'Lahore Qalandars',
    team2: 'Karachi Kings',
    startTime: 'Today, 08:00 PM IST',
    status: 'upcoming',
    odds: { back1: 1.75, lay1: 1.78, back2: 2.15, lay2: 2.20 },
    isFeatured: false
  },
  {
    id: 'm4',
    sport: 'football',
    league: 'English Premier League',
    title: 'Arsenal vs Manchester City',
    team1: 'Arsenal',
    team2: 'Manchester City',
    startTime: 'Live 62\'',
    status: 'live',
    score: 'ARS 2 - 1 MCI',
    odds: { back1: 1.85, lay1: 1.90, back2: 3.40, lay2: 3.55, backDraw: 3.20, layDraw: 3.35 },
    isFeatured: true
  },
  {
    id: 'm5',
    sport: 'football',
    league: 'UEFA Champions League',
    title: 'Real Madrid vs Bayern Munich',
    team1: 'Real Madrid',
    team2: 'Bayern Munich',
    startTime: 'Tomorrow, 12:30 AM IST',
    status: 'upcoming',
    odds: { back1: 2.10, lay1: 2.18, back2: 2.95, lay2: 3.05, backDraw: 3.50, layDraw: 3.65 },
    isFeatured: true
  },
  {
    id: 'm6',
    sport: 'tennis',
    league: 'Wimbledon Men Singles',
    title: 'Carlos Alcaraz vs Jannik Sinner',
    team1: 'Carlos Alcaraz',
    team2: 'Jannik Sinner',
    startTime: 'Live Set 3 (6-4, 5-7, 3-2)',
    status: 'live',
    score: 'Alcaraz 1 - 1 Sinner (3-2)',
    odds: { back1: 1.65, lay1: 1.70, back2: 2.30, lay2: 2.40 },
    isFeatured: true
  },
  {
    id: 'm7',
    sport: 'kabaddi',
    league: 'Pro Kabaddi League',
    title: 'Puneri Paltan vs Jaipur Pink Panthers',
    team1: 'Puneri Paltan',
    team2: 'Jaipur Pink Panthers',
    startTime: 'Today, 08:30 PM IST',
    status: 'upcoming',
    odds: { back1: 1.62, lay1: 1.68, back2: 2.45, lay2: 2.55 },
    isFeatured: false
  },
  {
    id: 'm8',
    sport: 'horse-racing',
    league: 'Royal Ascot Championship',
    title: 'Golden Jubilee Stakes (14:30)',
    team1: 'King\'s Stand Runner',
    team2: 'Desert Miracle',
    startTime: 'Today, 09:15 PM IST',
    status: 'upcoming',
    odds: { back1: 2.80, lay1: 2.95, back2: 3.60, lay2: 3.80 },
    isFeatured: false
  }
];

export const MOCK_CASINO_GAMES: CasinoGame[] = [
  {
    id: 'g1',
    name: 'Aviator Crash',
    category: 'crash',
    provider: 'Spribe',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
    rtp: '97.0%',
    isHot: true,
    minBet: '₹10'
  },
  {
    id: 'g2',
    name: 'Live Teen Patti 20-20',
    category: 'indian',
    provider: 'Evolution Gaming',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=60',
    rtp: '96.6%',
    isHot: true,
    minBet: '₹50'
  },
  {
    id: 'g3',
    name: 'Lightning Roulette Live',
    category: 'live-casino',
    provider: 'Evolution Gaming',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&auto=format&fit=crop&q=60',
    rtp: '97.3%',
    isHot: true,
    minBet: '₹20'
  },
  {
    id: 'g4',
    name: 'Andar Bahar Pro',
    category: 'indian',
    provider: 'Ezugi Live',
    image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=500&auto=format&fit=crop&q=60',
    rtp: '96.8%',
    isHot: true,
    minBet: '₹50'
  },
  {
    id: 'g5',
    name: 'Crazy Time Game Show',
    category: 'live-casino',
    provider: 'Evolution',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&auto=format&fit=crop&q=60',
    rtp: '96.0%',
    isHot: true,
    minBet: '₹10'
  },
  {
    id: 'g6',
    name: 'Gates of Olympus 1000',
    category: 'slots',
    provider: 'Pragmatic Play',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
    rtp: '96.5%',
    isHot: true,
    minBet: '₹10'
  },
  {
    id: 'g7',
    name: 'Dragon Tiger Live',
    category: 'table-games',
    provider: 'Super Spade',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=60',
    rtp: '96.2%',
    isNew: true,
    minBet: '₹50'
  },
  {
    id: 'g8',
    name: 'Spribe Mines Turbo',
    category: 'crash',
    provider: 'Spribe',
    image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=500&auto=format&fit=crop&q=60',
    rtp: '97.0%',
    isNew: true,
    minBet: '₹10'
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'How do I create an account and get my Instant ID?',
    answer: 'Simply tap any "WhatsApp ID" or "Contact on WhatsApp" button on this website to message our 24/7 official desk (WhatsApp: 8360750829). Our executive will provide you with an active demo or instant login ID in under 60 seconds with simple instructions.'
  },
  {
    question: 'What payment and withdrawal methods are supported?',
    answer: 'We support all major instantaneous Indian payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS direct bank transfers, NEFT, and secure USDT (Crypto). Withdrawals are processed 24/7 typically within 2 to 10 minutes directly to your bank or UPI ID.'
  },
  {
    question: 'Is my data and personal information secure?',
    answer: 'Yes. We employ end-to-end 256-bit SSL encryption. All transactions and communication are conducted directly via verified WhatsApp channels, ensuring complete discretion and safety.'
  },
  {
    question: 'What is the minimum deposit and minimum withdrawal amount?',
    answer: 'The minimum starting deposit is ₹100, and minimum withdrawal is ₹500 with zero transaction fees or hidden cuts.'
  },
  {
    question: 'Can I get a free demo ID before starting?',
    answer: 'Absolutely! Send a quick message to our WhatsApp team stating "Demo ID" and our support agent will instantly share demo credentials with loaded test balance so you can test all games and exchange odds.'
  },
  {
    question: 'What sports and casino games can I play?',
    answer: 'You have full access to cricket exchange (IPL, Test, ODI, T20 leagues), live football (EPL, Champions League, ISL), tennis, horse racing, and live casino games including Teen Patti, Andar Bahar, Roulette, Baccarat, and Aviator.'
  }
];

export const LIVE_TICKER_ITEMS = [
  '⚡ Cricket Live: India vs Australia 3rd T20I In-Play now — Back 1.48 / Lay 1.50',
  '💰 Rahul K. from Delhi just withdrew ₹52,400 via UPI (Processed in 1m 40s)',
  '🎰 Aviator 28.4x Multiplier hit! Payout ₹1,42,000 sent via Instant IMPS',
  '🔥 IPL 2026 Special Odds & Zero Commission Exchange Open Now',
  '🛡️ 24/7 Official WhatsApp Desk Active: +91 8360750829 — Get Demo ID in 60s',
  '⭐ Amit S. from Bangalore just withdrew ₹88,000 via PhonePe',
  '🏏 Pro Kabaddi League Semi-Finals Live Odds available now'
];

