"use client";

interface VideoPlayerProps {
  togglePlay: () => void;
}

export function VideoPlayer({ togglePlay }: VideoPlayerProps) {
  return (
    <>
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          id="youtube-player"
          className="
            absolute
            top-1/2 left-1/2
            min-w-screen
            min-h-screen
            w-[177.78vh]
            h-[56.25vw]
            -translate-x-1/2
            -translate-y-1/2
          "
        />
      </div>

      {/* Click overlay to play/pause video */}
      <div
        role="button"
        tabIndex={0}
        onClick={togglePlay}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && togglePlay()}
        className="absolute inset-0 cursor-pointer z-0"
        aria-label="Play or pause video"
      />

      {/* Video overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-linear-to-b from-[#1E1E22] via-transparent via-10% to-[#1E1E22]
                   md:via-17%] md:to-[#1E1E22]"
      />
    </>
  );
}
