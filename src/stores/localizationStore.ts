import { atom } from 'nanostores';
import tr from '../assets/lang/tr.json';
import en from '../assets/lang/en.json';

export type LangDataType = typeof en;

export const $lang = atom(window.navigator.language.toLowerCase() === 'tr-tr' ? tr : en);

export function setLang(lang: 'tr' | 'en'): void {
  $lang.set(lang === 'tr' ? tr : en);
}

export function toggleLang(): void {
  $lang.set($lang.get() === tr ? en : tr);
}
