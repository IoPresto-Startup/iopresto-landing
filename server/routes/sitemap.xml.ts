export default defineEventHandler((event) => {
	const base = "https://iopresto.com"
	const pages = [
		{ it: "/", en: "/en", priority: "1.0" },
		{ it: "/contattaci", en: "/en/contact-us", priority: "0.8" }
	]

	const urls = pages
		.flatMap((alt) => [
			{ loc: `${base}${alt.it}`, alt },
			{ loc: `${base}${alt.en}`, alt }
		])
		.map(
			({ loc, alt }) => `	<url>
		<loc>${loc}</loc>
		<xhtml:link rel="alternate" hreflang="it-IT" href="${base}${alt.it}" />
		<xhtml:link rel="alternate" hreflang="en" href="${base}${alt.en}" />
		<changefreq>monthly</changefreq>
		<priority>${alt.priority}</priority>
	</url>`
		)
		.join("\n")

	setHeader(event, "content-type", "application/xml; charset=utf-8")
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
})
