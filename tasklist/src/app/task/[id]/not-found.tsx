import Link from "next/link";
import Image from "next/image";

export default function TaskNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-8">
        <Image
          src="/icons/task.svg"
          alt="Task Tracker"
          width={64}
          height={64}
          className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
        />
        <h1 className="text-4xl font-bold mb-4">Task Not Found</h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          The task you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
        >
          Return to Task List
        </Link>
      </div>
    </div>
  );
}
