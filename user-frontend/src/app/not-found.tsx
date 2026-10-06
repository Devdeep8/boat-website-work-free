import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-brand-secondary pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-brand-muted bg-white shadow-brand-soft">
            <div className="grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-sm font-medium text-brand-accent">
                  404 • Page not found
                </div>

                <h1 className="font-poppins text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  We lost the route.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  The page you are looking for may have moved, been removed, or never existed.
                  Let&apos;s get you back to the best boat experiences in Mumbai, Alibaug, and Elephanta.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent-hover"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-accent hover:text-brand-accent"
                  >
                    Contact our team
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-2xl font-bold text-brand-accent">3+</div>
                    <div className="mt-1 text-sm text-slate-600">Destinations</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-2xl font-bold text-brand-accent">24/7</div>
                    <div className="mt-1 text-sm text-slate-600">Booking support</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-2xl font-bold text-brand-accent">100%</div>
                    <div className="mt-1 text-sm text-slate-600">Memorable trips</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-brand-accent/15 via-brand-accent/5 to-transparent blur-2xl" />
                <div className="rounded-[28px] border border-brand-accent/15 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-brand-light">Lost at sea</p>
                      <p className="mt-2 text-5xl font-bold">404</p>
                    </div>
                    <div className="rounded-full bg-white/10 p-3 text-3xl">⚓</div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>Current route</span>
                      <span className="font-semibold text-white">Unavailable</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>Best next step</span>
                      <span className="font-semibold text-white">Go back home</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>Call support</span>
                      <span className="font-semibold text-white">+91 87791 63152</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
