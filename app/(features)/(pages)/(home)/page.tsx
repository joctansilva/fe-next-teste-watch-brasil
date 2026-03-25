import { sanityFetch } from "@/lib/sanity/fetch";
import {
  showsQuery,
  genresQuery,
  inLiveQuery,
  exclusiveQuery,
  homePageQuery,
} from "@/lib/sanity/queries";
import type {
  SanityShow,
  SanityGenre,
  SanityInLiveShow,
  SanityExclusiveContent,
  SanityHomePage,
} from "@/lib/sanity/types";
import HomePage from "./components/HomePage/HomePage";

export default async function Home() {
  const [shows, genres, liveShows, exclusiveContent, homePage] =
    await Promise.all([
      sanityFetch<SanityShow[]>(showsQuery),
      sanityFetch<SanityGenre[]>(genresQuery),
      sanityFetch<SanityInLiveShow[]>(inLiveQuery),
      sanityFetch<SanityExclusiveContent[]>(exclusiveQuery),
      sanityFetch<SanityHomePage | null>(homePageQuery),
    ]);

  return (
    <HomePage
      shows={shows}
      genres={genres}
      liveShows={liveShows}
      exclusiveContent={exclusiveContent}
      homePage={homePage}
    />
  );
}
