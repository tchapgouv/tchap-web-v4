import { defineConfig } from "vite";

// This module only uses types from the Module API and needs no React runtime.
export default defineConfig({
    build: {
        outDir: "lib",
        target: "es2022",
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
            fileName: "index",
        },
    },
});
