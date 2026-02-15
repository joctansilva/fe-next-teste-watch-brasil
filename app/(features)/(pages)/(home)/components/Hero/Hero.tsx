"use client";

import { useHero } from "../../hooks/useHero";
import { HeroInfo } from "./HeroInfo";
import { HeroControls } from "./HeroControls";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  const { containerRef, isMuted, toggleMute, toggleFullscreen, togglePlay } =
    useHero();

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#1E1E22]"
    >
      <VideoPlayer togglePlay={togglePlay} />

      <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
        <HeroInfo />
        <HeroControls
          toggleFullscreen={toggleFullscreen}
          toggleMute={toggleMute}
          isMuted={isMuted}
        />
      </div>
    </section>
  );
}
