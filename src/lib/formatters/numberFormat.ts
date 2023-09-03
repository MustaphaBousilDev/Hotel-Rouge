import type { Decimal } from '@prisma/client/runtime';

export function currency(
  s: string | number | Decimal,
  compact = false
): string {
  return Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'MAD',
    currencyDisplay: 'narrowSymbol',
    notation: compact ? 'compact' : 'standard',
  }).format(Number(s));
}

export function compact(s: string | number | Decimal): string {
  return Intl.NumberFormat('fr-FR', {
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
  }).format(Number(s));
}

const suffixes = new Map([
  ['one', 'er'],
  ['other', 'ème'],
]);
const formatter = new Intl.PluralRules('fr-FR', { type: 'ordinal' });
export const ordinal = (n: number) => {
  if (n === 0) return '0';
  const suffix = suffixes.get(formatter.select(n));
  return `${n}${suffix}`;
};

export const twoDigit = (s: string | number) => {
  const n = Number(s);
  return n < 10 ? `0${n}` : `${n}`;
};
