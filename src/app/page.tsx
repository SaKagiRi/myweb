import Image from "next/image";
import { FaDiscord, FaFacebookSquare, FaYoutube, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNixos, SiNextdotjs, SiCoursera } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { VscTerminalBash } from "react-icons/vsc";
import { TbBrandJavascript } from "react-icons/tb";

export default function Home() {
  return (
	  <section className="bg-black flex flex-col h-full w-screen">
		<section className="bg-[#122029] flex flex-col items-center h-screen w-screen">
			<nav className="bg-[#454B52] flex items-center h-24 w-screen border-[#9A9996] border-b-2">
				<div className="flex flex-row ml-6 w-1/3 justify-start">
					<p className="text-2xl font-medium">echo "</p>
					<p className="text-3xl text-[#33ECD5]">Kasichon Nakto</p>
					<p className="text-2xl font-medium">"</p>
				</div>
				<div className="flex flex-row gap-5 w-1/3 justify-center">
					<a href="#" className="text-2xl font-semibold border-b-2 text-[#33ECD5]">Home</a>
					<a href="#" className="text-2xl hover:text-[#33ECD5] hover:font-semibold">Blogs</a>
				</div>
				<div className="text-xl gap-6 flex flex-row mr-10 w-1/3 justify-end">
					<FaDiscord className="mt-1 text-[#33ECD5]" /><a href="https://discord.gg/UdxFKNXykR" className="hover:font-semibold hover:text-[#33ECD5]">Discord</a>
					<FaFacebookSquare className="mt-1 text-[#33ECD5]" /><a href="https://web.facebook.com/kasichon?locale=th_TH" className="hover:font-semibold hover:text-[#33ECD5]">Facebook</a>
					<AiFillInstagram className="mt-1 text-[#33ECD5]" /><a href="https://www.instagram.com/sakagi_ri/" className="hover:font-semibold hover:text-[#33ECD5]">Instagram</a>
					<FaYoutube className="mt-1 text-[#33ECD5]" /><a href="https://www.youtube.com/@sakagiri_ch.9482" className="hover:font-semibold hover:text-[#33ECD5]">Youtube</a>
				</div>
			</nav>
			<div className="flex justify-center">
				<p className="mt-24 text-9xl font-medium text-[#41E2DB]">Developer</p>
			</div>
			<div className="flex flex-row gap-10 w-5/6 mt-20 h-1/2">
				<div className="w-1/3 flex justify-center items-center flex-col">
						<Image
							src="/knakto.jpg"
							alt="Picture of the author"
							width={400}
							height={400}
							className="rounded-[1000px] object-cover mx-10 h-96 w-96"
						/>
						<div className="flex flex-row">
							<CgMail className="size-7 mt-5 mr-2 text-[#33ECD5]" /><p className="text-xl mt-5">kasichonooo@gmail.com</p>
						</div>
				</div>
				<div className="w-2/3 flex-col flex ml-20 items-center justify-center">
					<div className="flex flex-col gap-7">
						<p className="text-5xl">Hello</p>
						<div className="flex flex-row gap-4">
							<p className="text-5xl">I'am</p>
							<p className="text-5xl text-[#41E2DB] font-bold">Kita</p>
						</div>
						<div>
							<p className="text-5xl">Backend Developer</p>
							<p className="text-2xl opacity-50">#just have a little bit frontend</p>
						</div>
						<div className="flex flex-col items-start">
							<p className="text-2xl">-- If you're searching for a highly capable backend developer with a passion for learning new things, look no further. --</p>
							<a href="https://github.com/SaKagiRi" className="bg-[#33ECD5] opacity-80 hover:opacity-100 text-black flex justify-center text-2xl font-semibold rounded-[20px] px-5 py-2 mt-10">Lets see my work.</a>
						</div>
					</div>
				</div>
				<div className="w-1/3 flex justify-center items-center">
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
		<section className="bg-[#0F1217] flex justify-center items-center bg-[url(/photo-00.jpg)] bg-opacity-60 h-screen w-screen">
			<div className="bg-[#3A3C41] flex flex-row w-3/4 h-3/4 bg-opacity-80 rounded-[100px]">
				<div className="w-1/2">
					<h1 className="text-5xl text-[#33ECD5] mt-20 ml-20">About Me</h1>
					<div className="flex flex-col w-full mx-20 pl-20 mt-10">
						<div className="flex flex-row gap-2">
							<p className="text-3xl">Hello my name</p>
							<p className="text-3xl text-[#33ECD5] font-semibold">is</p>
							<p className="text-3xl">Kasichon Nakto,</p>
						</div>
						<div className="flex flex-row gap-2 mt-3 mb-1">
							<p className="text-2xl">you can call me</p>
							<p className="text-2xl text-[#33ECD5] font-semibold">Kita.</p>
						</div>
							<p className="text-2xl/10">I am a Computer Science major at Ramkhamhaeng University and a cadet at 42 Network. My passion lies in controlling everything around me—it feels like true freedom, and I find it absolutely fascinating. My dream is to build a fully automated smart home, where I can control everything exactly the way I want. This passion is what led me to study Computer Science and dive deep into technology.</p>
							<div className="flex flex-row gap-2 mt-40">
								<p className="text-xl text-nowrap">Please save my</p>
								<a href="https://linktr.ee/knxkto?utm_source=linktree_profile_share&ltsid=38f961a0-3c26-4451-b71a-8e4ff75acbb3" className="text-xl text-[#33ECD5] font-semibold border-b-2">Contacts</a>
								<p className="text-xl text-nowrap">or join</p>
								<a href="https://discord.gg/UdxFKNXykR" className="text-xl text-[#33ECD5] font-semibold border-b-2">Discord</a>
								<p className="text-xl text-nowrap">because this page is Temporary website, thank you.</p>

							</div>
					</div>
				</div>
				<div className="w-1/2 flex flex-col justify-center items-center">
					<Image src="/photo-01.jpg" width={600} height={500} alt="photo-01" className="" />
					<p className="mt-10 text-2xl">My Programming Language.</p>
					<div className="flex flex-row gap-7 mt-3">
						<div className="flex flex-col items-center">
							<SiNixos className="text-5xl text-[#33ECD5]" />
							<p className="text-2xl">NixOS</p>
						</div>
						<div className="flex flex-col items-center">
							<SiNextdotjs className="text-5xl text-[#000000]" />
							<p className="text-2xl">Next.js</p>
						</div>
						<div className="flex flex-col items-center">
							<SiCoursera className="text-5xl text-[#1A5FB4]" />
							<p className="text-2xl">Clang</p>
						</div>
						<div className="flex flex-col items-center">
							<VscTerminalBash className="text-5xl text-white" />
							<p className="text-2xl">Shell</p>
						</div>
					</div>
					<div className="flex flex-row gap-7 mt-10">
						<div className="flex flex-col items-center">
							<FaCss3Alt className="text-4xl text-[#1C71D8]" />
						</div>
						<div className="flex flex-col items-center">
							<FaHtml5 className="text-4xl text-[#E34F26]" />
						</div>
						<div className="flex flex-col items-center">
							<TbBrandJavascript className="text-4xl text-[#F7DF1E]" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="bg-[#454B52] h-screen w-screen">
			<div>

			</div>
		</section>
		<section className="bg-black h-screen w-screen">
			<div>

			</div>
		</section>
		<section className="bg-[#454B52] h-screen w-screen">
			<div>

			</div>
		</section>
		<section className="bg-black h-screen w-screen">
			<div>

			</div>
		</section>
	  </section>
  );
}
