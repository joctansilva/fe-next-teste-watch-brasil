"use client";

import { useHero } from "../../hooks/useHero";
import { HeroInfo } from "./HeroInfo";
import { HeroControls } from "./HeroControls";
import { VideoPlayer } from "./VideoPlayer";

interface HeroProps {
  artistName?: string;
  isLive?: boolean;
  stageName?: string;
  cameraType?: string;
}

export function Hero({ artistName, isLive, stageName, cameraType }: HeroProps) {
  const { containerRef, isMuted, toggleMute, toggleFullscreen, togglePlay } =
    useHero();

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#1E1E22]"
    >
      <VideoPlayer togglePlay={togglePlay} />

      <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
        <HeroInfo
          artistName={artistName}
          isLive={isLive}
          stageName={stageName}
          cameraType={cameraType}
        />
        <HeroControls
          toggleFullscreen={toggleFullscreen}
          toggleMute={toggleMute}
          isMuted={isMuted}
        />
      </div>
    </section>
  );
}
