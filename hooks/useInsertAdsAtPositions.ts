import { useMemo } from "react";
import type { Ad } from "@/data/ads";

export interface AdPosition {
  ad: Ad;
  position: number; // Posição onde inserir (após X items)
}

/**
 * Hook para inserir múltiplos anúncios em posições específicas
 *
 * @param items - Array de items (shows, produtos, etc)
 * @param adPositions - Array de objetos { ad, position }
 * @returns Array mesclado com items e ads nas posições especificadas
 *
 * @example
 * const merged = useInsertAdsAtPositions(shows, [
 *   { ad: ads[0], position: 2 },  // Insere ads[0] após 2 items
 *   { ad: ads[1], position: 5 },  // Insere ads[1] após 5 items
 *   { ad: ads[2], position: 8 },  // Insere ads[2] após 8 items
 * ]);
 */
export function useInsertAdsAtPositions<T>(
  items: T[],
  adPositions: AdPosition[]
): Array<T | Ad> {
  return useMemo(() => {
    if (!adPositions || adPositions.length === 0) return items;

    const result: Array<T | Ad> = [...items];

    // Ordena por posição decrescente para inserir do final para o início
    // Isso evita que as posições mudem após cada inserção
    const sortedPositions = [...adPositions].sort((a, b) => b.position - a.position);

    sortedPositions.forEach(({ ad, position }) => {
      if (position >= 0 && position <= result.length) {
        result.splice(position, 0, ad);
      }
    });

    return result;
  }, [items, adPositions]);
}
