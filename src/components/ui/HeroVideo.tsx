"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroVideo({ src, poster, className = "", style }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      // Ensure video plays
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
        setHasError(true);
      });
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    };

    const handleError = () => {
      console.warn("Video failed to load:", src);
      setHasError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Try to load and play the video
    video.load();

    // Attempt to play
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Video autoplay prevented:", error);
      });
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      // Pause video when component unmounts
      video.pause();
    };
  }, [src]);

  if (hasError) {
    return null; // Don't render video if it fails to load
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        objectFit: "cover",
        ...style,
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
