import type { AllServices } from '../services';

enum Locales {
  fr,
}
export type Locale = keyof typeof Locales;

export type TranslatedServices = {
  [k in AllServices]: {
    [x in Locale]: string;
  };
};

export const translatedServiceName = {
  RESTAURANT: { fr: 'restaurant' },
  SPA: { fr: 'spa' },
  // GYM: { fr: 'salles de sport' },
  // SWIMMING_POOL: { fr: 'piscine' },
  // ROOM_SERVICE: { fr: 'service en chambre' },
  LAUNDRY: { fr: 'blanchisserie' },
  EXCURSIONS: { fr: 'excursions' },
  HOUSEKEEPING: { fr: 'ménage' },
  // WAKE_UP_SERVICE: { fr: 'service de réveil' },
  // ATTRACTIONS: { fr: 'guide touristique' },
  EVENTS: { fr: 'événements' },
  CHAT: { fr: 'messagerie' },
  TV: { fr: 'TV' },
  EXPRESS_CHECKOUT: { fr: 'check-out express' },
} satisfies TranslatedServices;
