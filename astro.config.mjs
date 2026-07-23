// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://septrumperu.com",
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/terminos") && !page.includes("/privacidad"),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
