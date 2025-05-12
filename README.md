# 云药家知识库

这是一个使用VitePress构建的药品管理系统知识库网站，提供系统的文档和使用指南。云药家是一个专为药品管理和医疗信息查询设计的综合系统，帮助用户轻松管理药品信息、处方数据和医疗知识。

## 📚 项目概述

云药家知识库包含以下核心内容：

- 💊 **药品管理**：全面的药品信息数据库和管理功能
- 📝 **处方管理**：处方创建、审核和管理功能
- 👥 **用户管理**：多角色权限系统和用户配置
- 🏥 **医保对账**：医保结算和对账管理流程
- 📊 **库存管理**：库存查询、盘点和预警功能
- 📈 **综合查询**：销售分析和统计报表工具

## 🔗 在线访问

项目已部署到GitHub Pages，您可以通过以下链接访问：

**[https://sukiyous.github.io/yyj/](https://sukiyous.github.io/yyj/)**

## 🛠️ 本地开发

### 环境要求

- Node.js 16+
- npm 或 yarn

### 开发命令

```bash
# 克隆仓库
git clone https://github.com/Sukiyous/yyj.git
cd yyj

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态网站
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📂 项目结构

```
yyj/
├── docs/                   # 文档源文件
│   ├── .vitepress/         # VitePress配置
│   │   ├── config.js       # 站点配置
│   │   └── theme/          # 主题自定义
│   ├── api/                # API参考文档
│   ├── components/         # 组件文档
│   ├── guide/              # 使用指南
│   └── public/             # 静态资源
├── .github/                # GitHub配置
│   └── workflows/          # GitHub Actions工作流
└── package.json            # 项目依赖和脚本
```

## 🚀 部署

本项目配置了GitHub Actions自动部署流程：

1. 当代码推送到`main`分支时会自动触发部署
2. GitHub Actions会构建文档并部署到`gh-pages`分支
3. 部署完成后，更改将自动发布到GitHub Pages

部署配置文件：`.github/workflows/deploy.yml`

### 避免常见的链接问题

在VitePress中使用GitHub Pages部署时，请注意以下几点：

1. **基础路径配置**：确保在`.vitepress/config.js`中设置正确的`base`选项，例如：`base: '/yyj/'`
2. **链接格式**：
   - 在Vue组件中使用绝对路径（包含基础路径前缀），例如：`/yyj/guide/getting-started.html`
   - 在Markdown文件中链接其他页面时，可以使用相对路径（如`getting-started.html`）或绝对路径
3. **链接后缀**：所有页面链接都应包含`.html`后缀
4. **404错误排查**：如果遇到404错误，检查链接是否包含了正确的基础路径前缀

## 🤝 贡献指南

我们欢迎社区成员为本项目做出贡献：

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 📖 文档内容

- **指南**：系统介绍、需求规格和使用教程
- **组件**：可复用组件的文档和示例
- **API**：完整的API参考文档和接口说明

## 📄 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系我们：

- GitHub Issues: [提交问题](https://github.com/Sukiyous/yyj/issues)
- Email: 193663514@qq.com

## 版本管理
win+R --cmd
git config --global user.name "user"
git config --global user.name 193663514@qq.com

crusor:
git init# yyj
