import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ZDocs05",
  description: "Things worth remembering",
  cleanUrls: true,
  base: '/docs/',
  themeConfig: {
    search: { provider: 'local' },

    nav: [
      {
        text: 'Docs',
        items: [
          { text: 'Notes', link: '/notes/' },
          { text: 'Cheatsheets', link: '/cheatsheets/' },
          { text: 'Learn', link: '/learn/' },
          { text: 'Projects', link: '/projects/' },
        ],
      },
      // { text: 'Blog', link: '/blog/' },
      { text: 'Resume', link: 'https://zako05.dev/online-cv', target: '_self' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: 'Git',
          collapsed: true,
          items: [
            { text: 'GitHub Merge Queue', link: '/notes/git/github-merge-queue' },
          ],
        },
        { text: 'CI: GitHub Actions', collapsed: true, items: [] },
        { text: 'JavaScript', collapsed: true, items: [] },
        { text: 'TypeScript', collapsed: true, items: [] },
        { text: 'Python', collapsed: true, items: [] },
        { text: 'Playwright', collapsed: true, items: [] },
        { text: 'AI', collapsed: true, items: [] },
      ],
      '/cheatsheets/': [
        {
          text: 'Cheatsheets',
          items: [{ text: 'Overview', link: '/cheatsheets/' }],
        }
      ],
      '/learn/': [
        {
          text: "Learn",
          items: [{ text: 'Overview', link: '/learn/' }],
        }
      ],
      '/projects/': [
        {
          text: "Projects",
          items: [{ text: 'Overview', link: '/projects/' }],
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zako05' }
    ]
  }
})
