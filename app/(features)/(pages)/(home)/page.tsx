import { CtaBanner } from "@/components/ui";
import {
  getWatchAgainShows,
  getRockShows,
  getAllShows,
  getYesterdayShows,
} from "@/data/shows";
import { Hero, LiveSection, ShowSection } from "./components";
import { Genre } from "./components/GenreSection/GenreSection";
import { banners } from "@/data/banners";
import { ExclusiveSection } from "./components/ExclusiveSection/ExclusiveSection";
import { ads } from "@/data/ads";

export default function Home() {
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
