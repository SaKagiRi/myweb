import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SiNixos, SiNextdotjs, SiCoursera } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
export default function ExpC() {
  return (
    <div className="bg-[#3A3C41] lg:w-5/6 h-full sm:w-screen md:mx-20 rounded-3xl bg-opacity-85 flex flex-col">
      <div className="xl:text-3xl md:text-2xl text-xl flex flex-row items-center  justify-center font-semibold mt-10">
        <p>Programming Experience</p>
      </div>
      <div className="h-2/5 rounded-3xl lg:ml-20 ml-5">
        <div className="flex flex-row items-center gap-2">
          <SiCoursera className="text-5xl text-[#1A5FB4]" />
          <p className="text-2xl">clang</p>
        </div>
        <div className="flex flex-row xl:gap-14 lg:flex-nowrap flex-wrap justify-center items-center lg:gap-8 gap-4 ml-3">
          <div className="border-[#1A5FB4] lg:border-l-2 lg:border-t-0 border-l-0 border-t-2 w-full lg:mt-0 mt-3 pr-3 border-b-2 lg:w-3 mb-2 lg:ml-3"></div>
          <p className="lg:text-lg xl:text-xl text-md text-wrap mr-10 xl:mr-32">
            C is the language I’m most comfortable with. I started learning it{" "}
            <span className="text-xl text-[#33ECD5] font-semibold">
              two year
            </span>{" "}
            ago at 42 Bangkok and quickly faced major challenges, especially
            with pointers and memory management. At first, I struggled with
            dereferencing, memory leaks that were hard to track, and
            segmentation faults that provided little debugging information.
            These issues made debugging a nightmare. But I kept pushing forward.
            I learned to manage memory properly and built{" "}
            <Link
              href="https://github.com/SaKagiRi/Libft"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              Libft
            </Link>{" "}
            , my own C library. Then came{" "}
            <Link
              href="https://github.com/SaKagiRi/ft_printf"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              ft_printf
            </Link>
            , where I had to handle variadic functions and prevent buffer
            overflows. My most challenging project was Pipex, where I delved
            into signals, process management, and pipeline handling. I
            encountered issues like memory leaks and zombie processes, but I
            eventually solved them. Now, I’m starting a graphics project to
            explore how computers render images. It’s a completely different
            world from system programming, and I’m excited to dive deep into
            graphics processing.{" "}
            <Link
              href="https://github.com/SaKagiRi/Pipex"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              Pipex
            </Link>
            , where I delved into signals, process management, and pipeline
            handling. I encountered issues like memory leaks and zombie
            processes, but I eventually solved them. Now, I’m starting a
            graphics project to explore how computers render images. It’s a
            completely different world from system programming, and I’m excited
            to dive deep into graphics processing.
          </p>
          <Image
            src="/photo-05.jpg"
            alt="clang"
            width={400}
            height={400}
            className="rounded-3xl object-cover mr-20 mb-10 2xl:h-96 2xl:w-96 xl:h-80 xl:w-80 lg:h-72 lg:w-72 md:h-64 md:w-64 sm:h-56 sm:w-56 h-44 w-44"
          />
        </div>
      </div>
      <div className="h-1/6 rounded-3xl lg:ml-20 ml-5 mb-20">
        <div className="flex flex-row items-center gap-2">
          <VscTerminalBash className="text-5xl text-white" />
          <p className="text-2xl">Shell</p>
        </div>
        <div className="flex flex-row xl:gap-14 lg:gap-8 gap-4 ml-3">
          <div className="border-white border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
          <p className="lg:text-lg xl:text-xl text-md">
            I have{" "}
            <span className="text-xl text-[#33ECD5] font-semibold">
              two Year
            </span>{" "}
            of experience too, becuase I start to learn shell script when I
            start to learn C language. I use it to automate my workflow, create
            scripts to manage my computer, and customize my terminal. I also use
            it to create scripts for my projects, such as{" "}
            <Link
              href="https://github.com/SaKagiRi/NixDotsFile/blob/main/assets/script/gamemode.sh"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              gamemode.sh
            </Link>
            ,{" "}
            <Link
              href="https://github.com/SaKagiRi/NixDotsFile/blob/main/assets/script/gamemode.sh"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              random_wallpaper.sh
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
