import { useMemo } from "react";
import type { Ad } from "@/data/ads";

export function useInterleaveAds<T>(
  items: T[],
  ad: Ad | null,
  position: number = 3,
): Array<T | Ad> {
  return useMemo(() => {
    if (!ad) return items;

    const result: Array<T | Ad> = [...items];

    // Insere o ad na posição especificada
    if (position >= 0 && position <= items.length) {
      result.splice(position, 0, ad);
    }

    return result;
  }, [items, ad, position]);
}
