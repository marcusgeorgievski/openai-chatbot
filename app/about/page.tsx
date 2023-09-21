export default function About() {
	return (
		<div className="">
			<h2 className="mb-4 text-3xl font-bold">About</h2>

			<div className="flex flex-col gap-4">
				<p>
					🤖 This website is a mock plant shop that demonstrates how
					an AI chatbot can be integrated to assist customers. It uses
					the OpenAI API to bring the power of ChatGPT to any site.
				</p>

				<p>
					🦾 The bot can be fed any data such as a sitemap or json to
					provide the customer with accurate information about the
					site&apos;s content, products, navigation, etc, to finetune
					the response.
				</p>

				<p>
					📝 For a site like this, the sitemap can be dynamically
					generated to provide up to date information for the user.
					This can be done by using the built-in Next.js sitemap
					generate, or other generators online. You can use a static
					json array or dynamically create one from a database query.
				</p>

				<pre className="px-6 py-2 text-sm bg-gray-200 rounded-lg">
					{`
// app/sitemap.ts


import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: "https://site.com/plants/1",
        id: 1
        plant: "Fiddle Fig",
        price: 35,
        description: "Fiddle figs are foo and bar.."
        care: "You can care for a fiddle fig by...",
    },
    ...
  ]
}
                    `}
				</pre>

				<p>
					The Next.js function above will generate the following
					sitemap
				</p>

				<pre className="px-6 py-2 text-sm bg-gray-200 rounded-lg">
					{`
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://site.com/plants/1</loc>
    <url>1</url>
    <plant>Fiddle Fig</plant>
    <price>35</price>
    <description>Fiddle figs are foo and bar...</description>
    <care>You can care for a fiddle fig by...</care>
  </url>

  <url>
    {more plants...}
  </url>
</urlset>
                    `}
				</pre>

				<p>Why plants? I like plants.</p>
			</div>
		</div>
	);
}
