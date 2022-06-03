import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import path from "path";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    preprocess: [
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;',
            },

            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],

    kit: {
        alias: {
            $elements: path.resolve("./src/components/elements"),
            $layout: path.resolve("./src/components/layout"),
            $utils: path.resolve("./src/components/utils"),
            $components: path.resolve("./src/components"),
            $routes: path.resolve("./src/routes"),
            $lib: path.resolve("./src/lib"),
            $styles: path.resolve("./src/styles"),
            $stores: path.resolve("./src/stores"),
        },
        serviceWorker: {
            register: true,
        },
        adapter: adapter(),
        methodOverride: {
            allowed: ["PATCH", "DELETE"],
        },
        vite: {
            server: {
                hmr: process.env.CODESPACES
                    ? {
                          clientPort: 443,
                          protocol: "wss",
                      }
                    : undefined,
            },

            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;',
                    },
                },
            },
        },
        paths: {
            base: "/ISB-Computer-Club-Website",
        },
    },
};

export default config;
