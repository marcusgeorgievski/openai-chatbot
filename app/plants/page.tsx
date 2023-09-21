import { getPlants } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Plants() {
	const plants = getPlants();

	return (
		<div>
			<h2 className="mb-4 text-3xl font-bold">Plants</h2>

			<div className="grid grid-cols-1 gap-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{plants.map((plant) => {
					return (
						<Link
							href={`/plants/${plant.id}`}
							key={plant.id}
							className="p-2 border rounded-md shadow border-slate-200 hover:bg-slate-50"
						>
							<img
								src={plant.image}
								alt=""
								className="object-cover w-full h-48 mb-2 rounded-md"
							/>
							<p className="font-semibold">{plant.name}</p>
							<p className="text-slate-500">${plant.price}</p>

							<p className="text-slate-800">
								{plant.description}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
