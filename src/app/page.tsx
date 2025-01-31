import Image from "next/image";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import Navbar from "@/components/navbar/Navbar";
import Exp from "@/components/card/experience/Exp";
import AboutMe from "@/components/card/aboutme/AboutMe";

export default function Home() {
  return (
    <section className="bg-black flex flex-col h-full w-screen">
      <section className="bg-[#122029] flex flex-col items-center lg:h-screen w-screen h-full">
        <Navbar />
        <div className="flex justify-center">
          <p className="2xl:mt-24 xl:mt-16 lg:mt-12 mt-8 xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-medium text-[#41E2DB]">
            Developer
          </p>
        </div>
        <div className="flex flex-row gap-10 w-5/6 mt-20 h-1/2 lg:flex-nowrap justify-center lg:mb-32 mb-20 flex-wrap">
          <div className="md:w-1/3 w-full flex justify-center items-center flex-col">
            <Image
              src="/knakto.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
              className="rounded-[1000px] object-cover mb-10 2xl:h-96 2xl:w-96 xl:h-80 xl:w-80 lg:h-72 lg:w-72 md:h-64 md:w-64 sm:h-56 sm:w-56 h-44 w-44"
            />
            <div className="flex flex-row">
              <CgMail className="md:size-7 size-4 md:mt-5 mt-6 mr-2 text-[#33ECD5]" />
              <p className="md:text-xl text-lg mt-5">kasichonooo@gmail.com</p>
            </div>
          </div>
          <div className="w-2/3 flex-col flex sm:ml-20 items-center justify-center">
            <div className="flex flex-col md:gap-7 sm:gap-5 gap-2">
              <p className="md:text-5xl sm:text-4xl text-3xl">Hello</p>
              <p className="md:text-5xl sm:text-4xl text-3xl">
                I'am{" "}
                <span className="md:text-5xl sm:text-4xl text-3xl text-[#41E2DB] font-bold">
                  Kita
                </span>
              </p>
              <p className="md:text-5xl sm:text-4xl text-3xl">
                Backend Developer
              </p>
              <p className="md:text-3xl sm:text-2xl text-xl opacity-50">
                #just have a little bit frontend
              </p>
              <div className="flex flex-col md:items-start items-center">
                <p className="md:text-2xl sm:text-xl text-lg">
                  -- If you're searching for a highly capable backend developer
                  with a passion for learning new things, look no further. --
                </p>
                <Link
                  href="https://github.com/SaKagiRi"
                  className="bg-[#33ECD5] opacity-80 hover:opacity-100 text-black flex justify-center text-2xl font-semibold rounded-[20px] px-5 py-2 mt-10"
                >
                  Lets see my work.
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 xl:flex hidden justify-center items-center">
            <div className="bg-[#454B52] flex items-center justify-around flex-col h-60 w-52 rounded-[70px]">
              <div className="flex flex-row gap-2">
                <p className="text-5xl font-bold text-[#33ECD5]">4</p>
                <div className="flex flex-col">
                  <p className="">Programming</p>
                  <p className="">Language</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-5xl font-bold text-[#33ECD5]">2</p>
                <div className="flex flex-col">
                  <p className="">Year of</p>
                  <p className="">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0F1217] flex justify-center items-center bg-[url(/photo-00.jpg)] bg-opacity-60  lg:h-screen h-full w-screen">
        <div className="2xl:my-0 my-32 flex justify-center items-center">
          <AboutMe />
        </div>
      </section>
      <section className="bg-black  h-full w-screen bg-[url(/photo-02.jpg)] bg-cover bg-origin-content bg-center">
        <div className="bg-black w-screen h-full  bg-opacity-60">
          <div className="flex py-32 items-center 2xl:justify-end justify-center">
            <Exp />
          </div>
        </div>
      </section>
      <section className="bg-black h-screen w-screen">
        <div></div>
      </section>
      <section className="bg-[#454B52] h-screen w-screen">
        <div></div>
      </section>
      <section className="bg-black h-screen w-screen">
        <div></div>
      </section>
    </section>
  );
}
