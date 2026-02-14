"use client";

import { Text, Card, CardAds } from "@/components/ui";
import { Carousel } from "../../../../../../components/ui/Carousel/Carousel";
import { useInterleaveAds } from "@/hooks/useInterleaveAds";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";
import type { Show } from "@/types/show";
import type { Ad } from "@/data/ads";

export interface ShowSectionProps {
  title: string;
  shows: Show[];
  ad?: Ad | null;
  adPosition?: number;
}

export function ShowSection({
  title,
  shows,
  ad = null,
  adPosition = 3,
}: ShowSectionProps) {
  const items = useInterleaveAds(shows, ad, adPosition);

  return (
    <section className="space-y-4">
      <Text variant="title">{title}</Text>
      <Carousel>
        {items.map((item) => {
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
            <Card
              key={`show-${item.id}`}
              image={item.imgUrl}
              footerText={item.nome}
              alt={item.nome}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
