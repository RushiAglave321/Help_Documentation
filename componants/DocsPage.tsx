"use client";

import Feedback from "./Feedback";

interface DescriptionSection {
  descriptionTitle: string;
}

interface ContentItem {
  title: string;
  subtitle?: string;
  description: string[];
  descriptionSections: DescriptionSection[];
}

interface DocsPageProps {
  data: ContentItem;
}

export default function DocsPage({ data }: DocsPageProps) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">On this page</h3>
      <ul className="space-y-2">
        {data?.descriptionSections?.map((section, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleScroll(`section-${idx}`)}
              className="text-sm text-blue-600 hover:underline"
            >
              {section.descriptionTitle}
            </button>
          </li>
        ))}
      </ul>
      <Feedback/>
    </div>
  );
}
