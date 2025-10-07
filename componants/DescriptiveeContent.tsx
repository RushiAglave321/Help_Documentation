"use client";
import Note from "./Note";
import Pagination from "./Pagination";

interface MediaProps {
  image?: string;
  video?: string;
}

interface TableProps {
  columns: string[];
  rows: string[][];
}

interface DescriptionSection {
  descriptionTitle: string;
  description?: string[];
  descriptionType?: "paragraph" | "list";
  media?: MediaProps;
  table?: TableProps;
  Note?: string;
}

interface ContentProps {
  title: string;
  subtitle?: string;
  description?: string[];
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

      {/* Subtitle */}
      {data?.subtitle && (
        <blockquote className="text-lg text-center italic bg-muted text-muted-foreground mt-2 p-2 rounded-md">
          {data?.subtitle}
        </blockquote>
      )}

      {/* Top-level Description */}
      {Array.isArray(data?.description) && data.description.length > 0 && (
        <section className="mt-4 space-y-2">
          {data.description.map((desc, i) => (
            <p
              key={i}
              className="leading-relaxed text-muted-foreground text-justify"
            >
              {desc}
            </p>
          ))}
        </section>
      )}

      {/* Loop descriptionSections */}
      {data?.descriptionSections?.map((section, idx) => (
        <section key={idx} id={`section-${idx}`} className="mt-8">
          {/* Section title */}
          {section?.descriptionTitle && (
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {section.descriptionTitle}
            </h4>
          )}

          {/* Dynamically render section keys in JSON order */}
          {Object.entries(section).map(([key, value], i) => {
            if (
              key === "descriptionTitle" ||
              value === undefined ||
              value === null
            ) {
              return null;
            }

            switch (key) {
              case "description":
                return section.descriptionType === "list" ? (
                  <ul key={i} className="list-disc list-inside space-y-1">
                    {(value as string[]).map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  (value as string[]).map((para, idx) => (
                    <p
                      key={`${i}-${idx}`}
                      className="leading-relaxed text-muted-foreground text-justify"
                    >
                      {para}
                    </p>
                  ))
                );

              case "media":
                const media = value as MediaProps;
                return (
                  <div key={i} className="mt-4">
                    {media.image && (
                      <img
                        src={media.image}
                        alt={section.descriptionTitle}
                        className="rounded-lg border border-border shadow-sm mb-4"
                      />
                    )}
                    {media.video && (
                      <video
                        controls
                        className="rounded-lg border border-border shadow-sm w-full"
                      >
                        <source src={media.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                );

              case "table":
                const table = value as TableProps;
                return (
                  <div key={i} className="overflow-x-auto mt-4">
                    <table className="min-w-full border border-border rounded-lg overflow-hidden">
                      <thead className="bg-muted text-muted-foreground">
                        <tr>
                          {table.columns.map((col, cIdx) => (
                            <th
                              key={cIdx}
                              className="px-4 py-2 border-b border-border text-left font-semibold"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="even:bg-muted/50">
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="px-4 py-2 border-b border-border text-muted-foreground"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              case "Note":
                return (
                  <Note key={i}>
                    {value as string}
                  </Note>
                );

              default:
                return null;
            }
          })}
        </section>
      ))}

      <Pagination />
    </article>
  );
}
