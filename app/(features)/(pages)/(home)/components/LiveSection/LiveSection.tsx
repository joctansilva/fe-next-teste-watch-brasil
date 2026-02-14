import { Text, LiveCard, Carousel } from "@/components/ui";
import { inLiveShows } from "@/data/in-live";

export function LiveSection() {
  return (
    <section className="space-y-4">
      <Text variant="title">In Live</Text>
      <Carousel>
        {inLiveShows.map((show) => (
          <LiveCard
            key={show.id}
            image={show.image}
            artistName={show.name}
            stageName={show.stage}
            dateTime={show.dateTime}
            isLive={show.isLive}
            alt={show.name}
          />
        ))}
      </Carousel>
    </section>
  );
}
