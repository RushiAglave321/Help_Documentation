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
      <NavigationMenu className="w-full bg-background px-6 py-3 flex items-center justify-between">
        {/* Left side: Brand + Nav */}
        <div className="flex items-center gap-6">
          {/* Brand */}
          <span className="text-xl font-bold text-[#36a06f]">
            SpatioSynth Docs
          </span>

          {/* Navigation Menu Items */}
          <NavigationMenuList className="flex items-center gap-2">
            {/* Product Docs Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Product Documentation
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/docs/intro" title="Introduction">
                    Overview of features and usage.
                  </ListItem>
                  <ListItem href="/docs/getting-started" title="Getting Started">
                    How to install and set up the project.
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

            {/* Developer Reference */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Developer</NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <ul className="grid w-[300px] gap-2 p-4">
                  <ListItem href="/dev/auth" title="Authentication">
                    Learn how to set up secure login and sessions.
                  </ListItem>
                  <ListItem href="/dev/components" title="Components">
                    Browse reusable UI components.
                  </ListItem>
                  <ListItem href="/dev/integrations" title="Integrations">
                    Connect with third-party services.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* Status with Icons */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Status</NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <ul className="grid w-[200px] gap-4 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleHelpIcon size={16} /> Backlog
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleIcon size={16} /> To Do
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex items-center gap-2">
                        <CircleCheckIcon size={16} /> Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* Docs Link */}
            {/* <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </div>

        {/* Right side: Search + Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center bg-muted px-2 py-1 rounded">
            <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Actions */}
          <button className="px-4 py-1 bg-background text-foreground border rounded-md text-sm hover:bg-[#36a06f] hover:text-white">
            Book a Demo
          </button>
          <button className="px-4 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-[#36a06f]">
            Get Started
          </button>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </NavigationMenu>
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
