import { CtaBanner } from "@/components/ui";

import { ads } from "@/data/ads";
import { banners } from "@/data/banners";
import {
  getWatchAgainShows,
  getRockShows,
  getAllShows,
  getYesterdayShows,
} from "@/data/shows";
import { ExclusiveSection } from "../ExclusiveSection";
import { Genre } from "../GenreSection";
import { Hero } from "../Hero";
import { LiveSection } from "../LiveSection";
import { ShowSection } from "../ShowSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <Hero />
      {/* Conteúdo da página */}
      <div className="min-h-screen bg-background p-14">
        <div className="mx-auto max-w-480 space-y-12">
          {/* Line Up */}
          <ShowSection
            title="Line Up"
            shows={getAllShows()}
            ad={ads[1]}
            adPosition={3}
          />
          {/* Festival for you */}
          <Genre />
          {/* CTA */}
          <CtaBanner autoPlay slides={banners[0].slides} />
          {/* In Live */}
          <LiveSection />
          {/* Yesterday Shows*/}
          <ShowSection title="Yesterday Shows" shows={getYesterdayShows()} />
          {/* Exclusive*/}
          <ExclusiveSection />
          {/* Rock Singers*/}
          <ShowSection
            title="Rock Singers"
            shows={getRockShows()}
            ad={ads[1]}
            adPosition={7}
          />
          {/* CTA 2 */}
          <CtaBanner autoPlay slides={banners[1].slides} />
          {/* Watch Again */}
          <ShowSection title="Watch Again" shows={getWatchAgainShows()} />
        </div>
      </div>
    </>
  );
}
