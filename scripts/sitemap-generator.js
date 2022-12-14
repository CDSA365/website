const fs = require("fs");
const globby = require("globby");

function addPage(page) {
    const path = page
        .replace("pages", "")
        .replace(".js", "")
        .replace(".tsx", "")
        .replace(".mdx", "")
        .replace("index", "");
    const route = path === "index" ? "" : path;
    return `\n<url>
    <loc>${`https://www.cdsa365.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
    const pages = await globby([
        "pages/**/*{.js,.tsx,.mdx}",
        "!pages/_*.js",
        "!pages/_*.tsx",
        "!pages/api",
        "!pages/404.*",
    ]);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
        .map(addPage)
        .join("\n")}</urlset>`;
    fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
