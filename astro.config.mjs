import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), relativeLinks()],
  site: 'https://40ftslinky.github.io/astro-portfolio',
  base: '/astro-portfolio',
});
