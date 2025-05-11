import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HomeLayout from './HomeLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeLayout', HomeLayout)
  }
} 