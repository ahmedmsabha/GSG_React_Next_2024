"use client";

import { useState } from "react";
import { Task } from "@/app/components/TaskItem";

interface TaskClientProps {
  task: Task;
}

export default function TaskClient({ task }: TaskClientProps) {
  const [copied, setCopied] = useState(false);

  // Function to copy task title to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(task.title);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        {copied ? "Copied!" : "Copy Task Title"}
      </button>

      {copied && (
        <p className="text-green-600 dark:text-green-400 mt-2 text-sm">
          Task title copied to clipboard!
        </p>
      )}
    </div>
  );
}
