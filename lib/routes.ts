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

  { section: "Projects", items: [
    { title: "Create / Delete a Project", href: "/projects/create_delete" },
  ]},

  { section: "Workspace", items: [
    { title: "Create / Delete Workspace", href: "/workspace/create_delete" },
    { title: "Drafts", href: "/workspace/drafts" },
    // { title: "AOI", href: "/workspace/aois" },
  ]},

  { section: "AOI", items: [
    { title: "Create / Delete aoi's", href: "/aoi/create_delete" },
    { title: "Edit", href: "/aoi/edit" },
  ]},

  { section: "Models", items: [
    { title: "Create / Delete a Model", href: "/models/create_delete" },
    { title: "Model Annotation", href: "/models/annotation" },
    { title: "Model Datasets", href: "/models/datasets" },
    { title: "Model Training", href: "/models/tranining" },
  ]},

  { section: "Datasets", items: [
    { title: "Raster", href: "/datasets/raster" },
    { title: "Vector", href: "/datasets/vector" },
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
    { title: "Cost Analysis", href: "/map_dashboard/costanalysis" },
    { title: "Crisp Tool", href: "/map_dashboard/crisp" },
    { title: "Change Detection", href: "/map_dashboard/changedetection" },
  ]},

  { section: "Other", items: [
    { title: "Other", href: "/other" },
  ]},
];
