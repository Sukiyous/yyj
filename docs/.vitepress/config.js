export default {
  title: "云药家知识库",
  description: "云药家系统完整知识库，包含文档、教程和API参考",
  base: '/cloud-pharmacy-docs/',
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
          text: '基础档案',
          items: [
            { text: '商品管理', link: '/guide/medicine-management' },
            { text: '商品入库', link: '/guide/product-stock-in' },
            { text: '商品调价', link: '/guide/product-price-adjustment' }
          ]
        },
        {
          text: '库存管理',
          items: [
            { text: '库存查询', link: '/guide/inventory-query' },
            { text: '库存盘点', link: '/guide/inventory-check' },
            { text: '库存预警', link: '/guide/inventory-alert' }
          ]
        },
        {
          text: '医保对账',
          items: [
            { text: '医保结算', link: '/guide/medical-insurance-settlement' },
            { text: '对账管理', link: '/guide/reconciliation-management' }
          ]
        },
        {
          text: '医保清算',
          items: [
            { text: '医保清算流程', link: '/guide/insurance-clearing-process' },
            { text: '清算报表', link: '/guide/clearing-reports' }
          ]
        },
        {
          text: '综合查询',
          items: [
            { text: '销售分析', link: '/guide/sales-analysis' },
            { text: '处方查询', link: '/guide/prescription-query' },
            { text: '统计报表', link: '/guide/statistical-reports' }
          ]
        },
        {
          text: '设置中心',
          items: [
            { text: '用户管理', link: '/guide/user-management' },
            { text: '角色权限', link: '/guide/role-permissions' },
            { text: '系统参数', link: '/guide/system-parameters' }
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