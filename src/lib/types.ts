/* ══════════════════════════════════════════════════════════════════════════
   Typen der Inhalte
   ──────────────────────────────────────────────────────────────────────────
   Die Inhalte selbst stehen als schlichtes JavaScript in src/data — sie sollen
   sich auch ohne TypeScript-Kenntnisse pflegen lassen. Die Typen hier lesen
   die Form aus den Daten heraus, statt sie ein zweites Mal zu behaupten: was
   in menu.js steht, ist die Wahrheit.
   ═════════════════════════════════════════════════════════════════════════ */

import { categories, tagLabels } from '../data/menu.js';
import { ui } from '../data/ui.js';

/** 'en' | 'fa' | 'ru' | 'ka' */
export type LangCode = keyof typeof ui;

/** 'veg' | 'vegan' | 'gf' | 'spicy' | 'chef' */
export type TagKey = keyof typeof tagLabels;

/** Ein Kapitel der Speisekarte, mit allen Gerichten darin. */
export type Category = (typeof categories)[number];

/** Ein Gericht. */
export type Dish = Category['items'][number];

/** Eine Zeichenkette in allen vier Sprachen. */
export type Translated = Record<LangCode, string>;
