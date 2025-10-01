export default function Feedback() {
  return (
    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm max-w-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
        Was this page helpful?
      </h2>

      <div className="flex items-center gap-4">
        {/* Emoji buttons */}
        <button
          className="text-2xl p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900 transition"
          title="Helpful"
        >
          😊
        </button>
        <button
          className="text-2xl p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900 transition"
          title="Neutral"
        >
          😐
        </button>
        <button
          className="text-2xl p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition"
          title="Not Helpful"
        >
          🙁
        </button>
      </div>
    </div>
  );
}
