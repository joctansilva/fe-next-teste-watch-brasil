import type { Ad } from "@/data/ads";

/**
 * Type guard para verificar se um item é um Ad
 */
export function isAd(item: unknown): item is Ad {
  return (
    typeof item === "object" &&
    item !== null &&
    "brand" in item &&
    "badgeText" in item
  );
}
