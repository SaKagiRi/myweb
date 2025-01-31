import Link from "next/link";
import { FaDiscord, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="bg-[#454B52] flex items-center h-24 w-screen border-[#9A9996] border-b-2 md:flex-nowrap flex-wrap justify-center">
      <p className="lg:text-2xl sm:text-xl font-medium lg:w-1/3 w-full justify-center flex lg:mr-0 ml-6">
        echo "
        <span className="lg:text-3xl md:text-xl text-[#33ECD5]">
          Kasichon Nakto
        </span>
        "
      </p>
      <div className="flex flex-row lg:gap-5 sm:gap-2 lg:w-1/3 w-full justify-center">
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
      </div>
      <div className="lg:text-xl sm:text-md lg:gap-6 gap-2 flex flex-row lg:mr-10 lg:w-1/3 lg:ml-0 mdml-5 justify-end">
        <FaDiscord className="lg:mt-1 lg:size-5 mt-2 size-3 text-[#33ECD5]" />
        <Link
          href="https://discord.gg/UdxFKNXykR"
          className="hover:font-semibold hover:text-[#33ECD5]"
        >
          Discord
        </Link>
        <FaFacebookSquare className="lg:mt-1 lg:size-5 mt-2 size-3 text-[#33ECD5]" />
        <Link
          href="https://web.facebook.com/kasichon?locale=th_TH"
          className="hover:font-semibold hover:text-[#33ECD5]"
        >
          Facebook
        </Link>
        <AiFillInstagram className="lg:mt-1 lg:size-5 mt-2 size-3 text-[#33ECD5]" />
        <Link
          href="https://www.instagram.com/sakagi_ri/"
          className="hover:font-semibold hover:text-[#33ECD5]"
        >
          Instagram
        </Link>
        <FaYoutube className="lg:mt-1 lg:size-5 mt-2 size-3 text-[#33ECD5]" />
        <Link
          href="https://www.youtube.com/@sakagiri_ch.9482"
          className="hover:font-semibold hover:text-[#33ECD5]"
        >
          Youtube
        </Link>
      </div>
    </nav>
  );
}
