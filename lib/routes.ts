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

  // { section: "Drafts", items: [
  //   { title: "Check Drafts", href: "/drafts/check" },
  // ]},

  { section: "Projects", items: [
    { title: "Create / Delete a Project", href: "/projects/create_delete" },
    // { title: "Rename a Project", href: "/projects/rename" },
    // { title: "Delete a Project", href: "/projects/delete" },
  ]},

//   { section: "Team Members", items: [
//     { title: "Invite a Team Member", href: "/team/invite" },
//     { title: "Role-Based Access Control", href: "/team/rbac" },
//     { title: "Change Role", href: "/team/change-role" },
//     { title: "Remove Member", href: "/team/remove" },
//   ]},

  { section: "Workspace", items: [
    { title: "Create / Delete Workspace", href: "/workspace/create_delete" },
    { title: "Drafts", href: "/workspace/drafts" },
    { title: "AOI", href: "/workspace/aois" },
  ]},

  { section: "Models", items: [
    { title: "Create / Delete a Model", href: "/models/create_delete" },
    { title: "Model Annotation", href: "/models/annotation" },
    { title: "Model Datasets", href: "/models/datasets" },
    { title: "Model Training", href: "/models/tranining" },
  ]},

  { section: "Map Dashboard", items: [
    { title: "Dashboard Componants", href: "/map_dashboard/componants" },
    { title: "Assessment", href: "/map_dashboard/assessment" },
    { title: "Annotate Tool", href: "/map_dashboard/annotation" },
    { title: "Run AI Model", href: "/map_dashboard/model_running" },
    { title: "Result Visulization", href: "/map_dashboard/result" },
    { title: "Proximity Analysis", href: "/map_dashboard/proximity" },
    { title: "Map Tools", href: "/map_dashboard/map_tools" },
    { title: "Adding Comments", href: "/map_dashboard/comments" },
  ]},

  { section: "Other", items: [
    { title: "Other", href: "/other" },
  ]},
];
