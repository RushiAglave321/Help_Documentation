import DescriptiveeContent from "@/componants/DescriptiveeContent";
import DocsPage from "@/componants/DocsPage";
import contentData from "@/public/Tutorial_Jsons/Comment&Downld.json";


const Page = () => {

  if (!contentData) return <p className="text-center mt-20">Loading...</p>;

  const pageData = contentData.content[0]; // first item

  return (
    <div className="flex flex-1">
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
