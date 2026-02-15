import { Text } from "@/components/ui";

interface HeroInfoProps {
  artistName?: string;
  isLive?: boolean;
  stageName?: string;
  cameraType?: string;
}

export function HeroInfo({
  artistName = "Avril Lavigne",
  isLive = true,
  stageName = "Sunset",
  cameraType = "Singer Camera",
}: HeroInfoProps) {
  return (
    <div className="pointer-events-auto">
      {/* Top Left - Artist Info */}
      <div className="flex flex-col gap-2 px-4 py-4 md:px-16 md:py-14">
        <Text
          variant="hero"
          as="h1"
          className="text-white text-3xl md:text-6xl lg:text-7xl"
        >
          {artistName}
        </Text>
        <div className="flex items-center gap-1.5 md:gap-3 text-white flex-wrap">
          {/* Live Badge */}
          {isLive && (
            <div className="flex items-center gap-1.5">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </div>
              <Text
                variant="small"
                className="font-semibold uppercase text-xs md:text-sm"
              >
                LIVE
              </Text>
            </div>
          )}
          <span className="text-white/60 hidden sm:inline">•</span>
          <Text variant="small" className="text-white/80 text-xs md:text-sm">
            {stageName}
          </Text>
          <span className="text-white/60 hidden sm:inline">•</span>
          <Text variant="small" className="text-white/80 text-xs md:text-sm">
            {cameraType}
          </Text>
        </div>
      </div>
    </div>
  );
}
