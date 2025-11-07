export default defineNuxtConfig({
  routeRules: {
    '/**': { isr: 1800 },
  },
  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
  },
})
