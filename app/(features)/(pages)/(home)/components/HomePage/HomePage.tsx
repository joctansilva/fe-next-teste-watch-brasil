import { CtaBanner } from "@/components/ui";

import { ads } from "@/data/ads";
import { banners } from "@/data/banners";
import type {
  SanityShow,
  SanityGenre,
  SanityInLiveShow,
  SanityExclusiveContent,
  SanityHomePage,
} from "@/lib/sanity/types";
import { ExclusiveSection } from "../ExclusiveSection";
import { Genre } from "../GenreSection";
import { Hero } from "../Hero";
import { LiveSection } from "../LiveSection";
import { ShowSection } from "../ShowSection";

interface HomePageProps {
  shows: SanityShow[];
  genres: SanityGenre[];
  liveShows: SanityInLiveShow[];
  exclusiveContent: SanityExclusiveContent[];
  homePage: SanityHomePage | null;
}

// Derive sub-lists from the full shows array (mirrors the previous data helpers)
function getWatchAgainShows(shows: SanityShow[]) {
  return shows.filter((s) => s.wasPlayed);
}

function getYesterdayShows(shows: SanityShow[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return shows.filter((s) => new Date(s.startDate) < today);
}

function getRockShows(shows: SanityShow[]) {
  return shows.filter((s) => s.genre?.toLowerCase().includes("rock"));
}

export default function HomePage({
  shows,
  genres,
  liveShows,
  exclusiveContent,
  homePage,
}: HomePageProps) {
  // Section title fallbacks (used when Sanity document doesn't exist yet)
  const t = {
    lineUp: homePage?.sectionLineUp ?? "Line Up",
    inLive: homePage?.sectionInLive ?? "In Live",
    yesterdayShows: homePage?.sectionYesterdayShows ?? "Yesterday Shows",
    exclusiveContent: homePage?.sectionExclusiveContent ?? "Exclusive Content",
    rockSingers: homePage?.sectionRockSingers ?? "Rock Singers",
    watchAgain: homePage?.sectionWatchAgain ?? "Watch Again",
    festivalForYou: homePage?.sectionFestivalForYou ?? "Festival for you",
    festivalDescription:
      homePage?.sectionFestivalDescription ??
      "Explore your favorite genres and discover new rhythms to love!",
  };

  const heroProps = {
    artistName: homePage?.heroArtistName ?? "Avril Lavigne",
    isLive: homePage?.heroIsLive ?? true,
    stageName: homePage?.heroStageName ?? "Sunset",
    cameraType: homePage?.heroCameraType ?? "Singer Camera",
  };

  return (
    <>
      {/* Hero Banner */}
      <Hero {...heroProps} />

      {/* Page content */}
      <div className="min-h-screen bg-background p-6 md:p-14">
        <div className="mx-auto max-w-480 space-y-3 md:space-y-12">
          {/* Line Up */}
          <ShowSection
            title={t.lineUp}
            shows={shows}
            ad={ads[1]}
            adPosition={3}
          />

          {/* Festival for you */}
          <Genre
            genres={genres}
            title={t.festivalForYou}
            description={t.festivalDescription}
          />

          {/* CTA */}
          <CtaBanner
            autoPlay
            slides={banners[0].slides}
            className="hidden md:flex"
          />

          {/* In Live */}
          <LiveSection title={t.inLive} liveShows={liveShows} />

          {/* Yesterday Shows */}
          <ShowSection
            title={t.yesterdayShows}
            shows={getYesterdayShows(shows)}
          />

          {/* Exclusive */}
          <ExclusiveSection
            title={t.exclusiveContent}
            content={exclusiveContent}
          />

          {/* Rock Singers */}
          <ShowSection
            title={t.rockSingers}
            shows={getRockShows(shows)}
            ad={ads[1]}
            adPosition={7}
          />

          {/* CTA 2 */}
          <CtaBanner
            autoPlay
            slides={banners[1].slides}
            className="hidden md:flex"
          />

          {/* Watch Again */}
          <ShowSection
            title={t.watchAgain}
            shows={getWatchAgainShows(shows)}
            showWatchAgainLabel
            showLandmark
          />
        </div>
      </div>
    </>
  );
}
