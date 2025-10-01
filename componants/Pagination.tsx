"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes, RouteItem } from "@/lib/routes";

export default function Pagination() {
  const pathname = usePathname();

  // Flatten the grouped routes into a single array
  const flatRoutes: RouteItem[] = routes.flatMap(group => group.items);

  // Find current index
  const currentIndex = flatRoutes.findIndex(r => r.href === pathname);

  const prevPage = currentIndex > 0 ? flatRoutes[currentIndex - 1] : null;
  const nextPage = currentIndex >= 0 && currentIndex < flatRoutes.length - 1
    ? flatRoutes[currentIndex + 1]
    : null;

  return (
    <div className="flex justify-between mt-10">
      {prevPage ? (
        <Link href={prevPage.href}>
          <Button variant="outline">← {prevPage.title}</Button>
        </Link>
      ) : <div />}

      {nextPage ? (
        <Link href={nextPage.href}>
          <Button>{nextPage.title} →</Button>
        </Link>
      ) : <div />}
    </div>
  );
}
