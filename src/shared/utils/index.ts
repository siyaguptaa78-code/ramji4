import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(number: string, message: string): string {
  const cleanNumber = number.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${cleanNumber}?text=${encoded}`;
}

