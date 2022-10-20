// Copyright true 2022. All Rights Reserved.
// Node module: suy-frontend
// This file is licensed under the Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.
// License text available at https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  cleanDistDir: true,
  compress: true,
})
