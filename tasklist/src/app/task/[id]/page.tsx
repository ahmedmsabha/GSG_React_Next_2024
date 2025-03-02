import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Task } from "@/app/components/TaskItem";
import TaskClient from "./client";

// Function to add priority to a task
function addPriorityToTask(task: Task): Task {
  const priorities: Array<"High" | "Medium" | "Low"> = [
    "High",
    "Medium",
    "Low",
  ];
  return {
    ...task,
    priority: priorities[Math.floor(Math.random() * priorities.length)],
  };
}

// Fetch a specific task from JSONPlaceholder API
async function getTask(id: string): Promise<Task | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch task with ID ${id}`);
    }

    const task = await response.json();
    return addPriorityToTask(task);
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    throw error;
  }
}

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await getTask(id);

  if (!task) {
    notFound();
  }

  // Determine status text and icon based on completion status
  const statusText = task.completed ? "Completed" : "Pending";
  const iconSrc = task.completed ? "/icons/check.svg" : "/icons/clock.svg";

  // Determine priority styling
  const priorityColor =
    task.priority === "High"
      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      : task.priority === "Medium"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 mb-4"
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Tasks
          </Link>
          <h1 className="text-3xl font-bold">Task Details</h1>
        </div>
      </header>

      <main>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/task-banner.jpg"
              alt="Task Management"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={iconSrc}
                alt={statusText}
                width={24}
                height={24}
                className={
                  task.completed
                    ? "text-green-500 dark:text-green-400"
                    : "text-yellow-500 dark:text-yellow-400"
                }
              />
              <h2 className="text-2xl font-semibold dark:text-white">
                {task.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Status
                </h3>
                <p
                  className={`text-lg ${
                    task.completed
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {statusText}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Task ID
                </h3>
                <p className="text-lg dark:text-white">{task.id}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Priority
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${priorityColor}`}
                >
                  {task.priority}
                </span>
              </div>
            </div>

            {/* Client component for clipboard functionality */}
            <TaskClient task={task} />
          </div>
        </div>
      </main>
    </div>
  );
}
