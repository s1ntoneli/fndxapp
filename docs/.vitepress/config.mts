import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Find Next Damn-X App",
  description: "There aren't many apps that make you say \"Damn Good!\" but we'll help you find it.",
  head: [
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', {rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    ['link', {rel: "manifest", href: "/site.webmanifest" }],
    ['meta', { property: 'og:title', content: 'fndx.app - Find Next Damn-X App' }],
    ['meta', { property: 'og:description', content: 'There aren\'t many apps that make you say "Damn Good!" but we\'ll help you find it.' }],
    ['meta', { property: 'og:image', content: 'https://fndx.app/img/hero-image.webp' }],
    ['meta', { property: 'og:url', content: 'https://fndx.app/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'keywords', content: 'Best productivity apps, Top-rated fitness apps, Must-have travel apps, Recommended photo editing apps, Popular music streaming apps, Top language learning apps, Best meditation apps, Essential finance apps, Highly recommended cooking apps, Top social media apps'}],
    ['meta', { name: "robots", content: "index,follow"}],
    ['meta', { name: "twitter:card", content: "summary_large_image"}],
    ['meta', { name: "twitter:site", content: "@s1ntone"}],
    ['meta', { name: "twitter:creator", content: "@s1ntone"}],
    ['meta', { name: "twitter:image", content: "https://fndx.app/img/hero-image.webp"}],
  ],
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/fndx-logo.png',
    nav: [
      { text: 'Share Your Favorite Products', link: '/howtoshareaproduct' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/s1ntone' }
    ],

    footer: {
      message: 'Made by <a href="https://fndx.app" target="_blank">FNDX.app</a>',
      copyright: '<a href="https://cleanclip.cc" target="_blank">Find Your Next DAMN-X App🔥</a>'
    }
  },
  sitemap: {
    hostname: 'https://fndx.com',
    lastmodDateOnly: false
  }
})
