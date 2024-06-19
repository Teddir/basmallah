import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full w-full min-h-screen flex-col items-center justify-center gap-2">
      {/* <FaceFrownIcon className="w-10 text-gray-400" /> */}
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-[#A8D7B5] px-4 py-2 text-sm text-white transition-colors hover:bg-[#A8D7B5]"
      >
        Go Back
      </Link>
    </main>
  );
}