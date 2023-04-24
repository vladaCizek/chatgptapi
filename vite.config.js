import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@constants": path.resolve(__dirname, "src/constants"),
			"@composables": path.resolve(__dirname, "src/composables"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@mixins": path.resolve(__dirname, "src/mixins"),
			"@directives": path.resolve(__dirname, "src/directives"),
			"@components": path.resolve(__dirname, "src/components"),
			"@atoms": path.resolve(__dirname, "src/components/atoms"),
			"@molecules": path.resolve(__dirname, "src/components/molecules"),
			"@organisms": path.resolve(__dirname, "src/components/organisms"),
		},
	},
});
