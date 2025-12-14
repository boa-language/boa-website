import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: "docs",
  title: "Boa",
  description: "The Boa programming language.",
  head: [['link', { rel: 'icon', href: '/boa.png' }]],
  themeConfig: {
    logo: {
      src: '/boa.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/language/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/language/': [
        {
          text: 'Language',
          items: []
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/boa-language' }
    ],
  },
});