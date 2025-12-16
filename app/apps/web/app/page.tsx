import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          CalmPath
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Simple, step-by-step reassurance when you need it most.
        </p>

        <div className="mt-8">
          <Link
            href="/flow"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-xl sm:text-2xl font-bold h-20 sm:h-24 px-10 sm:px-16 shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            My baby is crying
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 text-sm">
        <p>A simple tool for new parents.</p>
      </footer>
    </div>
  );
}
