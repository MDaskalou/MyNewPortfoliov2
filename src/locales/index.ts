import sv from './sv';
import en from './en';

export const locales = {
  sv,
  en,
} as const;

export type Locale = keyof typeof locales;
export type Translations = typeof sv;

export { sv, en };
export default locales;
