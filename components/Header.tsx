import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
                src="https://cdn.worldvectorlogo.com/logos/next.svg"
                width={50}
                className="rounded-full"
                height={50}
                alt="logo"
            />
          </Link>
          <h1>Caviar's Spectrum</h1>
        </div>

        <div>
        <Link
         href="https://github.com/dewedeth"
         className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full 
          text-center"
        >
          Welcome to my Blog, checkout my github repo but theirs nothing to see.
        </Link>
        </div>
    </header>
  )
}

export default Header;