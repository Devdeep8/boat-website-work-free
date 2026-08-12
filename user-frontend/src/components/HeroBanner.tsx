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

// Free yacht/boat images from Unsplash
const DEFAULT_BANNERS = [
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&h=1080&fit=crop',
    alt: 'Luxury yacht on ocean'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop',
    alt: 'Speed boat on water'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop',
    alt: 'Sailing yacht at sunset'
  }
];

export default function HeroBanner({ media = [], autoplay = true, interval = 5000 }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use provided media or default banners
  const banners = media.length > 0 ? media : DEFAULT_BANNERS;

  useEffect(() => {
    if (!autoplay || banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, banners.length]);

  const currentMedia = banners[currentIndex];

  return (
    <div className="absolute inset-0">
      {/* Banner Image */}
      <Image
        src={currentMedia.src}
        alt={currentMedia.alt || 'Hero banner'}
        fill
        priority
        className="object-cover"
        onLoadingComplete={() => setIsLoaded(true)}
      />

      {/* A subtle neutral overlay keeps foreground copy legible without tinting the photo. */}
      <div
        className="absolute inset-0 z-10 bg-black/45"
        aria-hidden="true"
      />

      {/* Navigation dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#59b280] w-8' : 'bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
