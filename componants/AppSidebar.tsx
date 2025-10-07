"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { routes } from "@/lib/routes"; // [{ section: "Getting Started", items: [{ title, href, icon? }] }]

export default function DocsSidebar() {
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const pathname = usePathname();

  // Toggle collapse/expand groups
  const toggleGroup = (section: string) => {
    setOpenGroups((prev) =>
      prev.includes(section) ? prev.filter((g) => g !== section) : [...prev, section]
    );
  };

  // Active link styling
  const linkClasses = (href: string) =>
    `flex items-center gap-2 px-3 py-1.5 rounded-md transition relative text-sm ${pathname === href
      ? "bg-blue-50 text-blue-700 font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
    }`;

  return (
    <Sidebar className="w-64 h-screen border-r bg-white dark:bg-gray-900 flex flex-col">
      {/* Logo/Header */}
      <SidebarHeader className="px-4 py-4 border-b dark:border-gray-800 flex items-center gap-2">
        <span className="font-semibold text-lg dark:text-white">Documentation</span>
      </SidebarHeader>

      {/* Scrollable content */}
      <SidebarContent className="flex-1 overflow-y-auto px-2 py-3">
        {routes.map((group) => {
          const isOpen = openGroups.includes(group.section);
          return (
            <SidebarGroup key={group.section} className="mb-2">
              <SidebarGroupLabel
                onClick={() => toggleGroup(group.section)}
                className="flex justify-between items-center px-3 py-2 text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {group.section}
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </SidebarGroupLabel>

              {isOpen && (
                <SidebarGroupContent className="ml-2 border-l border-gray-200 dark:border-gray-700">
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild>
                          <Link href={item.href} className={linkClasses(item.href)}>
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      {/* Sticky Footer */}
      <div className="flex-shrink-0 px-4 py-3 border-t text-xs text-gray-500 dark:text-gray-400 bg-background">
        Powered by <span className="font-medium text-gray-700 dark:text-gray-200">GisKernel Technologies</span>
      </div>
    </Sidebar>
  );
}
