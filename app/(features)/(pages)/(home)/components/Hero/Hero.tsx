"use client";

import { Video } from "lucide-react";

import { Text, Button, Icon } from "@/components/ui";
import { useHero } from "../../hooks/useHero";

export function Hero() {
  const { containerRef, isMuted, toggleMute, toggleFullscreen, togglePlay } =
    useHero();

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* YouTube Video Background */}
      <div
        id="youtube-player"
        className="absolute inset-0 pointer-events-none"
        style={{
          width: "100vw",
          height: "100vh",
          transform: "scale(1.5)",
        }}
      />

      {/* Clickable overlay for play/pause */}
      <div
        onClick={togglePlay}
        className="absolute inset-0 cursor-pointer z-0"
        aria-label="Play/Pause video"
      />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #1E1E22 0%, rgba(0, 0, 0, 0) 17%, rgba(0, 0, 0, 0) 80%, #1E1E22 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
        <div className="pointer-events-auto">
          {/* Top Left - Artist Info */}
          <div className="flex flex-col gap-2 px-16 py-14">
            <Text variant="hero" as="h1" className="text-white">
              Avril Lavigne
            </Text>
            <div className="flex items-center gap-3 text-white">
              {/* Live Badge */}
              <div className="flex items-center gap-1.5">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </div>
                <Text variant="small" className="font-semibold uppercase">
                  LIVE
                </Text>
              </div>
              <span className="text-white/60">•</span>
              <Text variant="small" className="text-white/80">
                Sunset
              </Text>
              <span className="text-white/60">•</span>
              <Text variant="small" className="text-white/80">
                Singer Camera
              </Text>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto">
          {/* Bottom Controls */}
          <div className="flex items-center justify-between px-9 py-8 mb-24">
            {/* Bottom Left - Choose Camera Button */}
            <Button
              variant="filled"
              icon={<Video className="h-5 w-5" />}
              onClick={() => console.log("Choose camera")}
            >
              Chose your camera
            </Button>

            {/* Bottom Right - Player Controls */}
            <div className="flex items-center gap-6">
              {/* Picture-in-Picture */}
              <button
                onClick={() => console.log("Picture in Picture")}
                className="text-white/80 transition-colors hover:text-white "
                aria-label="Picture in Picture"
              >
                <Icon name="select-cam" size={48} />
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white/80 transition-colors hover:text-white cursor-pointer"
                aria-label="Fullscreen"
              >
                <Icon name="fullscreen" size={48} />
              </button>

              {/* Volume */}
              <button
                onClick={toggleMute}
                className="text-white/80 transition-colors hover:text-white cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <Icon name="volume-up" size={48} />
                ) : (
                  <Icon name="volume-up" size={48} />
                )}
              </button>

              {/* Settings */}
              <button
                onClick={() => console.log("Settings")}
                className="text-white/80 transition-colors hover:text-white"
                aria-label="Settings"
              >
                <Icon name="settings" size={48} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
