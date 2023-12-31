import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function Chat() {
	return (
		<Accordion
			type="single"
			collapsible
			className="fixed overflow-hidden bg-white border rounded-md right-8 w-80 bottom-8 border-slate-200"
		>
			<AccordionItem value="item-1">
				<div className="flex flex-col w-full h-full">
					<AccordionTrigger className="px-6 py-3 border-b border-slate-200">
						<ChatHeader />
					</AccordionTrigger>

					<AccordionContent>
						<div className="flex flex-col h-80">
							<ChatMessages className="" />
							<ChatInput className="px-4" />
						</div>
					</AccordionContent>
				</div>
			</AccordionItem>
		</Accordion>
	);
}
