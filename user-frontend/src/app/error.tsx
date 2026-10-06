"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-20">
      <div className="w-full max-w-xl rounded-[30px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
          System alert
        </div>

        <h1 className="font-poppins text-4xl font-bold tracking-tight sm:text-5xl">
          Something went wrong.
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-300">
          We hit a technical issue while preparing your boat charter experience. Please try again or head back to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent-hover"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-light"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
