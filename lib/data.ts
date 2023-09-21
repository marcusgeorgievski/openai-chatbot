interface Plant {
	id: number;
	name: string;
	price: number;
	description: string;
	care: string;
	availability: boolean;
	url: string;
	image: string;
}

export const plants: Plant[] = [
	{
		id: 1,
		name: "Fiddle Fig",
		price: 49.99,
		description: "A popular indoor tree with large, glossy leaves.",
		care: "Water when the top inch of soil is dry. Requires bright, indirect sunlight.",
		availability: true,
		url: "/plants/1",
		image: "https://gardenerspath.com/wp-content/uploads/2021/01/Fiddle-Leaf-Fig-Plant-in-a-Small-Pot.jpg",
	},
	{
		id: 2,
		name: "Corkscrew Albuca",
		price: 24.99,
		description: "Known for its unique spiral leaves.",
		care: "Water sparingly and allow soil to dry between waterings. Best in bright, indirect light.",
		availability: true,
		url: "/plants/2",
		image: "https://garden.org/pics/2017-07-04/ljones26/9b7a1a.jpg",
	},
	{
		id: 3,
		name: "Tradescantia",
		price: 19.99,
		description: "A fast-growing plant with colorful foliage.",
		care: "Keep the soil slightly moist. Thrives in moderate to bright, indirect light.",
		availability: true,
		url: "/plants/3",
		image: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/feeling-flirty-tradescantia-purple-tradescantia-tradescantia-hybrid-proven-winners_17350.jpg",
	},
	{
		id: 4,
		name: "Snake Plant",
		price: 27.99,
		description: "An easy-care plant with tall, green leaves.",
		care: "Water every 2-6 weeks. Can tolerate low light conditions.",
		availability: false,
		url: "/plants/4",
		image: "https://thumbs.dreamstime.com/b/variegated-snake-plant-isolated-white-clipping-path-sansevieria-trifasciata-209547488.jpg",
	},
	{
		id: 5,
		name: "Orchid",
		price: 39.99,
		description: "A delicate plant with stunning flowers.",
		care: "Water using the 'ice cube method' once a week. Requires bright, indirect light.",
		availability: true,
		url: "/plants/5",
		image: "https://hips.hearstapps.com/hmg-prod/images/vanda-orchid-types-1587739024.jpg",
	},
	{
		id: 6,
		name: "Rubber Plant",
		price: 34.99,
		description: "Features large, glossy green leaves.",
		care: "Water when the top inch of soil is dry. Prefers indirect light.",
		availability: false,
		url: "/plants/6",
		image: "https://media.istockphoto.com/id/146961490/photo/rubber-plant.jpg?s=612x612&w=0&k=20&c=Obqi9pc8u-3by0AasBqBuhBudzhkQnz5ePEpK6IoEZo=",
	},
];

interface Page {
	page: string;
	description: string;
	content: any;
	url: string;
}

export const pageData: Page[] = [
	{
		page: "Home",
		description: "Plant Shop OpenAI Chatbot Home Page",
		content:
			"Ask about our plants, their prices, how to care, this site, and how to contact me.",
		url: "/",
	},
	{
		page: "About",
		description:
			"The purpose of this site and how OpenAI API is used to leverage the power of ChatGPT on any site.",
		content: `
🤖 This website is a mock plant shop that demonstrates how
an AI chatbot can be integrated to assist customers. It uses
the OpenAI API to bring the power of ChatGPT to any site.



🦾 The bot can be fed any data such as a sitemap or json to
provide the customer with accurate information about the
site&apos;s content, products, navigation, etc, to finetune
the response.



📝 For a site like this, the sitemap can be dynamically
generated to provide up to date information for the user.
This can be done by using the built-in Next.js sitemap
generate, or other generators online. You can use a static
json array or dynamically create one from a database query.
`,
		url: "/",
	},
	{
		page: "Contact",
		description: "Contact the owner",
		content: {
			github: "https://github.com/marcusgeorgievski",
			phone: "555-555-5555",
			email: "plantshopowner@plant.com",
		},
		url: "/",
	},
];

export function getPlant(id: number): Plant {
	const plant = plants.find((plant) => plant.id === id);
	if (!plant) {
		throw new Error(`No plant found with id ${id}`);
	}
	return plant;
}

export function getPlants(): Plant[] {
	return plants;
}

export function getPageData(): Page[] {
	return pageData;
}

export const plantsXML = `
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <row>
    <id>1</id>
    <name>Fiddle Fig</name>
    <price>49.99</price>
    <description>A popular indoor tree with large, glossy leaves.</description>
    <care>Water when the top inch of soil is dry. Requires bright, indirect sunlight.</care>
    <availability>true</availability>
    <url>/plants/1</url>
    <image>https://gardenerspath.com/wp-content/uploads/2021/01/Fiddle-Leaf-Fig-Plant-in-a-Small-Pot.jpg</image>
  </row>
  <row>
    <id>2</id>
    <name>Corkscrew Albuca</name>
    <price>24.99</price>
    <description>Known for its unique spiral leaves.</description>
    <care>Water sparingly and allow soil to dry between waterings. Best in bright, indirect light.</care>
    <availability>true</availability>
    <url>/plants/2</url>
    <image>https://garden.org/pics/2017-07-04/ljones26/9b7a1a.jpg</image>
  </row>
  <row>
    <id>3</id>
    <name>Tradescantia</name>
    <price>19.99</price>
    <description>A fast-growing plant with colorful foliage.</description>
    <care>Keep the soil slightly moist. Thrives in moderate to bright, indirect light.</care>
    <availability>true</availability>
    <url>/plants/3</url>
    <image>https://www.gardendesign.com/pictures/images/900x705Max/site_3/feeling-flirty-tradescantia-purple-tradescantia-tradescantia-hybrid-proven-winners_17350.jpg</image>
  </row>
  <row>
    <id>4</id>
    <name>Snake Plant</name>
    <price>27.99</price>
    <description>An easy-care plant with tall, green leaves.</description>
    <care>Water every 2-6 weeks. Can tolerate low light conditions.</care>
    <availability>false</availability>
    <url>/plants/4</url>
    <image>https://thumbs.dreamstime.com/b/variegated-snake-plant-isolated-white-clipping-path-sansevieria-trifasciata-209547488.jpg</image>
  </row>
  <row>
    <id>5</id>
    <name>Orchid</name>
    <price>39.99</price>
    <description>A delicate plant with stunning flowers.</description>
    <care>Water using the &#x27;ice cube method&#x27; once a week. Requires bright, indirect light.</care>
    <availability>true</availability>
    <url>/plants/5</url>
    <image>https://hips.hearstapps.com/hmg-prod/images/vanda-orchid-types-1587739024.jpg</image>
  </row>
  <row>
    <id>6</id>
    <name>Rubber Plant</name>
    <price>34.99</price>
    <description>Features large, glossy green leaves.</description>
    <care>Water when the top inch of soil is dry. Prefers indirect light.</care>
    <availability>false</availability>
    <url>/plants/6</url>
    <image>https://media.istockphoto.com/id/146961490/photo/rubber-plant.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Obqi9pc8u-3by0AasBqBuhBudzhkQnz5ePEpK6IoEZo=</image>
  </row>
</root>
`;

export const pageDataXML = `
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <page>
    <page>Home</page>
    <description>Plant Shop OpenAI Chatbot Home Page</description>
    <content>Ask about our plants, their prices, how to care, this site, and how to contact me.</content>
    <url>/</url>
  </page>
  <page>
    <page>About</page>
    <description>The purpose of this site and how OpenAI API is used to leverage the power of ChatGPT on any site.</description>
    <content>
🤖 This website is a mock plant shop that demonstrates how
an AI chatbot can be integrated to assist customers. It uses
the OpenAI API to bring the power of ChatGPT to any site.



🦾 The bot can be fed any data such as a sitemap or json to
provide the customer with accurate information about the
site&amp;apos;s content, products, navigation, etc, to finetune
the response.



📝 For a site like this, the sitemap can be dynamically
generated to provide up to date information for the user.
This can be done by using the built-in Next.js sitemap
generate, or other generators online. You can use a static
json array or dynamically create one from a database query.
</content>
    <url>/about</url>
  </page>
  <page>
    <page>Contact</page>
    <description>Contact the owner</description>
    <content>
      <github>https://github.com/marcusgeorgievski</github>
      <phone>555-555-5555</phone>
      <email>plantshopowner@plant.com</email>
    </content>
    <url>/contact</url>
  </page>
  <page>
    <page>Plants</page>
    <description>Plant page that lists all plants</description>
    <content>
      This page contains the plants and a brief overview of each one. Direct the user to here to view plants
    </content>
    <url>/plants</url>
  </page>
</root>
`;
