"use client";

import { Text, CardAds, Button, GenreCard, Carousel } from "@/components/ui";

import { ads } from "@/data/ads";
import { useInterleaveAds } from "@/hooks/useInterleaveAds";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";
import type { SanityGenre } from "@/lib/sanity/types";

interface GenreProps {
  title: string;
  description: string;
  genres: SanityGenre[];
}

export function Genre({ title, description, genres }: GenreProps) {
  const genreItens = useInterleaveAds(genres, ads[2], 2);

  return (
    <section className="relative">
      {/* Layout Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex items-center justify-between">
          <Text variant="subtitle" as="h2">
            {title}
          </Text>
          <Button variant="filled" size="md" shape="rounded">
            See All
          </Button>
        </div>
        <Text variant="nano" className="text-white/80 text-xs">
          {description}
        </Text>
          <Carousel>
            {genreItens.map((item) => {
              if (isAd(item)) {
                return (
                  <CardAds
                    key={`ad-${item.id}`}
                    image={item.image}
                    alt={item.alt}
                    badgeText={item.badgeText}
                    badgeIcon={getBadgeIcon(item.badgeIcon)}
                    buttonText={item.buttonText}
                    buttonClassName={item.buttonClassName}
                    buttonIcon={getButtonIcon(item.buttonIcon)}
                    logo={item.logo}
                  />
                );
              }
              return (
                <GenreCard
                  key={`ad-${item.id}`}
                  title={item.name}
                  subtitle={item.subtitle}
                  gradient={item.gradient}
                  showLandmark={item.wasPlayed}
                />
              );
            })}
          </Carousel>
      </div>

      {/* Layout Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <div className="relative z-10 flex shrink-0 flex-col justify-center gap-4 bg-background pr-8 h-52">
          <Text variant="subtitle" as="h2">
            {title}
          </Text>
          <Text
            variant="paragraph"
            className="max-w-xs text-white/80 w-44.5 text-sm"
          >
            {description}
          </Text>
          <div>
            <Button variant="filled" size="md" shape="rounded">
              See All
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Carousel>
            {genreItens.map((item) => {
              if (isAd(item)) {
                return (
                  <CardAds
                    key={`ad-${item.id}`}
                    image={item.image}
                    alt={item.alt}
                    badgeText={item.badgeText}
                    badgeIcon={getBadgeIcon(item.badgeIcon)}
                    buttonText={item.buttonText}
                    buttonClassName={item.buttonClassName}
                    buttonIcon={getButtonIcon(item.buttonIcon)}
                    logo={item.logo}
                  />
                );
              }
              return (
                <GenreCard
                  key={`ad-${item.id}`}
                  title={item.name}
                  subtitle={item.subtitle}
                  gradient={item.gradient}
                  showLandmark={item.wasPlayed}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
