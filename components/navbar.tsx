"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-transparent top-0 left-0 absolute w-full z-10">
      <div className="flex justify-between items-center px-6 py-3 lg:px-12 lg:py-6">
        <div
          onClick={() => setIsActive(!isActive)}
          className="lg:hidden cursor-pointer"
        >
          <Image
            src="/assets/menu.svg"
            alt="menu-icon"
            width={20}
            height={20}
          />
        </div>

        <div className="mx-auto lg:m-0">
          <Link className="text-2xl lg:text-[2rem] text-white" href="/">
            trxl.
          </Link>
        </div>

        <div className={`${isActive ? "nav-links active" : "nav-links"}`}>
          <div
            onClick={() => setIsActive(!isActive)}
            className="lg:hidden cursor-pointer absolute top-4 right-4"
          >
            <Image
              src="/assets/close.svg"
              alt="close-icon"
              width={20}
              height={20}
            />
          </div>
          <Link className="underline underline-offset-8" href="/">
            Home
          </Link>
          <Link href="#">Stays</Link>
          <Link href="#">Flights</Link>
          <Link href="#">Packages</Link>
          <Link href="#">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
