import Chat from "@/components/chatbot/Chat";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/chatbot/Providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Chatbot Demo",
	description: "OpenAI GPT-3 chatbot demo",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Providers>
				<body className={inter.className}>
					<Header />
					<main className="max-w-[1000px] mx-auto px-4 py-8">
						{children}
					</main>
					<Chat />
				</body>
			</Providers>
		</html>
	);
}
