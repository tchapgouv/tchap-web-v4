/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 *
 */

import path, { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, esmExternalRequirePlugin } from "vite";
import dts from "vite-plugin-dts";
import alias from "@rollup/plugin-alias";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // :TCHAP:
    // Use for vite during local dev
    resolve: {
        alias: {
            "@vector-im/compound-web": resolve(__dirname, "../../node_modules/compound-web-tchap"),
        },
    },
    // end :TCHAP:
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "Element Web Shared Components",
            // the proper extensions will be added
            fileName: "element-web-shared-components",
        },
        outDir: "dist",
        cssCodeSplit: false,
        rolldownOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                "@vector-im/compound-design-tokens",
                "@vector-im/compound-web",
                "react-virtuoso",
                "react-resizable-panels",
            ],
            plugins: [
                // needs to transform at build time the import from compound-web to compound-web-tchap
                // since it is marked as an external dependencies which
                alias({
                    entries: [{ find: "@vector-im/compound-web", replacement: "compound-web-tchap" }],
                }),
                esmExternalRequirePlugin({
                    external: ["react", "react-dom"],
                }),
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    "react": "react",
                    "@vector-im/compound-design-tokens": "compoundDesignTokens",
                    "compound-web-tchap": "compoundWeb",
                    "react-virtuoso": "reactVirtuoso",
                    "react-resizable-panels": "reactResizablePanels",
                },
            },
        },
    },
    plugins: [
        dts({
            rollupTypes: true,
            include: ["src/**/*.{ts,tsx}"],
            exclude: ["src/**/*.test.{ts,tsx}", "src/**/*.stories.{ts,tsx}"],
            copyDtsFiles: true,
        }),
    ],
});
