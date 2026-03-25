import { Text, LiveCard, Carousel } from "@/components/ui";
import type { SanityInLiveShow } from "@/lib/sanity/types";

interface LiveSectionProps {
  title: string;
  liveShows: SanityInLiveShow[];
}

export function LiveSection({ title, liveShows }: LiveSectionProps) {
  return (
    <section className="space-y-4">
      <Text variant="title">{title}</Text>
      <Carousel aria-label="Live shows">
        {liveShows.map((show) => (
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
