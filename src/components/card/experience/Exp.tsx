import Link from "next/link";
import { SiNixos, SiNextdotjs, SiCoursera } from "react-icons/si";
export default function Exp() {
  return (
    <div className="bg-[#3A3C41] xl:w-2/5 lg:w-5/6 h-full md:mx-20 rounded-3xl bg-opacity-85 justify-between items-center flex flex-col">
      <div className="xl:text-3xl md:text-2xl text-xl mb-3 flex flex-row items-center  justify-center font-semibold mt-10">
        <p>Programming Experience</p>
      </div>
      <div className="mb-28 flex flex-col gap-3 h-4/5 w-4/5">
        <div className="h-1/4 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <SiNixos className="text-5xl text-[#33ECD5]" />
            <p className="text-2xl">Nix</p>
          </div>
          <div className="flex flex-row xl:gap-14 lg:gap-8 gap-4 ml-3">
            <div className="border-[#33ECD5] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="lg:text-lg xl:text-xl text-md">
              I have{" "}
              <span className="text-xl text-[#33ECD5] font-semibold">
                a year
              </span>{" "}
              of experience with the Nix programming language. I created a
              project that uses Nix to manage computers, called{" "}
              <Link
                href="https://github.com/SaKagiRi/NixDotsFile"
                className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                NixDotsFile
              </Link>
              . For me, the most challenging part of working with Nix is
              understanding the details of modules and modifying configurations.
              This is because Nix has its own unique syntax, which is often
              different from the syntax used in the configuration of each
              module. Sometimes, it’s difficult to determine whether an error is
              caused by the module itself or by a mistake in the configuration.
            </p>
          </div>
        </div>
        <div className="h-2/5 rounded-3xl">
          <div className="flex flex-row items-center gap-2">
            <SiNextdotjs className="text-5xl text-[#000000]" />
            <p className="text-2xl">Next.js</p>
          </div>
          <div className="flex flex-row xl:gap-14 lg:gap-8 gap-4 ml-3">
            <div className="border-[#000000] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
            <p className="lg:text-lg xl:text-xl text-md">
              I have{" "}
              <span className="text-lg text-[#33ECD5] font-semibold">
                three months
              </span>{" "}
				of experience with Next.js. During these three months, I encountered a lot of issues—probably because I jumped straight from HTML into this framework. This led to difficulties with server-related concepts, libraries, and even package management. In the beginning, no matter what I tried, I kept running into errors.
So, I decided to go back to the basics. I started by using Tailwind CSS to build a simple static webpage. Then, I gradually expanded it by adding multiple pages, making it more dynamic and adaptable. Now, I’m at the stage where I’m learning how to deploy it to a server. Of course, this comes with its own set of challenges, but if you’re seeing this website right now, that means I’ve successfully made it work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
