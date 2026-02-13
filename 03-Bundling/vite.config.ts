import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import analyzer from "vite-bundle-analyzer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    analyzer({
      analyzerMode: "static",
      openAnalyzer: false,
      reportTitle: "Bundle Analysis",
      fileName: "bundle-report.html",
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
});
