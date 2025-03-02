import TaskItem, { Task } from "./components/TaskItem";
import Image from "next/image";

// Function to add priority to tasks
function addPriorityToTasks(tasks: Task[]): Task[] {
  const priorities: Array<"High" | "Medium" | "Low"> = [
    "High",
    "Medium",
    "Low",
  ];

  return tasks.map((task) => ({
    ...task,
    priority: priorities[Math.floor(Math.random() * priorities.length)],
  }));
}

// Fetch tasks from JSONPlaceholder API
async function getTasks(): Promise<Task[]> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const tasks = await response.json();
    return addPriorityToTasks(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/task.svg"
            alt="Task Tracker"
            width={36}
            height={36}
            className="text-blue-600"
          />
          <h1 className="text-3xl font-bold">Task Tracker</h1>
        </div>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

          {tasks.length === 0 ? (
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <p>Loading tasks...</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
