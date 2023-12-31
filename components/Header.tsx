import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="/dhlogo.png"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert dark:invert-0"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropDown />
        <SearchInput />
        {/* ThemeToggler */}
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
