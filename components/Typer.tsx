"use client";
import { Typewriter } from "react-simple-typewriter";

const props = {
	words: ["plants", "prices", "plant care", "this site", "how to contact me"],
	typeSpeed: 100,
	loop: true,
	delaySpeed: 2000,
};

export default function Typer() {
	return (
		<span className="font-bold">
			<Typewriter {...props} />
		</span>
	);
}
