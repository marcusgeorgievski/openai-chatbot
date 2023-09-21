import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Contact() {
	return (
		<div className="">
			<h2 className="mb-4 text-3xl font-bold">Contact</h2>

			<p className="flex items-center gap-2 mt-4">
				👨‍💻 GitHub:{" "}
				<span className="font-medium text-blue-700 hover:underline">
					<Link
						href="https://github.com/marcusgeorgievski"
						className="flex items-center gap-2"
						target="_blank"
					>
						@marcusgeorgievski
						<ExternalLink />
					</Link>
				</span>
			</p>
			<p className="mt-4">
				📞 (fake) Phone:{" "}
				<span className="font-bold">+1 555-555-5555</span>
			</p>
			<p className="mt-4">
				📧 (fake) Email:{" "}
				<span className="font-bold">plantshopowner@plant.com</span>
			</p>
		</div>
	);
}
