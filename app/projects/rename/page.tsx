"use client";
import DescriptiveeContent from "@/componants/DescriptiveeContent";
import DocsPage from "@/componants/DocsPage";
import { useEffect, useState } from "react";


// Types
interface DescriptionSection {
  descriptionTitle: string;
  description: string[];
  media?: { image?: string; video?: string };
}

interface ContentItem {
  title: string;
  subtitle?: string;
  description: string[];
  descriptionSections: DescriptionSection[];
}

interface ContentData {
  content: ContentItem[];
}

const Page = () => {
  const [contentData, setContentData] = useState<ContentData | null>(null);

  useEffect(() => {
    fetch("/Tutorial_Jsons/New_Data.json")
      .then((res) => res.json())
      .then((data: ContentData) => setContentData(data));
  }, []);

  if (!contentData) return <p className="text-center mt-20">Loading...</p>;

  const pageData = contentData.content[0]; // first item

  return (
    <div className="flex flex-1 gap-6">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto  max-h-screen">
        <DescriptiveeContent data={pageData} />
      </main>

      {/* Right Docs Sidebar */}
      <aside className="hidden xl:block w-80 border-l border-border bg-background p-4 overflow-y-auto scrollbar-hide">
        <DocsPage data={pageData} />
      </aside>
    </div>
  );
};

export default Page;
