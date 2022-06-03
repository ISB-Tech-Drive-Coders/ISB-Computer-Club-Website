import adapter from "@sveltejs/adapter-static";
import path from "path";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

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
        },
        paths: {
            base: process.env.CI ? "/ISB-Computer-Club-Website" : "",
        },
    },
};

export default config;
