// import Sidebar from "@/componants/Sidebar";
// import DocsPage from "./page";
// import DescriptiveeContent from "@/componants/DescriptiveeContent";
import MediaViewer from "@/componants/MediaViewer";
import Note from "@/componants/Note";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar - fixed width, no scroll */}
      {/* <aside className="w-64 border-r bg-gray-50 p-0 flex flex-col">
        <Sidebar />
      </aside> */}

      {/* Center content - scrollable */}
      {/* <main className="flex-1 overflow-y-auto p-6"> */}
        {/* <DescriptiveeContent /> */}
        <br />
        <Note>This is a globe image serving as svg.</Note>
        <MediaViewer src="/globe.svg" />
        <br/>
        <Note>Remember to save your project regularly!</Note>
        {/* <div className="h-[1500px]" /> just for testing scroll */}
      {/* </main> */}

      {/* Right DocsPage - fixed width, no scroll */}
      {/* <aside className="w-72 border-l bg-gray-50 p-0 flex flex-col">
        <DocsPage />
      </aside> */}
    </div>
  );
}
