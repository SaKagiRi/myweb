import Link from "next/link";
import { SiNixos, SiNextdotjs, SiCoursera } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
export default function Exp() {
  return (
    <div className="bg-[#3A3C41] xl:w-2/5 w4/5 h-full xl:mr-52 mx-20 rounded-3xl bg-opacity-85 justify-between items-center flex flex-col">
      <div className="text-3xl flex flex-row font-semibold mt-10">
        <p>Programming Experience</p>
      </div>
      <div className="mb-28 flex flex-col gap-3 h-4/5 w-4/5">
        <div className="h-1/4 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <SiNixos className="text-5xl text-[#33ECD5]" />
            <p className="text-2xl">Nix</p>
          </div>
          <div className="flex flex-row gap-14 ml-3">
            <div className="border-[#33ECD5] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="text-xl">
              I have been using the Nix language for{" "}
              <span className="text-xl text-[#33ECD5] font-semibold">
                a year
              </span>{" "}
              at nix language. I primarily use it to maintain my computer
              software, update packages, and customize package configurations,
              such as Hyprland and Neovim. You can check out my work in{" "}
              <Link
                href=""
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                NixDotsFile
              </Link>
            </p>
          </div>
        </div>
        <div className="h-2/5 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <SiNextdotjs className="text-5xl text-[#000000]" />
            <p className="text-2xl">Next.js</p>
          </div>
          <div className="flex flex-row gap-14 ml-3">
            <div className="border-[#000000] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="text-xl">
              I have{" "}
              <span className="text-xl text-[#33ECD5] font-semibold">
                three months
              </span>{" "}
              of experience with Next.js from my freelance work. I am currently
              studying frontend development, focusing on Tailwind CSS. I also
              have some knowledge of basic algorithms and workflow processes.
              Unfortunately, I can't showcase my work due to an NDA contract,
              but I hope this webpage can demonstrate my experience.
            </p>
          </div>
        </div>
        <div className="h-2/5 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <SiCoursera className="text-5xl text-[#1A5FB4]" />
            <p className="text-2xl">clang</p>
          </div>
          <div className="flex flex-row gap-14 ml-3">
            <div className="border-[#1A5FB4] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="text-xl">
              This is my favorite and main programming language. I have been
              using it for{" "}
              <span className="text-xl text-[#33ECD5] font-semibold">
                two year
              </span>{" "}
              to build my own projects, such as{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                Libft
              </Link>
              ,{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                ft_printf
              </Link>
              ,{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                push_swap
              </Link>
              ,{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                Pipex
              </Link>
              , and to learn new technologies. I have a good understanding of
              the language and its syntax, and I am familiar with basic
              algorithms and data structures. I am currently studying the
              language in depth and learning new technologies to improve my
              skills.
            </p>
          </div>
        </div>
        <div className="h-1/6 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <VscTerminalBash className="text-5xl text-white" />
            <p className="text-2xl">Shell</p>
          </div>
          <div className="flex flex-row gap-14 ml-3">
            <div className="border-white border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="text-xl">
              I have{" "}
              <span className="text-xl text-[#33ECD5] font-semibold">
                two Year
              </span>{" "}
              of experience too, becuase I start to learn shell script when I
              start to learn C language. I use it to automate my workflow,
              create scripts to manage my computer, and customize my terminal. I
              also use it to create scripts for my projects, such as{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                gamemode.sh
              </Link>
              ,{" "}
              <Link
                href="#"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                random_wallpaper.sh
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
