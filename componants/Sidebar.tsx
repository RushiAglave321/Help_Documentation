"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from "@/components/ui/sidebar"


export default function Sidebar() {
  const [teamOpen, setTeamOpen] = useState(false);
  const pathname = usePathname(); // get current route

  // helper to style active links
  const linkClasses = (href: string) =>
    `block px-3 py-2 rounded-md transition ${
      pathname === href
        ? "bg-blue-100 text-blue-700 font-medium"
        : "hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <aside className="w-64 h-screen bg-gray-50 shadow-md px-4 py-6 overflow-y-auto border-r border-gray-200 bg-background">
      {/* Section Titles */}
      <h2 className="font-bold text-gray-800 mb-4 text-lg">Drafts</h2>
      {/* Menu */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/drafts/check" className={linkClasses("/drafts/check")}>
            Check Drafts
          </Link>
        </li>
      </ul>

      {/* PROJECTS */}
      <h2 className="font-bold text-gray-800 mb-4 text-lg">Projects</h2>
      {/* Menu */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/projects/create" className={linkClasses("/projects/create")}>
            Create a Project
          </Link>
        </li>
        <li>
          <Link href="/projects/rename" className={linkClasses("/projects/rename")}>
            Rename a Project
          </Link>
        </li>
        <li>
          <Link href="/projects/delete" className={linkClasses("/projects/delete")}>
            Delete a Project
          </Link>
        </li>

        {/* Collapsible Team Section */}
        <li>
          <button
            className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
            onClick={() => setTeamOpen(!teamOpen)}
          >
            <span className="flex items-center gap-2">
              <Users size={16} />
              Team Members
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
        </li>

        <li>
          <Link href="/sso" className={linkClasses("/sso")}>
            Single Sign On (SSO)
          </Link>
        </li>
      </ul>

      {/* AOI */}
      <h2 className="font-bold text-gray-800 mt-6 mb-3 text-lg">AOIs</h2>
      {/* Menu */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/aois/create" className={linkClasses("/aois/create")}>
            Create a AOI
          </Link>
        </li>
        <li>
          <Link href="/aois/rename" className={linkClasses("/aois/rename")}>
            Rename a AOI
          </Link>
        </li>
        <li>
          <Link href="/aois/delete" className={linkClasses("/aois/delete")}>
            Delete a AOI
          </Link>
        </li>

      </ul>

      {/* MODELS */}
      <h2 className="font-bold text-gray-800 mb-3 text-lg">Models</h2>
      {/* Menu */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/models/create" className={linkClasses("/models/create")}>
            Create a Model
          </Link>
        </li>
        <li>
          <Link href="/models/rename" className={linkClasses("/models/rename")}>
            Rename a Model
          </Link>
        </li>
        <li>
          <Link href="/models/delete" className={linkClasses("/models/delete")}>
            Delete a Model
          </Link>
        </li>
      </ul>

      {/* DATASETS */}
      <h2 className="font-bold text-gray-800 mb-3 text-lg">Datasets</h2>
      {/* Menu */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/datasets/create" className={linkClasses("/datasets/create")}>
            Create a Datasets
          </Link>
        </li>
        <li>
          <Link href="/datasets/rename" className={linkClasses("/datasets/rename")}>
            Rename a Datasets
          </Link>
        </li>
        <li>
          <Link href="/datasets/delete" className={linkClasses("/datasets/delete")}>
            Delete a Datasets
          </Link>
        </li>
      </ul>
    </aside>
    // <Sidebar>
    //   <SidebarHeader />
    //   <SidebarContent>
    //     <SidebarGroup />
    //     <SidebarGroup />
    //   </SidebarContent>
    //   <SidebarFooter />
    // </Sidebar>
  );
}
