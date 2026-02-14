"use client";

import { Text, CardAds, Button, GenreCard } from "@/components/ui";
import { ads } from "@/data/ads";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";
import { Carousel } from "../../../../../../components/ui/Carousel/Carousel";
import { exclusive } from "@/data/exclusive-content";
import { useInsertAdsAtPositions } from "@/hooks/useInsertAdsAtPositions";

export function ExclusiveSection() {
  // Mostra o primeiro anúncio (Nike) após 3 shows
  const exclusiveItems = useInsertAdsAtPositions(exclusive, [
    { ad: ads[0], position: 2 },
    { ad: ads[2], position: 3 },
    { ad: ads[1], position: 3 },
  ]);

  return (
    <section className="space-y-4">
      <Text variant="title">Exclusive Content</Text>
      <div className="flex-1 overflow-hidden -mr-14 ">
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
      </div>
    </section>
  );
}
