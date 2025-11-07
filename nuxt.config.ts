export default defineNuxtConfig({
  routeRules: {
    '/**': { isr: 60 },
  },
  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
  },
})
