const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-32.png": "favicon-32.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-180.png": "favicon-180.png" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-512.png": "favicon-512.png" });

  // Collections
  eleventyConfig.addCollection("posts", (c) =>
    c.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // Date filters (Romanian)
  const LUNI = ["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sep.","oct.","nov.","dec."];
  eleventyConfig.addFilter("dataRo", (d) => {
    const dt = DateTime.fromJSDate(d, { zone: "utc" });
    return `${dt.day} ${LUNI[dt.month - 1]} ${dt.year}`;
  });
  eleventyConfig.addFilter("isoDate", (d) => DateTime.fromJSDate(d, { zone: "utc" }).toISODate());

  // Reading time (approx)
  eleventyConfig.addFilter("citire", (content) => {
    const words = String(content).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Category -> color class (1..6)
  const CATS = ["Echipamente","Produse","Metode de lucru","Facility management","Igienă","Sustenabilitate","Studii de caz","Tendințe"];
  eleventyConfig.addFilter("catColor", (cat) => {
    const i = Math.max(0, CATS.indexOf(cat));
    return "c" + ((i % 6) + 1);
  });

  eleventyConfig.addFilter("slug", (s) =>
    String(s).toLowerCase()
      .replace(/ă/g,"a").replace(/â/g,"a").replace(/î/g,"i").replace(/ș/g,"s").replace(/ț/g,"t")
      .replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")
  );

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("after", (arr, n) => arr.slice(n));
  eleventyConfig.addFilter("byCat", (posts, name) =>
    posts.filter((p) => p.data.category === name)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
