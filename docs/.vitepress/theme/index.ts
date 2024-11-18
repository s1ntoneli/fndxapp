// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Newsletter from './Newsletter.vue'
import AdComponent from './AdComponent.vue'
import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-hero-after': () => h(Newsletter),
      'sidebar-nav-after': () => h(AdComponent),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
