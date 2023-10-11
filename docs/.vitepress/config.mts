import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discover WoW Mac Apps",
  description: "There are some productivity apps on macOS that make you say \"Wow!\", we'll help you find them.",
  head: [
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', {rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    ['link', {rel: "manifest", href: "/site.webmanifest" }],
    ['meta', { property: 'og:title', content: 'fndx.app - Find Next Damn-Good App' }],
    ['meta', { property: 'og:description', content: 'There are some productivity apps on macOS that make you say \"Wow!\", we\'ll help you find them.' }],
    ['meta', { property: 'og:image', content: 'https://fndx.app/img/hero-image.webp' }],
    ['meta', { property: 'og:url', content: 'https://fndx.app/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'keywords', content: 'Best productivity apps, Top-rated fitness apps, Must-have travel apps, Recommended photo editing apps, Popular music streaming apps, Top language learning apps, Best meditation apps, Essential finance apps, Highly recommended cooking apps, Top social media apps'}],
    ['meta', { name: "robots", content: "index,follow"}],
    ['meta', { name: "twitter:card", content: "summary_large_image"}],
    ['meta', { name: "twitter:site", content: "@s1ntone"}],
    ['meta', { name: "twitter:creator", content: "@s1ntone"}],
    ['meta', { name: "twitter:image", content: "https://fndx.app/img/hero-image.webp"}],
    ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,400;12..96,600;12..96,800&display=swap' }],
  ],
  appearance: "force-dark",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/fndx-logo2.png',
    nav: [
      { text: 'Share Your Favorite Products', link: '/howtoshareaproduct' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/s1ntone' }
    ],

    footer: {
      message: `      <div class="flex justify-center items-center">
      <a href="https://www.producthunt.com/posts/find-next-wow-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-find&#0045;next&#0045;wow&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=418594&theme=light" alt="Find&#0032;Next&#0032;Wow&#0032;App - Find&#0032;your&#0032;next&#0032;&#0034;Wow&#0034;&#0032;App&#0044;&#0032;for&#0032;100&#0037;&#0032;Free&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
    </div>
    <br/>
    Made by <a href="https://fndx.app" target="_blank">FNDX.app</a>`,
      copyright: '<a href="https://cleanclip.cc" target="_blank">Find Your Next DAMN-GOOD App🔥</a>'
    }
  },
  sitemap: {
    hostname: 'https://fndx.app',
    lastmodDateOnly: false
  }
})
