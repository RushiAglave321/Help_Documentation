"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Feedback() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mt-8 mx-auto max-w-md p-6 bg-background dark:bg-gray-900 border border-border rounded-2xl shadow-lg">
      {/* Header */}
      <h2 className="text-2xl font-bold text-foreground text-center mb-4">
        Was this page helpful?
      </h2>
      <p className="text-center text-muted-foreground mb-6">
        Your feedback helps us improve.
      </p>

      {/* Emoji Buttons */}
      <div className="flex justify-center items-center gap-6 mb-6">
        {[
          { label: "helpful", emoji: "😊", color: "green" },
          { label: "neutral", emoji: "😐", color: "yellow" },
          { label: "notHelpful", emoji: "🙁", color: "red" },
        ].map(({ label, emoji, color }) => (
          <button
            key={label}
            onClick={() => setSelected(label)}
            title={label}
            className={`
              text-3xl p-3 rounded-full transition-transform duration-200
              transform hover:scale-125 hover:-rotate-6 active:scale-95 active:rotate-3
              ${selected === label ? `bg-${color}-200 dark:bg-${color}-800 scale-110` : `hover:bg-${color}-100 dark:hover:bg-${color}-900`}
            `}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Textarea & Submit */}
      {selected && (
        <div className="flex flex-col gap-4">
          <Textarea
            placeholder="Anything you want to add..."
            className="resize-none"
            rows={4}
          />
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit Feedback
          </Button>
        </div>
      )}
    </div>
  );
}
