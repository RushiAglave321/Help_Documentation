"use client";

import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="w-full bg-background px-6 py-3 flex items-center justify-between">
       
        {/* Left side: Brand + Nav */}
        <div className="flex items-center gap-6">
          {/* Brand */}
          <div className="flex gap-3">
            <img src="/favicon.ico" alt="Logo" className="h-6 w-6" />
            <span className="text-xl font-bold text-[#36a06f]">
              SpatioSynth Docs
            </span>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Product Documentation
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2">
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/introduction/introduction" title="Introduction">
                      Overview of features and usage.
                    </ListItem>
                    <ListItem href="/" title="Getting Started">
                      How to get started with SpatioSynth.
                    </ListItem>
                    <ListItem href="/docs/api" title="API Reference">
                      Detailed API and configuration options.
                    </ListItem>
                    <ListItem href="/docs/changelog" title="Changelog">
                      Latest updates and release notes.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side: Search + Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center bg-muted px-2 py-1 rounded">
            <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search Doc..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Actions
          // <Link href='https://www.giskernel.com/talk-to-us/'>
          //   <button className="px-4 py-1 bg-background text-foreground border rounded-md text-sm hover:bg-[#36a06f] hover:text-white cursor-pointer">
          //     Book a Demo
          //   </button>
          // </Link> */}
          <a
            href="https://www.giskernel.com/talk-to-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-background text-foreground border rounded-md text-sm hover:bg-[#36a06f] hover:text-white cursor-pointer inline-block"
          >
            Book a Demo
          </a>

          <Link href="/">
            <button className="px-4 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-[#36a06f] cursor-pointer" >
              Get Started
            </button>
          </Link>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>

  );
}

/* Reusable List Item */
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
