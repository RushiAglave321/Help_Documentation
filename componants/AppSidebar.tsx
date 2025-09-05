"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";
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
        {/* Drafts */}
        <SidebarGroup>
          <SidebarGroupLabel>Drafts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/drafts/check" className={linkClasses("/drafts/check")}>
                    Check Drafts
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Create a Project", href: "/projects/create" },
                { title: "Rename a Project", href: "/projects/rename" },
                { title: "Delete a Project", href: "/projects/delete" },
              ].map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className={linkClasses(item.href)}>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Collapsible Team Section */}
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
                    <li>
                      <Link href="/team/invite" className={linkClasses("/team/invite")}>
                        Invite a Team Member
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/rbac" className={linkClasses("/team/rbac")}>
                        Role-Based Access Control
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/change-role" className={linkClasses("/team/change-role")}>
                        Change Role
                      </Link>
                    </li>
                    <li>
                      <Link href="/team/remove" className={linkClasses("/team/remove")}>
                        Remove Member
                      </Link>
                    </li>
                  </ul>
                )}
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/sso" className={linkClasses("/sso")}>
                    Single Sign On (SSO)
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* AOIs */}
        <SidebarGroup>
          <SidebarGroupLabel>AOIs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Create a AOI", href: "/aois/create" },
                { title: "Rename a AOI", href: "/aois/rename" },
                { title: "Delete a AOI", href: "/aois/delete" },
              ].map((item) => (
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
        </SidebarGroup>

        {/* Models */}
        <SidebarGroup>
          <SidebarGroupLabel>Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Create a Model", href: "/models/create" },
                { title: "Rename a Model", href: "/models/rename" },
                { title: "Delete a Model", href: "/models/delete" },
              ].map((item) => (
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
        </SidebarGroup>

        {/* Datasets */}
        <SidebarGroup>
          <SidebarGroupLabel>Datasets</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Create a Dataset", href: "/datasets/create" },
                { title: "Rename a Dataset", href: "/datasets/rename" },
                { title: "Delete a Dataset", href: "/datasets/delete" },
              ].map((item) => (
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
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
