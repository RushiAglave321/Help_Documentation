"use client";

interface MediaProps {
  image?: string;
  video?: string;
}

interface DescriptionSection {
  descriptionTitle: string;
  description: string[];
  media?: MediaProps;
}

interface ContentProps {
  title: string;
  subtitle?: string;
  description: string[];
  descriptionSections: DescriptionSection[];
}

interface DescriptiveeContentProps {
  data: ContentProps;
}

export default function DescriptiveeContent({ data }: DescriptiveeContentProps) {
  return (
    <article className="prose prose-lg lg:prose-xl max-w-5xl mx-auto p-5 bg-background shadow-md rounded-2xl border border-border">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-foreground">
        {data?.title}
      </h1>

      {/* Subtitle (optional) */}
      {data?.subtitle && (
        <blockquote className="text-lg text-center italic bg-muted text-muted-foreground mt-2 p-2 rounded-md">
          {data?.subtitle}
        </blockquote>
      )}

      {/* Main Description */}
      {data?.description?.length > 0 && (
        <section className="mt-4 space-y-2">
          {data?.description.map((desc, i) => (
            <p
              key={i}
              className="leading-relaxed text-muted-foreground text-justify"
            >
              {desc}
            </p>
          ))}
        </section>
      )}

      {/* Loop over descriptionSections */}
      {data?.descriptionSections?.map((section, idx) => (
        <section key={idx} className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            {section?.descriptionTitle}
          </h4>
          <div className="space-y-2">
            {section?.description.map((desc, j) => (
              <p
                key={j}
                className="leading-relaxed text-muted-foreground text-justify"
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Media (optional) */}
          {section?.media?.image && (
            <img
              src={section?.media?.image}
              alt={section?.descriptionTitle}
              className="mt-4 rounded-lg border border-border shadow-sm"
            />
          )}
          {section?.media?.video && (
            <video
              controls
              className="mt-4 rounded-lg border border-border shadow-sm w-full"
            >
              <source src={section?.media?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </section>
      ))}
    </article>
  );
}
