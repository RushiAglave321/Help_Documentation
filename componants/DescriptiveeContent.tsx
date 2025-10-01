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
  description: string[];
  descriptionType?: "paragraph" | "list";
  media?: MediaProps;
  table?: TableProps;
  Note?: string
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
        <section key={idx} id={`section-${idx}`} className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            {section?.descriptionTitle}
          </h4>
          <div className="space-y-2">
           
            {section.descriptionType === "list" ? (
              <ul className="list-disc list-inside space-y-1">
                {section.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{section.description?.join(" ")}</p>
            )}
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

          {/* Table (optional) */}
          {section?.table && (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    {section.table.columns.map((col, cIdx) => (
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
                  {section.table.rows.map((row, rIdx) => (
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
          )}


          {/* Note (optional) */}
          {section?.Note && (
            <Note>
              {section.Note}
            </Note>
          )}

        </section>
      ))}
      <Pagination/>
    </article>
  );
}
