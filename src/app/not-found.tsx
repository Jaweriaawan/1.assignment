import Link from "next/link";

export default function NotFoundPage(){
    return <body className="bg-none">
        <div className="flex items-center justify-center min-h-screen bg-emerald-100">
      <div className="text-center">
        <p className="mt-4 text-xl text-emerald-700 hover:text-red-600">Page Not Found</p>
        <p className="mt-2 text-emerald-700">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6 inline-block px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600">
          Go Home
        </Link>
      </div>
    </div>
</body>
}