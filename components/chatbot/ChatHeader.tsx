export default function ChatHeader() {
	return (
		<div className="flex items-center justify-start w-full h-full gap-3 text-slate-800">
			<div className="flex flex-col items-start text-sm">
				<p className="text-xs text-slate-700">Chat with</p>
				<div className="flex items-center gap-2">
					<p className="w-2 h-2 bg-green-500 rounded-full" />
					<p className="font-medium">Chatbot Support</p>
				</div>
			</div>
		</div>
	);
}
