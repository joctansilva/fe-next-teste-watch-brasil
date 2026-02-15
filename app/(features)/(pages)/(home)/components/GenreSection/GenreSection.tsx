import { Text, CardAds, Button, GenreCard, Carousel } from "@/components/ui";

import { ads } from "@/data/ads";
import { genres } from "@/data/genres";
import { useInterleaveAds } from "@/hooks/useInterleaveAds";
import { isAd } from "@/lib/typeGuards";
import { getBadgeIcon, getButtonIcon } from "@/lib/getAdIcon";

export function Genre() {
  // Mostra o primeiro anúncio (Nike) após 3 shows
  const genreItens = useInterleaveAds(genres, ads[2], 2);

  return (
    <section className="relative">
      {/* Layout Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex items-center justify-between">
          <Text variant="subtitle" as="h2">
            Festival for you
          </Text>
          <Button variant="filled" size="md" shape="rounded">
            See All
          </Button>
        </div>
        <Text variant="nano" className="text-white/80 text-xs">
          Explore your favorite genres and discover new rhythms to love!
        </Text>
        <div className="overflow-hidden -mr-6">
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

      {/* Layout Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {/* Coluna Esquerda - Informações */}
        <div className="relative z-10 flex shrink-0 flex-col justify-center gap-4 bg-background pr-8 h-52">
          <Text variant="subtitle" as="h2">
            Festival for you
          </Text>
          <Text
            variant="paragraph"
            className="max-w-xs text-white/80 w-44.5 text-sm"
          >
            Explore your favorite genres and discover new rhythms to love!
          </Text>
          <div>
            <Button variant="filled" size="md" shape="rounded">
              See All
            </Button>
          </div>
        </div>

        {/* Coluna Direita - Carrossel */}
        <div className="flex-1 overflow-hidden -mr-14">
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
