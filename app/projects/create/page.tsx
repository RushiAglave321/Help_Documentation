"use client";
import DescriptiveeContent from "@/componants/DescriptiveeContent";
import DocsPage from "@/componants/DocsPage";
import MediaViewer from "@/componants/MediaViewer";
import Note from "@/componants/Note";
import WorkSpaceDescription from "@/componants/WorkspacDescription";
import contentData from "@/public/WorkspaceData.json";
import { useEffect, useState } from "react";

// Media object inside each description section
interface MediaProps {
  image?: string;
  video?: string;
}

// A single description section
interface DescriptionSection {
  descriptionTitle: string;
  description: string[];
  media?: MediaProps;
}

// The main content item
interface ContentItem {
  title: string;
  subtitle?: string;
  description: string[];
  descriptionSections: DescriptionSection[];
}

// The top-level wrapper
interface ContentData {
  content: ContentItem[];
}


const page = () => {
  const [contentData, setContentData] = useState<ContentData | null>(null);

  useEffect(() => {
    fetch("/WorkspaceData.json")
      .then((res) => res.json())
      .then((data: ContentData) => setContentData(data));
  }, []);

  if (!contentData) return <p>Loading...</p>;

  return (
    <div>
      {contentData.content.map((item, idx) => (
        <DescriptiveeContent key={idx} data={item} />
      ))}
    </div>
  );
};


export default page
