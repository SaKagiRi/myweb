export default function navbar() {
	return (
		<div className="bg-[#454B52] flex justify-between items-center h-24 w-screen border-[#9A9996] border-b-2">
			<div className="flex flex-row ml-6">
				<p className="text-2xl font-medium">echo "</p>
				<p className="text-3xl text-[#33ECD5]">Kasichon Nakto</p>
				<p className="text-2xl font-medium">"</p>
			</div>
			<div className="flex flex-row gap-5">
				<a href="#" className="text-2xl font-semibold border-b-2 text-[#33ECD5]">Home</a>
				<a href="#" className="text-2xl hover:text-[#33ECD5] hover:font-semibold">Blogs</a>
			</div>
			<div className="text-xl gap-6 flex flex-row mr-10">
				<FaDiscord className="mt-1 text-[#33ECD5]" /><a href="#" className="hover:font-semibold hover:text-[#33ECD5]">Discord</a>
				<FaFacebookSquare className="mt-1 text-[#33ECD5]" /><a href="#" className="hover:font-semibold hover:text-[#33ECD5]">Facebook</a>
				<AiFillInstagram className="mt-1 text-[#33ECD5]" /><a href="#" className="hover:font-semibold hover:text-[#33ECD5]">Instagram</a>
				<FaYoutube className="mt-1 text-[#33ECD5]" /><a href="#" className="hover:font-semibold hover:text-[#33ECD5]">Youtube</a>
			</div>
		</div>
	);
}
