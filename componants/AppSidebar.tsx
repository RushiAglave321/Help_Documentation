"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { routes } from "@/lib/routes";

export default function AppSidebar() {
  const [teamOpen, setTeamOpen] = useState(false);
  const pathname = usePathname();

  // Active link styling
  const linkClasses = (href: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
      pathname === href
        ? "bg-blue-100 text-blue-700 font-medium"
        : "hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <Sidebar className="mt-10">
      <SidebarHeader />

      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.section}>
            <SidebarGroupLabel>{group.section}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.section === "Team Members" ? (
                  // Special handling for collapsible team
                  <SidebarMenuItem>
                    <button
                      onClick={() => setTeamOpen(!teamOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
                    >
                      <span className="flex items-center gap-2">
                        <Users size={16} /> Team Members
                      </span>
                      {teamOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {teamOpen && (
                      <ul className="ml-4 mt-2 space-y-1 text-gray-600">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className={linkClasses(item.href)}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </SidebarMenuItem>
                ) : (
                  group.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href} className={linkClasses(item.href)}>
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
