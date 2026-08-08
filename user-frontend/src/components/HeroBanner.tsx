"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroBannerProps {
  media?: {
    type: 'image' | 'video' | 'gif';
    src: string;
    alt?: string;
  }[];
  autoplay?: boolean;
  interval?: number;
}

export default function HeroBanner({ media = [], autoplay = true, interval = 5000 }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!autoplay || media.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, media.length]);

  if (!media || media.length === 0) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628]">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `,
              backgroundSize: "200% 200%",
            }}
          />
        </div>
      </div>
    );
  }

  const currentMedia = media[currentIndex];

  return (
    <div className="absolute inset-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628]" />
      )}

      {currentMedia.type === 'video' ? (
        <video
          src={currentMedia.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <Image
          src={currentMedia.src}
          alt={currentMedia.alt || 'Hero banner'}
          fill
          priority
          className="object-cover"
          onLoadingComplete={() => setIsLoaded(true)}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90" />

      {/* Navigation dots */}
      {media.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#d4a574] w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
