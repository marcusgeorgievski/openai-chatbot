import Typer from "@/components/Typer";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const props = {
	words: [
		"plants",
		"prices",
		"plant care",
		"about this site",
		"how to contact me",
	],
	typeSpeed: 100,
	loop: true,
	delaySpeed: 200,
};

export default function Home() {
	return (
		<div className="flex justify-center items-center h-[60vh]">
			<div className="mt-0">
				<h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
					OpenAI Chatbot Demo
				</h3>
				<p className="mb-16 text-lg text-slate-700">
					Ask about <Typer />
				</p>

				<p className="text-slate-700 text-xs">
					{"-> "}
					<Link
						href="/plants"
						className="text-blue-600 underline underline-offset-2 "
					>
						plants here
					</Link>
				</p>
				<p className=" text-slate-700 text-xs">
					{"-> "} chatbot styling not optimized for mobile yet
				</p>
			</div>
		</div>
	);
}
