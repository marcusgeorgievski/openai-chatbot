import { getPageData, getPlants } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const plants = getPlants();
	const pageData = getPageData();

	return [...plants, ...pageData];
}
