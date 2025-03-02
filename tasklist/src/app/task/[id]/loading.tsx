
export default function TaskLoading() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4"></div>
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </header>

      <main>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse mb-2"></div>
                  <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
