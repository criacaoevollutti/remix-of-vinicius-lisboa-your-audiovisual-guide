// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Outside Lovable builds (e.g. Netlify CI), target the Netlify preset instead
  // of the default Cloudflare one so the SSR handler deploys as a Netlify Function.
  // Outside Lovable builds (e.g. Netlify CI), target the Netlify preset instead
  // of the default Cloudflare one so the SSR handler deploys as a Netlify Function.
  nitro: process.env.NETLIFY
    ? {
        preset: "netlify",
        output: {
          dir: "dist",
          serverDir: "dist/.netlify/functions-internal/server",
          publicDir: "dist/public",
        },
      }
    : undefined,
