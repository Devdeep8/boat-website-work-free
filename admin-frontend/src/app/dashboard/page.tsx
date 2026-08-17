"use client";

// src/app/dashboard/page.tsx
// Placeholder dashboard shell — proves the login flow end to end.
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconAnchor, IconLogout } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authStore, useAuthStore } from "@/store/auth.store";

export default function DashboardPage() {
  const router = useRouter();
  const { hydrated, authenticated, admin } = useAuthStore();

  useEffect(() => {
    if (hydrated && !authenticated) {
      router.replace("/login");
    }
  }, [hydrated, authenticated, router]);

  const handleLogout = async () => {
    await authStore.logout();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/95 px-6 backdrop-blur">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <IconAnchor className="size-4" />
          </span>
          <span className="font-heading font-semibold">Boat Booking Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {admin ? `${admin.name} · ${admin.role}` : "..."}
          </span>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <IconLogout />
            Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">
        <h1 className="font-heading text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Signed in{admin ? ` as ${admin.email}` : ""} — full dashboard coming next.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Packages</CardTitle>
              <CardDescription>Manage tour packages</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">—</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bookings</CardTitle>
              <CardDescription>Upcoming trips</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">—</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blogs</CardTitle>
              <CardDescription>Published posts</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">—</CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
