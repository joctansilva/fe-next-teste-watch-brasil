import { Video } from "lucide-react";
import { Button, Icon } from "@/components/ui";

interface HeroControlsProps {
  toggleFullscreen: () => void;
  toggleMute: () => void;
  isMuted: boolean;
}

export function HeroControls({
  toggleFullscreen,
  toggleMute,
  isMuted,
}: HeroControlsProps) {
  return (
    <div className="pointer-events-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 mb-16 md:px-9 md:py-8 md:mb-24">
        <Button
          variant="filled"
          icon={<Video className="h-4 w-4 md:h-5 md:w-5" />}
          onClick={() => console.log("Choose camera")}
          className="w-full md:w-auto text-sm md:text-base py-2 md:py-2"
        >
          Choose your camera
        </Button>

        <div className="flex items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
          <button
            onClick={() => console.log("Picture in Picture")}
            className="text-white/80 transition-colors hover:text-white"
            aria-label="Picture in Picture"
          >
            <Icon name="select-cam" size={48} className="md:w-12 md:h-12" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="text-white/80 transition-colors hover:text-white cursor-pointer"
            aria-label="Fullscreen"
          >
            <Icon name="fullscreen" size={48} className="md:w-12 md:h-12" />
          </button>

          <button
            onClick={toggleMute}
            className="text-white/80 transition-colors hover:text-white cursor-pointer"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <Icon name="volume-up" size={48} className="md:w-12 md:h-12" />
          </button>

          <button
            onClick={() => console.log("Settings")}
            className="text-white/80 transition-colors hover:text-white"
            aria-label="Settings"
          >
            <Icon name="settings" size={48} className="md:w-12 md:h-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
