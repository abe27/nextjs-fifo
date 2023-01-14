/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    APP_NAME: `${process.env.APP_NAME}`,
    URL_HOST: `${process.env.API_HOST}`,
    API_HOST: `${process.env.API_HOST}/api/v1`,
    API_TAGRP: process.env.API_TAGRP
  },
};

module.exports = nextConfig;