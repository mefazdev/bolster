import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Studio is published at https://bolster-blog.sanity.studio
  // (lowercase letters, numbers and hyphens only)
  studioHost: "bolster-blog",
  deployment: {
    appId: 'fw7yuq2rhoe88rh9l5uv0vyj',
  },
});
