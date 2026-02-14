import { Text, Card, CardAds, Carousel } from "@/components/ui";

import { shows } from "@/data/shows";
import { ads } from "@/data/ads";
import { useInterleaveAds } from "@/hooks/useInterleaveAds";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";

export function LineUp() {
  const lineupItems = useInterleaveAds(shows, ads[1], 4);

  return (
    <section className="space-y-4">
      <Text variant="title">Line Up</Text>
      <Carousel>
        {lineupItems.map((item) => {
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
