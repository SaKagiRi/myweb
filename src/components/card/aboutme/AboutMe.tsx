import Image from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNixos, SiNextdotjs, SiCoursera } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { TbBrandJavascript } from "react-icons/tb";
export default function AboutMe() {
  return (
    <div className="bg-[#3A3C41] flex lg:flex-row flex-col lg:justify-end items-center lg:w-4/5 2xl:h-4/5 h-full xl:mt-0 lg:mb-32 xl:mb-0 lg:my-32 bg-opacity-80 lg:rounded-[100px] sm:rounded-3xl">
      <div className="md:w-1/2 w-5/6 flex flex-col 2xl:my-32 items-center overflow-hidden">
        <h1 className="text-5xl text-[#33ECD5] 2xl:mt-0 xl:mt-20 lg:mt-20 mt-10">
          About Me
        </h1>
        <div className="flex flex-col w-full 2xl:pl-20 xl:pl-14 items-center lg:pl-10 mt-10">
          <p className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-md">
            Hello my name{" "}
            <span className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-md text-[#33ECD5] font-semibold">
              is
            </span>{" "}
            Kasichon Nakto, you can call me{" "}
            <span className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-md text-[#33ECD5] font-semibold">
              Kita.
            </span>{" "}
            I am a Computer Science major at Ramkhamhaeng University and a cadet
            at 42 Network. My passion lies in controlling everything around
            me—it feels like true freedom, and I find it absolutely fascinating.
            My dream is to build a fully automated smart home, where I can
            control everything exactly the way I want. This passion is what led
            me to study Computer Science and dive deep into technology.
          </p>
          <div className="flex flex-row gap-2 xl:mt-10 xl:mb-16 mt-10 lg:mt-10 lg:mb-20 mb-20">
            <p className="lg:text-2xl md:text-xl text-lg">
              Please save my{" "}
              <Link
                href="https://linktr.ee/knxkto?utm_source=linktree_profile_share&ltsid=38f961a0-3c26-4451-b71a-8e4ff75acbb3"
                className="text-xl text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                Contacts
              </Link>{" "}
              or join{" "}
              <Link
                href="https://discord.gg/UdxFKNXykR"
                className="text-xl text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
              >
                Discord
              </Link>{" "}
              because this page is Temporary website, thank you.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:mb-0 mb-20 flex flex-col justify-center items-center">
        <Image
          src="/photo-01.jpg"
          width={600}
          height={500}
          alt="photo-01"
          className="2xl:w-fit 2xl:h-96 xl:md:w-96 xl:md:h-64 lg:sm:w-80 lg:sm:h-56"
        />
        <p className="mt-10 lg:text-2xl md:text-xl text-lg flex-nowrap">
          My Programming Language.
        </p>
        <div className="flex flex-row gap-7 mt-3">
          <div className="flex flex-col items-center">
            <SiNixos className="xl:text-5xl lg:text-4xl text-3xl text-[#33ECD5]" />
            <p className="xl:text-2xl md:text-xl text-lg">NixOS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="xl:text-5xl lg:text-4xl text-3xl text-[#000000]" />
            <p className="xl:text-2xl md:text-xl text-lg">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiCoursera className="xl:text-5xl lg:text-4xl text-3xl text-[#1A5FB4]" />
            <p className="xl:text-2xl md:text-xl text-lg">Clang</p>
          </div>
          <div className="flex flex-col items-center">
            <VscTerminalBash className="xl:text-5xl lg:text-4xl text-3xl text-white" />
            <p className="xl:text-2xl md:text-xl text-lg">Shell</p>
          </div>
        </div>
        <div className="flex flex-row gap-7 mt-10">
          <div className="flex flex-col items-center">
            <FaCss3Alt className="xl:text-4xl lg:text-3xl text-2xl text-[#1C71D8]" />
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="xl:text-4xl lg:text-3xl text-2xl text-[#E34F26]" />
          </div>
          <div className="flex flex-col items-center">
            <TbBrandJavascript className="xl:text-4xl lg:text-3xl text-2xl text-[#F7DF1E]" />
          </div>
        </div>
      </div>
    </div>
  );
}
