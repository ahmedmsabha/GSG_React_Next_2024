export default function Loading() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </header>

      <main>
        <section className="mb-8">
          <div className="h-7 w-36 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4"></div>

          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="flex-grow">
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
