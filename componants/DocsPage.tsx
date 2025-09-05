import Feedback from "@/componants/Feedback";
import Link from "next/link";

interface DocsPageProps {
  data: {
    title: string;
    links: { label: string; href: string; className?: string }[];
    description: string;
  };
}

export default function DocsPage({ data }: DocsPageProps) {
  return (
    <div className="min-h-screen bg-background flex justify-center px-2 py-4">
      <article className="mainArticle max-w-3xl w-full bg-card shadow-md rounded-2xl p-4 border border-border">
        {/* Links Section */}
        <header className="mb-6">
          {data?.links?.map((link, idx) => (
            <div key={idx}>
              <Link
                href={link.href}
                className={`hover:underline hover:text-primary transition ${link.className || ""}`}
              >
                {link.label}
              </Link>
              <br />
            </div>
          ))}
        </header>

        {/* Description Section */}
        <section className="prose max-w-none text-muted-foreground leading-relaxed">
          <p>{data?.description}</p>
        </section>

        {/* Feedback Section */}
        <section className="mt-10 border-t border-border pt-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Was this page helpful?
          </h2>
          <Feedback />
        </section>
      </article>
    </div>
  );
}
