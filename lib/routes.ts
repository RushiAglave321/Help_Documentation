// src/lib/routes.ts

export interface RouteItem {
  title: string;
  href: string;
}

export interface RouteGroup {
  section: string;
  items: RouteItem[];
}

export const routes: RouteGroup[] = [
  { section: "Introduction", items: [
    { title: "Introduction", href: "/introduction/introduction" },
  ]},

  { section: "Drafts", items: [
    { title: "Check Drafts", href: "/drafts/check" },
  ]},

  { section: "Projects", items: [
    { title: "Create a Project", href: "/projects/create" },
    { title: "Rename a Project", href: "/projects/rename" },
    { title: "Delete a Project", href: "/projects/delete" },
  ]},

//   { section: "Team Members", items: [
//     { title: "Invite a Team Member", href: "/team/invite" },
//     { title: "Role-Based Access Control", href: "/team/rbac" },
//     { title: "Change Role", href: "/team/change-role" },
//     { title: "Remove Member", href: "/team/remove" },
//   ]},

  { section: "AOIs", items: [
    { title: "Create a AOI", href: "/aois/create" },
    { title: "Rename a AOI", href: "/aois/rename" },
    { title: "Delete a AOI", href: "/aois/delete" },
  ]},

  { section: "Models", items: [
    { title: "Create a Model", href: "/models/create" },
    { title: "Rename a Model", href: "/models/rename" },
    { title: "Delete a Model", href: "/models/delete" },
  ]},

  { section: "Datasets", items: [
    { title: "Create a Dataset", href: "/datasets/create" },
    { title: "Rename a Dataset", href: "/datasets/rename" },
    { title: "Delete a Dataset", href: "/datasets/delete" },
  ]},

  { section: "Other", items: [
    { title: "Other", href: "/other" },
  ]},
];
