"use client";
import { Info } from "lucide-react";

interface NoteProps {
  children: React.ReactNode;
}

export default function Note({ children }: NoteProps) {
  return (
    <div className="flex items-center gap-3 border border-gray-400 bg-gray-900 text-gray-100 rounded-md px-4 py-3 m-5">
      <div className="flex-shrink-0">
        <Info className="w-5 h-5 text-blue-400" />
      </div>
      <div className="flex-1 text-center font-medium">
        {children}
      </div>
    </div>
  );
}
