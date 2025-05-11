export default {
  title: "云药家知识库",
  description: "云药家系统完整知识库，包含文档、教程和API参考",
  head: [
    ['link', { rel: 'icon', href: '/logo-modern.svg' }]
  ],
  appearance: true,
  themeConfig: {
    logo: '/logo-modern.svg',
    nav: [
      { text: '文档', link: '/guide/', activeMatch: '/guide/' },
      { 
        text: '生态系统', 
        items: [
          { text: '资源', link: '/ecosystem/resources' },
          { text: '合作伙伴', link: '/ecosystem/partners' },
          { text: '工具链', link: '/ecosystem/tools' }
        ] 
      },
      { 
        text: '关于', 
        items: [
          { text: '团队', link: '/about/team' },
          { text: '常见问题', link: '/about/faq' },
          { text: '版本发布', link: '/about/releases' }
        ] 
      },
      { text: '赞助', link: '/sponsor/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '需求规格', link: '/guide/requirements' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '药品管理', link: '/guide/medicine-management' },
            { text: '处方管理', link: '/guide/prescription-management' },
            { text: '用户管理', link: '/guide/user-management' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: 'API概述', link: '/api/' },
            { text: '药品API', link: '/api/medicine' },
            { text: '处方API', link: '/api/prescription' },
            { text: '用户API', link: '/api/user' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件库',
          items: [
            { text: '组件总览', link: '/components/' },
            { text: '表单组件', link: '/components/forms' },
            { text: '数据展示', link: '/components/data-display' },
            { text: '交互组件', link: '/components/interaction' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/cloud-pharmacy' },
      { icon: 'twitter', link: 'https://twitter.com/cloud-pharmacy' },
      { icon: 'discord', link: 'https://discord.gg/cloud-pharmacy' }
    ],
    footer: {
      message: '基于MIT许可发布',
      copyright: '版权所有 © 2023-2025 云药家团队'
    },
    search: {
      provider: 'local'
    },
    outline: [2, 3],
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    notFound: {
      title: '页面未找到',
      quote: '我们似乎找不到您要查找的页面',
      linkText: '返回首页'
    }
  }
} 