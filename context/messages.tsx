// "use client";

import { Message } from "@/lib/validators/message";
import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const MessagesContext = createContext<{
	messages: Message[];
	isMessageUpdating: boolean;
	addMessage: (message: Message) => void;
	removeMessage: (id: string) => void;
	updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
	setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
	messages: [],
	isMessageUpdating: false,
	addMessage: () => {},
	removeMessage: () => {},
	updateMessage: () => {},
	setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: nanoid(),
			text: `Hi! How can I help you today?`,
			isUserInput: false,
		},
	]);
	const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

	// add a message to the messages array
	const addMessage = (message: Message) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	// remove a message by id
	const removeMessage = (id: string) => {
		setMessages((prevMessages) =>
			prevMessages.filter((message) => message.id !== id)
		);
	};

	// update a message by id
	const updateMessage = (
		id: string,
		updateFn: (prevText: string) => string
	) => {
		setMessages((prevMessages) =>
			// map over the messages and if the message id matches the id passed in, update the text
			prevMessages.map((message) =>
				message.id === id
					? { ...message, text: updateFn(message.text) }
					: message
			)
		);
	};

	return (
		<MessagesContext.Provider
			value={{
				messages,

				addMessage,
				removeMessage,
				updateMessage,

				isMessageUpdating,
				setIsMessageUpdating,
			}}
		>
			{children}
		</MessagesContext.Provider>
	);
}
