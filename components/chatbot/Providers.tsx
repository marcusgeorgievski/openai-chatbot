"use client";
import { MessagesProvider } from "@/context/messages";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: any) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<MessagesProvider>{children}</MessagesProvider>
		</QueryClientProvider>
	);
}
