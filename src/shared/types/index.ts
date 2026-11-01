export type SportCategory = 'all' | 'cricket' | 'football' | 'tennis' | 'kabaddi' | 'horse-racing';

export interface MatchOdds {
  back1: number;
  lay1: number;
  back2: number;
  lay2: number;
  backDraw?: number;
  layDraw?: number;
}

export interface Match {
  id: string;
  sport: SportCategory;
  league: string;
  title: string;
  team1: string;
  team2: string;
  startTime: string;
  status: 'live' | 'upcoming';
  score?: string;
  currentOver?: string;
  odds: MatchOdds;
  isFeatured?: boolean;
}

export type CasinoCategory = 'all' | 'live-casino' | 'slots' | 'crash' | 'table-games' | 'indian';

export interface CasinoGame {
  id: string;
  name: string;
  category: CasinoCategory;
  provider: string;
  image: string;
  rtp?: string;
  isHot?: boolean;
  isNew?: boolean;
  minBet?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SiteTheme {
  primary: string;
  primaryHover: string;
  accent: string;
  badge: string;
  gradientBg: string;
  cardBg: string;
  borderColor: string;
  glowColor: string;
}

export interface SiteConfig {
  id: string;
  name: string;
  brandNumber: '2' | '3' | '4' | '5';
  tagline: string;
  description: string;
  domain: string;
  whatsappNumber: string;
  whatsappUrl: string;
  defaultWhatsAppMessage: string;
  theme: SiteTheme;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

