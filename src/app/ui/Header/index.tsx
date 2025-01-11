import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Nav from "./Nav";
// import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full bg-white text-white shadow-md">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-4 ml-4">
          <Link href="/">
            <Image
              src="/images/yelstar.webp"
              alt="Persian Business Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-sm"
              width={96}
              height={96}
              priority
            />
          </Link>
        </div>
        {/* <Nav />
        <MobileMenu /> */}
      </div>
    </header>
  );
};

export default Header;
