"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, RocketIcon, UsersIcon, CodeIcon, GridIcon  } from "lucide-react";

const cards = [
  {
    icon: <CodeIcon className="w-8 h-8 text-purple-600" />,
    title: "Projects",
    description: "Learn about the Project Creation and usage.",
    href: "/projects/create_delete", 
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-purple-600" />,
    title: "Workspaces",
    description: "Create, Remove, and Manage workspaces.",
    href: "/workspace/create_delete",
  },
  {
    icon: <RocketIcon className="w-8 h-8 text-purple-600" />,
    title: "Models",
    description: "Train state of the art models with a few clicks.",
    href: "/models/create_delete",
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-purple-600" />,
    title: "Map Dashboard",
    description: "Upload, manage, annotate, and analyze images.",
    href: "/map_dashboard/componants",
  }
];

export default function FeatureCards() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Getting Started
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {cards.map((card, idx) => (
          <Card key={idx} className="shadow-md hover:shadow-lg transition">
            <CardContent className="flex flex-col items-start space-y-4 p-6">
              <div className="bg-purple-50 p-4 rounded-md">{card.icon}</div>
              
              {/* Title as Link */}
              <Link
                href={card.href}
                className="text-lg font-semibold text-gray-900 dark:text-white hover:underline"
              >
                {card.title}
              </Link>

              <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
