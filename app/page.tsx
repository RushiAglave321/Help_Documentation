"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, RocketIcon, UsersIcon, CodeIcon } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: <CodeIcon className="w-10 h-10 text-purple-600" />,
    title: "Introduction",
    description: "Learn about SpatioSynth.",
    href: "/introduction/introduction",
  },
  {
    icon: <CodeIcon className="w-10 h-10 text-purple-600" />,
    title: "Projects",
    description: "Learn about Project creation and usage.",
    href: "/projects/create_delete",
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-purple-600" />,
    title: "Workspaces",
    description: "Create, remove, and manage workspaces.",
    href: "/workspace/create_delete",
  },
  {
    icon: <RocketIcon className="w-10 h-10 text-purple-600" />,
    title: "Models",
    description: "Train state-of-the-art models with a few clicks.",
    href: "/models/create_delete",
  },
  {
    icon: <ImageIcon className="w-10 h-10 text-purple-600" />,
    title: "Map Dashboard",
    description: "Upload, manage, annotate, and analyze images.",
    href: "/map_dashboard/componants",
  },
];

const scrollingCards = [
  {
    img: "/HomePageCardsImages/object_detection.jpg",
    title: "Object Detection",
    description:
      "Automatically identify and track objects of interest in geospatial imagery, enhancing situational awareness and surveillance capabilities.",
  },
  {
    img: "/HomePageCardsImages/ImpactAssessments.jpg",
    title: "Impact Assessments",
    description:
      "Accurately evaluate the potential consequences of various scenarios on the environment, infrastructure, and communities.",
  },
  {
    img: "/HomePageCardsImages/RiskAssessments.jpg",
    title: "Risk Assessments",
    description:
      "Utilize sophisticated risk assessment tools to analyze spatial data, identify hazards, and inform disaster management.",
  },
  {
    img: "/HomePageCardsImages/ChangeDetection.jpg",
    title: "Change Detection",
    description:
      "Advanced capabilities for monitoring changes in spatial data, enabling proactive decision-making and resource management.",
  },
];

export default function FeatureCards() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        SpatioSynth Documentation
      </h1>

      <blockquote className="text-lg text-center italic bg-muted text-muted-foreground mb-6 p-2 rounded-md">
        "SpatioSynth is designed to simplify and accelerate post-disaster damage
        assessment. The platform leverages GeoAI to process aerial imagery and
        generate actionable insights without requiring coding expertise."
      </blockquote>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className="group shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 rounded-xl border border-border dark:border-gray-700"
          >
            <CardContent className="flex flex-col items-start space-y-4 p-6">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg group-hover:bg-purple-200 transition-colors">
                {card.icon}
              </div>
              <Link
                href={card.href}
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
              >
                {card.title}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/*  Scrolling Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Core Capabilities of SpatioSynth
        </h2>

        <div className="relative overflow-hidden group">
          <div className="flex scroll-animation space-x-8">
            {[...scrollingCards, ...scrollingCards].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-[320px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .scroll-animation {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
          animation-play-state: running;
        }
        .group:hover .scroll-animation {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* stops exactly at the halfway point */
          }
        }
      `}</style>
    </div>
  );
}
