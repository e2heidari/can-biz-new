import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Nav from "./Nav";
// import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-300 to-gray-500 text-white flex items-center justify-center shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/yelstar.webp"
            alt="persian Business Logo"
            className="w-16 h-16 md:w-18 md:h-18 rounded-sm"
            width={96}
            height={96}
            priority
          />
          <Link href="/">
            <h1 className="text-xl md:text-3xl font-bold text-black">
              Discover Persian Businesses & Bloggers
            </h1>
          </Link>
        </div>
        {/* <Nav />
        <MobileMenu /> */}
      </div>
    </header>
  );
};

export default Header;
