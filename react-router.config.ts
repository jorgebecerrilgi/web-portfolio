import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return [
      "/",
      "/about-me",
      "/globo-politico",
      "/historico-de-performance",
      "/other-projects",
    ];
  },
} satisfies Config;
