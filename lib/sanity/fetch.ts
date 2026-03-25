import { sanityClient } from "./client";
import type { QueryParams } from "@sanity/client";

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T> {
  return sanityClient.fetch<T>(query, params ?? {}, {
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });
}
