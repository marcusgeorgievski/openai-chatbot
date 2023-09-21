import { getPlant, getPlants } from "@/lib/data";

interface PlantPageProps {
	params: {
		id: string;
	};
}

export async function generateStaticParams() {
	const plants = getPlants();

	return plants.map((plant) => ({
		id: plant.id.toString(),
	}));
}

export default function PlantPage({ params: { id } }: PlantPageProps) {
	const plant = getPlant(Number(id));
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<img
				src={plant.image}
				className="rounded-lg max-w-[400px] mx-auto "
			/>

			<div>
				<h2 className="text-3xl font-bold">{plant.name}</h2>
				<p className="mb-4 text-slate-500">${plant.price}</p>

				<p className="mb-2 text-slate-800">{plant.description}</p>

				<p className="mb-4 text-slate-800">
					<span className="italic text-slate-500">Care {"->"} </span>{" "}
					{plant.care}
				</p>

				<p className="font-medium">
					<span>Status: </span>
					{plant.availability ? (
						<span className="text-green-600">In Stock</span>
					) : (
						<span className="text-red-600">Sold Out</span>
					)}
				</p>
			</div>
		</div>
	);
}
