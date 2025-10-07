"use client";
import React from "react";
import Image from 'next/image'

interface MediaProps {
  src: string; // File URL
  alt?: string; // Alt text for image
  type?: "image" | "video"; // Optional override
  className?: string; // Extra styling
}

const MediaViewer: React.FC<MediaProps> = ({ src, alt = "media", type, className }) => {
  // Auto-detect file type if not provided
  const isVideo = type
    ? type === "video"
    : /\.(mp4|webm|ogg)$/i.test(src);

  if (!src) return null; 

  return (
    <div className={`w-full flex justify-center ${className || ""}`}>
      {isVideo ? (
        <video
          src={src}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full rounded-lg shadow-md"
        />
      ) : (
        // <img
        //   src={src}
        //   alt={alt}
        //   className="w-84 h-80 max-w-full rounded-lg shadow-md"
        // />
         <Image
            src={src}
            alt="Picture"
            width={200}
            height={200}
        />
      )}
    </div>
  );
};

export default MediaViewer;
