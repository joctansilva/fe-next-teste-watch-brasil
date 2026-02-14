import { Card, CtaBanner, LiveCard, Text } from "@/components/ui";
import { getWatchAgainShows, getRockShows } from "@/data/shows";
import { Carousel, Hero, LineUp, LiveSection } from "./components";

import { Genre } from "./components/GenreSection/GenreSection";
import { banners } from "@/data/banners";
import { ExclusiveSection } from "./components/ExclusiveSection/ExclusiveSection";

export default function Home() {
  const watched = getWatchAgainShows();
  const rock = getRockShows();
  return (
    <>
      {/* Hero Banner */}
      <Hero />

      {/* Conteúdo da página */}
      <div className="min-h-screen bg-background p-14">
        <div className="mx-auto max-w-[1920px] space-y-12">
          <LineUp />
          <Genre />
          <CtaBanner autoPlay slides={banners[0].slides} />
          <LiveSection />
          <LineUp />
          <ExclusiveSection />
          <section className="space-y-4">
            <Text variant="title">Rock Singers</Text>
            <Carousel>
              {rock.map((rock) => (
                <Card
                  key={rock.id}
                  image={rock.imgUrl}
                  footerText={rock.nome}
                  alt={rock.nome}
                />
              ))}
            </Carousel>
          </section>
          <CtaBanner autoPlay slides={banners[1].slides} />

          <section className="space-y-4">
            <Text variant="title">Watch Again</Text>
            <Carousel>
              {watched.map((watch) => (
                <Card
                  key={watch.id}
                  image={watch.imgUrl}
                  footerText={watch.nome}
                  alt={watch.nome}
                  showLandmark={watch.wasPlayed}
                  showWatchAgainLabel={watch.wasPlayed}
                />
              ))}
            </Carousel>
          </section>
        </div>
      </div>
    </>
  );
}
