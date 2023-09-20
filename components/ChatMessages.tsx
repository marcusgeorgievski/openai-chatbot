"use client";
import { MessagesContext } from "@/context/messages";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import MarkdownLite from "./MarkdownLite";

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ChatMessages({ className, ...props }: ChatInputProps) {
	const { messages } = useContext(MessagesContext);
	const inverseMessages = [...messages];

	return (
		<div
			{...props}
			className={cn(
				"flex flex-col-reverse flex-1 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pb-2",
				className
			)}
		>
			<div className="flex-1 flex-grow">
				{inverseMessages.map((message) => (
					<div
						key={message.id}
						className={cn(
							"flex flex-col items-start justify-start px-4 py-1",
							{ "items-end": message.isUserInput }
						)}
					>
						<div
							className={cn("flex, items-end", {
								"justify-end": message.isUserInput,
							})}
						>
							<div
								className={cn(
									"flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden rounded-lg shadow",
									{
										"bg-blue-500 text-white":
											message.isUserInput,
										"bg-gray-200 text-slate-800":
											!message.isUserInput,
									}
								)}
							>
								<p className={cn("px-4 py-2")}>
									<MarkdownLite text={message.text} />
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
