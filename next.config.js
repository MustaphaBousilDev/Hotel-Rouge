/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/api-reference/next.config.js/introduction
//const env = !process.env.SKIP_ENV_VALIDATION ? (await import('./app/env/server.mjs')).env : process.env;
const nextConfig = {
  // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  //reactStrictMode: true, is meant to be used in development mode only
  reactStrictMode: true,
  //swcMinify: true, is meant to be used in production mode only
  swcMinify: true,
  //i18n is meaning internationalization
  i18n:{
       locales:['fr'],
       defaultLocale:'fr',
  },
}

module.exports = nextConfig
