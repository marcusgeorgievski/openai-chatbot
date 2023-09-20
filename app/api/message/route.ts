import { chatbotPrompt } from "@/lib/chatbot-prompt";
import {
	ChatGPTMessage,
	OpenAIStream,
	OpenAIStreamPayload,
} from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/message";

export async function POST(req: Request) {
	const { messages } = await req.json();

	// test message against schema

	const parsedMessages = MessageArraySchema.parse(messages);

	const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
		return {
			role: message.isUserInput ? "user" : "system",
			content: message.text,
		};
	});

	outboundMessages.unshift({
		role: "system",
		content: chatbotPrompt,
	});

	const payload: OpenAIStreamPayload = {
		model: "gpt-3.5-turbo",
		messages: outboundMessages,

		temperature: 0.4, // creativity
		top_p: 1, // diversity
		frequency_penalty: 0, // repetition of certain words
		presence_penalty: 0, // repetition of words in msg to res ratio or smth
		max_tokens: 150, // max words
		stream: true, // allows readble stream
		n: 1, // number of responses
	};

	const stream = await OpenAIStream(payload);

	return new Response(stream);
}
