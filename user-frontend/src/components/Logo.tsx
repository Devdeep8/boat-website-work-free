import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** "light" for the header (smaller), "dark" for the footer (larger). */
  variant?: "light" | "dark";
  /** Explicit render size in pixels; overrides the variant default. */
  size?: number;
  className?: string;
}

/**
 * Brand logo — renders the Vishal Boat Service wordmark from /public/logo/logo.png.
 * The source is a square, transparent PNG, so it works on light and dark backgrounds.
 */
export default function Logo({
  variant = "light",
  size,
  className = "",
}: LogoProps) {
  // Header nav is h-16 (64px), so the light variant stays just under it.
  const dimension = size ?? (variant === "dark" ? 150 : 150);

  return (
    <Link
      href="/"
      aria-label="Vishal Boat Service — Home"
      className={`inline-flex items-center group ${className}`}
    >
      <Image
        src="/logo/logo.png"
        alt="Vishal Boat Service"
        width={dimension}
        height={dimension}
        priority
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
