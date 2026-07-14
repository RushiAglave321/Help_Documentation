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
  ]},

  { section: "AOI", items: [
    { title: "Create / Delete aoi's", href: "/aoi/create_delete" },
  ]},

  { section: "Models", items: [
    { title: "Create / Delete a Model", href: "/models/create_delete" },
    { title: "Model Annotation", href: "/models/annotation" },
    { title: "Model Training", href: "/models/tranining" },
  ]},

  { section: "Datasets", items: [
    { title: "Raster", href: "/datasets/raster" },
    { title: "Vector", href: "/datasets/vector" },
  ]},

  { section: "Map Annotations", items: [
    { title: "Map Annotations", href: "/map_annotation/map_annotation" },
  ]},

  { section: "Map Dashboard", items: [
    { title: "Run AI Model", href: "/map_dashboard/model_running" },
    { title: "Compare Map", href: "/map_dashboard/comparemap" },
    { title: "Proximity Analysis", href: "/map_dashboard/proximity" },
    { title: "Assessment", href: "/map_dashboard/assessment" },
    { title: "Annotate Tool", href: "/map_dashboard/annotation" },
    { title: "Timeseries", href: "/map_dashboard/timeseries" },
    { title: "Layer List", href: "/map_dashboard/Layerlist" },
    { title: "Map Tools", href: "/map_dashboard/map_tools" },
  ]},

  { section: "Profile", items: [
    { title: "Profile", href: "/Profile/Profile" },
  ]},
  { section: "Other", items: [
    { title: "Other", href: "/other" },
  ]},
];
