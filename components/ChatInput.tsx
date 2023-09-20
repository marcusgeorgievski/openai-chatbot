"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useState } from "react";
import { useMutation } from "react-query";
import TextAreaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

export default function ChatInput({ className, ...props }: ChatInputProps) {
	const [input, setInput] = useState<string>("");

	const { mutate: sendMessage, isLoading } = useMutation({
		mutationFn: async (message: Message) => {
			const response = await fetch("/api/message", {
				method: "POST",
				body: JSON.stringify({ messages: [message] }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			return response.body;
		},
		onSuccess: async (stream) => {
			if (!stream) throw new Error("No stream found");

			const reader = stream.getReader();
			const decoder = new TextDecoder();
			let done = false;

			while (!done) {
				const { value, done: doneReading } = await reader.read();
				done = doneReading;
				const chunkValue = decoder.decode(value);

				// console.log(chunkValue);
			}

			console.log("success: ", stream);
			setInput("");
		},
	});

	return (
		<div {...props} className={cn("border-t border-slate-300", className)}>
			<div className="relative flex-1 mt-4 overflow-hidden border-none rounded-lg outline-none">
				<TextAreaAutosize
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();

							const message: Message = {
								id: nanoid(),
								isUserInput: true,
								text: input,
							};

							sendMessage(message);
						}
					}}
					rows={2}
					maxRows={4}
					autoFocus
					placeholder="Write a message..."
					className="block w-full px-1 py-2 text-sm border-0 resize-none peer disabled:opacity-50 pr-14 bg-slate-100 text-slate-800 focus:ring-0 sm:leading-6"
				/>
			</div>
		</div>
	);
}
