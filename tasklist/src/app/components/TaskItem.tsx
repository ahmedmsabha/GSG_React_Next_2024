import Image from "next/image";
import Link from "next/link";

// Define the Task interface
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: "High" | "Medium" | "Low";
}

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  // Determine the icon based on completion status
  const iconSrc = task.completed ? "/icons/check.svg" : "/icons/clock.svg";
  const statusText = task.completed ? "Completed" : "Pending";

  // Determine the priority class
  const priorityClass = task.priority
    ? `priority-${task.priority.toLowerCase()}`
    : "";

  return (
    <div
      className={`task-item p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow ${priorityClass}`}
    >
      <Link href={`/task/${task.id}`} className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Image
            src={iconSrc}
            alt={statusText}
            width={24}
            height={24}
            className={task.completed ? "text-green-500" : "text-yellow-500"}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium">{task.title}</h3>
          <p
            className={`text-sm ${
              task.completed ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {statusText}
          </p>
          {task.priority && (
            <span
              className={`text-xs px-2 py-1 rounded-full inline-block mt-1
              ${
                task.priority === "High"
                  ? "bg-red-100 text-red-800"
                  : task.priority === "Medium"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {task.priority}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
