import Link from "next/link";
import NavMenu from "./NavMenu";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
	return (
		<header className="border border-b-slate-300">
			<div className="max-w-[1000px] mx-auto py-2 px-4  flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold ">
					🌱 plantAI
				</Link>

				<nav className="items-center hidden gap-4 sm:gap-6 sm:flex">
					<Link
						href="/"
						className="font-medium transition-all hover:text-blue-600 "
					>
						🏠 Home
					</Link>
					<Link
						href="/plants"
						className="font-medium transition-all hover:text-blue-600 "
					>
						🪴 Plants
					</Link>
					<Link
						href="/about"
						className="font-medium transition-all hover:text-blue-600 "
					>
						ℹ️ About
					</Link>
					<Link
						href="/contact"
						className="font-medium transition-all hover:text-blue-600 "
					>
						📞 Contact
					</Link>
					<Link
						href="https://github.com/marcusgeorgievski"
						className="text-2xl rounded-full"
						target="_blank"
					>
						<AiFillGithub />
					</Link>
				</nav>

				<nav className="flex items-center sm:hidden">
					<NavMenu />
					<Link
						href="https://github.com/marcusgeorgievski"
						className="text-2xl rounded-full"
						target="_blank"
					>
						<AiFillGithub />
					</Link>
				</nav>
			</div>
		</header>
	);
}
