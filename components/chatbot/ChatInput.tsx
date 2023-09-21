"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import { useMutation } from "react-query";
import TextAreaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";
import { MessagesContext } from "@/context/messages";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

export default function ChatInput({ className, ...props }: ChatInputProps) {
	const [input, setInput] = useState<string>("");
	const {
		messages,
		addMessage,
		updateMessage,
		removeMessage,
		setIsMessageUpdating,
	} = useContext(MessagesContext);

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const { mutate: sendMessage } = useMutation({
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
		onMutate: (message: Message) => {
			addMessage(message);
		},
		onSuccess: async (stream) => {
			if (!stream) throw new Error("No stream found");

			const id = nanoid();
			const responseMessage: Message = {
				id,
				text: "",
				isUserInput: false,
			};

			addMessage(responseMessage);
			setIsMessageUpdating(true);

			const reader = stream.getReader();
			const decoder = new TextDecoder();
			let done = false;

			while (!done) {
				const { value, done: doneReading } = await reader.read();
				done = doneReading;
				const chunkValue = decoder.decode(value);

				console.log(chunkValue);
				updateMessage(id, (prevText) => prevText + chunkValue);
			}

			// clean up
			setIsMessageUpdating(false);

			setTimeout(() => {
				textareaRef.current?.focus();
			}, 10);
		},
	});

	const handleFocus = () => {
		textareaRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div {...props} className={cn("border-t border-slate-300", className)}>
			<div className="relative flex-1 mt-4 overflow-hidden border-none rounded-lg outline-none">
				<TextAreaAutosize
					ref={textareaRef}
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
							setInput("");
						}
					}}
					onFocus={handleFocus}
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
