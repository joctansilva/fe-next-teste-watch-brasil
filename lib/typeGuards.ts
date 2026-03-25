import type { Ad } from "@/data/ads";

/**
 * Type guard to check if an item is an Ad
 */
export function isAd(item: unknown): item is Ad {
  return (
    typeof item === "object" &&
    item !== null &&
    "brand" in item &&
    "badgeText" in item
  );
}
