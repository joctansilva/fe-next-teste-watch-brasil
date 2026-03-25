import { useMemo } from "react";
import type { Ad } from "@/data/ads";

export interface AdPosition {
  ad: Ad;
  position: number; // Position at which to insert (after X items)
}

/**
 * Hook to insert multiple ads at specific positions
 *
 * @param items - Array of items (shows, products, etc.)
 * @param adPositions - Array of { ad, position } objects
 * @returns Merged array with items and ads at the specified positions
 *
 * @example
 * const merged = useInsertAdsAtPositions(shows, [
 *   { ad: ads[0], position: 2 },  // Insert ads[0] after 2 items
 *   { ad: ads[1], position: 5 },  // Insert ads[1] after 5 items
 *   { ad: ads[2], position: 8 },  // Insert ads[2] after 8 items
 * ]);
 */
export function useInsertAdsAtPositions<T>(
  items: T[],
  adPositions: AdPosition[]
): Array<T | Ad> {
  return useMemo(() => {
    if (!adPositions || adPositions.length === 0) return items;

    const result: Array<T | Ad> = [...items];

    // Sort by descending position so we insert from end to start,
    // preventing index shifts after each insertion
    const sortedPositions = [...adPositions].sort((a, b) => b.position - a.position);

    sortedPositions.forEach(({ ad, position }) => {
      if (position >= 0 && position <= result.length) {
        result.splice(position, 0, ad);
      }
    });

    return result;
  }, [items, adPositions]);
}
