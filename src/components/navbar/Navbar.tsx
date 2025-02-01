"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-[#454B52] flex items-center h-9 w-screen flex-col border-[#9A9996] border-b-2">
      <p className="lg:text-2xl sm:text-xl font-medium lg:w-1/3 w-full justify-center  hidden lg:mr-0 ml-6">
        echo "
        <span className="lg:text-3xl md:text-xl text-[#33ECD5]">
          Kasichon Nakto
        </span>
        "
      </p>
      <div className="sticky flex flex-row lg:gap-5 mb-3 mt-1 gap-3 lg:w-1/3 w-2/3 justify-center">
        <Link
          href="#"
          className="lg:text-2xl sm:text-xl font-semibold border-b-2 text-[#33ECD5]"
        >
          Home
        </Link>
        <Link
          href="#"
          className="lg:text-2xl sm:text-xl hover:text-[#33ECD5] hover:font-semibold"
        >
          Blogs
        </Link>
        <label
          className="sticky left-full mr-2 lg:text-2xl  sm:text-xl"
          htmlFor="check"
        >
          contact
        </label>
        <input
          type="checkbox"
          className="hidden"
          id="check"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div className={`${toggle ? "flex" : "hidden"} flex-col`}>
        <div className="lg:text-xl sm:text-md lg:gap-6 gap-2 flex flex-col bg-[#454B52] w-screen lg:mr-10 lg:w-1/3 lg:ml-0 z-0 md:ml-5 justify-center items-center">
          <Link
            href="https://discord.gg/UdxFKNXykR"
            className="hover:font-semibold hover:text-[#33ECD5] w-screen text-center"
          >
            Discord
          </Link>
          <Link
            href="https://web.facebook.com/kasichon?locale=th_TH"
            className="hover:font-semibold hover:text-[#33ECD5] w-screen text-center"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/sakagi_ri/"
            className="hover:font-semibold hover:text-[#33ECD5] w-screen text-center"
          >
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@sakagiri_ch.9482"
            className="hover:font-semibold hover:text-[#33ECD5] w-screen text-center"
          >
            Youtube
          </Link>
        </div>
      </div>
    </nav>
  );
}
