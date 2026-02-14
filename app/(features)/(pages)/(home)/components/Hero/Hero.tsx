"use client";

import { useRef, useEffect, useState } from "react";
import { Video } from "lucide-react";

import { Text, Button, Icon } from "@/components/ui";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Garantir que o vídeo está pronto antes de dar play
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Autoplay bloqueado:", error);
      });
    };

    // Se o vídeo já estiver pronto, dá play imediatamente
    if (video.readyState >= 3) {
      playVideo();
    } else {
      // Caso contrário, espera carregar
      video.addEventListener("canplay", playVideo, { once: true });
    }

    // Cleanup
    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const togglePiP = async () => {
    if (videoRef.current) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      } catch (error) {
        console.log("PiP error:", error);
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => console.error("Erro no vídeo:", e)}
        onStalled={() => console.warn("Vídeo travado (stalled)")}
        onWaiting={() => console.warn("Vídeo aguardando buffer")}
      >
        <source src="/banner-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #1E1E22 0%, rgba(0, 0, 0, 0) 17%, rgba(0, 0, 0, 0) 80%, #1E1E22 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between">
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
              onClick={togglePiP}
              className="text-white/80 transition-colors hover:text-white"
              aria-label="Picture in Picture"
            >
              <Icon name="select-cam" size={48} />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white/80 transition-colors hover:text-white"
              aria-label="Fullscreen"
            >
              <Icon name="fullscreen" size={48} />
            </button>

            {/* Volume */}
            <button
              onClick={toggleMute}
              className="text-white/80 transition-colors hover:text-white"
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
              className="text-white/80 transition-colors hover:text-white"
              aria-label="Settings"
            >
              <Icon name="settings" size={48} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
