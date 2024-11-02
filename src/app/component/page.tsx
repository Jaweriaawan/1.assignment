import Link from "next/link";

export default function Navbar(){
    return (
        <header className="h-28 bg-emerald-100 flex justify-center pt-16 text-2xl text-emerald-700">
            <h1 className="mr-96 font-serif text-3xl text-emerald-800">
            EDUCATION CENTER  </h1>
          <nav>
            <Link href="/" className="mr-4 font-serif text-2xl hover:text-emerald-800 hover:font-bold">
             Home
            </Link>
              
            <Link href="/admissions" className="mr-4 font-serif text-2xl hover:text-emerald-800 hover:font-bold">
            Admissions
            </Link>

            <Link href="/facilities" className="mr-4 font-serif text-2xl hover:text-emerald-800 hover:font-bold">
            Facilities
            </Link>

            <Link href="/news" className="mr-4 font-serif text-2xl hover:text-emerald-800 hover:font-bold">
            News
            </Link>

            <Link href="/contact-us" className="mr-4 font-serif text-2xl hover:text-emerald-800 hover:font-bold">
            Contact-us
            </Link>

          </nav>
        </header>
    )
}