"use client";
import Note from "./Note";
import Pagination from "./Pagination";

const cleanSubText = (text: string) => {
  return text.replace(/^\s*(->|->|-|•|–)\s*/, "");
};

const formatText = (text: string): React.ReactNode => {
  if (!text) return "";
  const regex = /(<\/?(?:B|I|U|b|i|u)>)/g;
  const parts = text.split(regex);

  let isBold = false;
  let isItalic = false;
  let isUnderline = false;

  return parts.map((part, index) => {
    const lower = part.toLowerCase();
    if (lower === "<b>") {
      isBold = true;
      return null;
    } else if (lower === "</b>") {
      isBold = false;
      return null;
    } else if (lower === "<i>") {
      isItalic = true;
      return null;
    } else if (lower === "</i>") {
      isItalic = false;
      return null;
    } else if (lower === "<u>") {
      isUnderline = true;
      return null;
    } else if (lower === "</u>") {
      isUnderline = false;
      return null;
    }

    if (part === "") return null;

    let element: React.ReactNode = part;
    if (isBold) {
      element = <strong key={`b-${index}`}>{element}</strong>;
    }
    if (isItalic) {
      element = <em key={`i-${index}`}>{element}</em>;
    }
    if (isUnderline) {
      element = <u key={`u-${index}`}>{element}</u>;
    }

    return <span key={index}>{element}</span>;
  });
};

interface MediaProps {
  image?: string;
  video?: string;
}

interface TableProps {
  columns: string[];
  rows: string[][];
}

interface SubDescriptionItem {
  subdescriptionTitle: string;
  subdescriptionType?: string;
  subdescription: string[];
}

type DescriptionItem = string | SubDescriptionItem;

interface DescriptionSection {
  descriptionTitle?: string;
  description?: DescriptionItem[];
  descriptionType?: string;
  media?: MediaProps;
  table?: TableProps;
  Note?: string;
}

interface ContentProps {
  title?: string;
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
        {formatText(data?.title || "")}
      </h1>

      {/* Subtitle */}
      {data?.subtitle && (
        <blockquote className="text-lg text-center italic bg-muted text-muted-foreground mt-2 p-2 rounded-md">
          {formatText(data?.subtitle)}
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
              {formatText(desc)}
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
              {formatText(section.descriptionTitle)}
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
                const items = value as DescriptionItem[];
                const isList = section.descriptionType?.toLowerCase() === "list";
                if (isList) {
                  const renderedElements: React.ReactNode[] = [];
                  let currentListGroup: string[] = [];

                  items.forEach((item, idx) => {
                    if (typeof item === "string") {
                      currentListGroup.push(item);
                    } else {
                      // Flush current string list group
                      if (currentListGroup.length > 0) {
                        const listKey = `${i}-list-${idx}`;
                        renderedElements.push(
                          <ul key={listKey} className="list-disc list-inside space-y-2">
                            {currentListGroup.map((str, sIdx) => (
                              <li key={sIdx} className="leading-relaxed text-muted-foreground">
                                {formatText(str)}
                              </li>
                            ))}
                          </ul>
                        );
                        currentListGroup = [];
                      }

                      // Render SubDescriptionItem as a standalone div outside ul
                      const sub = item as SubDescriptionItem;
                      const isSubList = sub.subdescriptionType?.toLowerCase() === "list";
                      renderedElements.push(
                        <div
                          key={`${i}-sub-${idx}`}
                          className="pl-6 mt-3 mb-3 border-l-2 border-muted/60"
                        >
                          <p className="font-semibold text-foreground mb-2 text-base">
                            {formatText(sub.subdescriptionTitle)}
                          </p>
                          {isSubList ? (
                            <div className="pl-4 space-y-2">
                              {sub.subdescription?.map((subPoint, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2">
                                  <span className="text-muted-foreground/80 mt-1.5 text-[10px] select-none leading-none">◦</span>
                                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 m-0">
                                    {formatText(cleanSubText(subPoint))}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="pl-4 space-y-1.5">
                              {sub.subdescription?.map((subPara, sIdx) => (
                                <p
                                  key={sIdx}
                                  className="text-sm text-muted-foreground leading-relaxed text-justify m-0"
                                >
                                  {formatText(cleanSubText(subPara))}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                  });

                  // Flush remaining strings
                  if (currentListGroup.length > 0) {
                    renderedElements.push(
                      <ul key={`${i}-list-end`} className="list-disc list-inside space-y-2">
                        {currentListGroup.map((str, sIdx) => (
                          <li key={sIdx} className="leading-relaxed text-muted-foreground">
                            {formatText(str)}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <div key={i} className="space-y-3">
                      {renderedElements}
                    </div>
                  );
                }
                return (
                  <div key={i} className="space-y-2">
                    {items.map((para, idx) => {
                      if (typeof para === "string") {
                        return (
                          <p
                            key={`${i}-${idx}`}
                            className="leading-relaxed text-muted-foreground text-justify"
                          >
                            {formatText(para)}
                          </p>
                        );
                      }
                      // Render subdescription object in paragraph mode
                      const sub = para as SubDescriptionItem;
                      const isSubList = sub.subdescriptionType?.toLowerCase() === "list";
                      return (
                        <div key={`${i}-${idx}`} className="pl-6 mt-3 border-l-2 border-muted/60">
                          <p className="font-semibold text-foreground mb-2 text-base">
                            {formatText(sub.subdescriptionTitle)}
                          </p>
                          {isSubList ? (
                            <div className="pl-4 space-y-2">
                              {sub.subdescription?.map((subPoint, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2">
                                  <span className="text-muted-foreground/80 mt-1.5 text-[10px] select-none leading-none">◦</span>
                                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 m-0">
                                    {formatText(cleanSubText(subPoint))}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="pl-4 space-y-1.5">
                              {sub.subdescription?.map((subPara, sIdx) => (
                                <p
                                  key={sIdx}
                                  className="text-sm text-muted-foreground leading-relaxed text-justify m-0"
                                >
                                  {formatText(cleanSubText(subPara))}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
                    {formatText(value as string)}
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
