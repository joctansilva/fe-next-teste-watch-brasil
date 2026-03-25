"use client";

import { Text, CardAds, GenreCard, Carousel } from "@/components/ui";

import { ads } from "@/data/ads";
import { useInsertAdsAtPositions } from "@/hooks/useInsertAdsAtPositions";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";
import type { SanityExclusiveContent } from "@/lib/sanity/types";

interface ExclusiveSectionProps {
  title: string;
  content: SanityExclusiveContent[];
}

export function ExclusiveSection({ title, content }: ExclusiveSectionProps) {
  const exclusiveItems = useInsertAdsAtPositions(content, [
    { ad: ads[0], position: 2 },
    { ad: ads[2], position: 3 },
    { ad: ads[1], position: 3 },
  ]);

  return (
    <section className="space-y-4">
      <Text variant="title">{title}</Text>
      <Carousel>
        {exclusiveItems.map((item) => {
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
              showLandmark={item.showLandmark}
              backgroundImage={item.cover}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
