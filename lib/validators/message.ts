import { z } from "zod";

// message validator

export const MessageSchema = z.object({
	id: z.string(),
	isUserInput: z.boolean(),
	text: z.string().min(1).max(400),
});

// array validator

export const MessageArraySchema = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;
