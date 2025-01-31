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
        <div className="flex flex-row xl:gap-14 lg:gap-8 gap-4 ml-3">
          <div className="border-[#1A5FB4] border-l-2 border-b-2 w-3 mb-2 ml-3"></div>
          <p className="lg:text-lg xl:text-xl text-md text-wrap mr-10">
            C is the programming language I’m most comfortable with. Right now,
            it feels like the most convenient language for me—it's low-level,
            fast, and capable of many things at the C level. I started learning
            it{" "}
            <span className="text-xl text-[#33ECD5] font-semibold">
              two year
            </span>{" "}
            ago when I joined 42 Bangkok. The school gave me the opportunity to
            try many things, and at first, it was really challenging, especially
            since C was one of the first languages I learned. The first major
            obstacle I encountered was pointers (*). Back then, I had no idea
            how they worked. They seemed complicated and intimidating. At first,
            I struggled with simple dereferencing, but as I progressed, I ran
            into more severe issues, like memory leaks that were almost
            impossible to track down. Debugging them became a nightmare because
            sometimes the program wouldn't crash immediately—the memory would
            just slowly get consumed until everything broke down. Then, there
            were segmentation faults—one of the most frustrating errors. The
            worst part? It doesn't always tell you exactly where the problem is.
            One time, I spent days debugging an issue, only to realize that I
            had freed a pointer too early and accessed invalid memory later on.
            That moment made me realize how unforgiving low-level memory
            management can be. Despite the struggles, I kept pushing forward.
            Eventually, I went deep into memory allocation and built part of a C
            library. This project{" "}
            <Link
              href="https://github.com/SaKagiRi/Libft"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              Libft
            </Link>{" "}
            is a collection of everything I’ve learned along the way, from
            handling memory safely to writing reusable functions. After that, I
            took on a new challenge: implementing my own version of printf. This
            project was particularly tough because it required deep
            understanding of variadic functions (va_list) and low-level
            formatting. I also had to ensure that I didn’t cause buffer
            overflows, which could lead to unexpected behavior. There were
            moments when my implementation entered an infinite loop because I
            hadn’t accounted for edge cases correctly. Debugging an infinite
            loop with just printf debugging was painful, but I eventually found
            the root cause. The final result of my work is here:{" "}
            <Link
              href="https://github.com/SaKagiRi/ft_printf"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              ft_printf
            </Link>
            . Next, I attempted something even more complex: building a partial
            replica of Bash from scratch. This was the most difficult project I
            had ever worked on. Parsing input, handling system calls, and
            implementing a functional command execution pipeline required an
            entirely new level of problem-solving. One of the biggest challenges
            was proper memory management—a single unhandled case of dynamically
            allocated memory could result in a massive memory leak. In early
            versions, my shell would keep allocating memory without ever freeing
            it, leading to slowdowns and eventual crashes. Debugging this was a
            brutal learning experience. Another issue I faced was handling
            process management correctly. If I didn’t terminate child processes
            properly, they would become zombie processes, lingering in the
            system. This forced me to dive deeper into signal handling and
            process control. It was by far the longest project I had worked on
            and the one I had to revise the most times. But despite the
            difficulty, it’s the project I’m most proud of, as I learned an
            incredible amount from it:{" "}
            <Link
              href="https://github.com/SaKagiRi/Pipex"
              className="text-lg text-[#33ECD5] font-semibold border-b-2 w-fit hover:text-[#1C71D8]"
            >
              Pipex
            </Link>{" "}
            Right now, I’m taking it even further—I’m working on building a
            complete Bash implementation from scratch."
          </p>
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
