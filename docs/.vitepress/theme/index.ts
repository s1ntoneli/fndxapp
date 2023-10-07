// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Newsletter from './Newsletter.vue'
import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-hero-after': () => h(Newsletter)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
