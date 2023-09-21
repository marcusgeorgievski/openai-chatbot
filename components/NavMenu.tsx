"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavMenu() {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Navigate</NavigationMenuTrigger>
						<NavigationMenuContent className="flex flex-col w-[120px] gap-4 p-3 font-mdeium justify-center items-start">
							<NavigationMenuLink>
								<Link
									href="/"
									className="font-medium transition-all hover:text-blue-600 "
								>
									🏠 Home
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink>
								<Link
									href="/plants"
									className="font-medium transition-all hover:text-blue-600 "
								>
									🪴 Plants
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink>
								<Link
									href="/about"
									className="font-medium transition-all hover:text-blue-600 "
								>
									ℹ️ About
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink>
								<Link
									href="/contact"
									className="font-medium transition-all hover:text-blue-600 "
								>
									📞 Contact
								</Link>
							</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
