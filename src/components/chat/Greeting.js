
export default function Greeting() {
  return (
    <div className="lg:col-span-2 lg:block bg-white dark:bg-gray-900">
      <div className="flex flex-col align-middle justify-center justify-items-center items-center py-20 gap-y-4">
        <p className="text-center text-2xl">Welcome to Juice Vendor labs</p>
        <div className="text-center">
          <h2 className="text-xl text-gray-500 dark:text-gray-400">
            Select a Chat to Start Messaging
          </h2>
        </div>
      </div>
    </div>
  );
}
