---
layout: home
title: 云药家知识库
---

<div style="height: 80px"></div>

<HomeLayout />

<div style="height: 80px"></div>

<div class="features-container">
  <div class="features">
    <div class="feature">
      <h2>💊 药品管理</h2>
      <p>全面的药品信息数据库，包含药品名称、成分、用法用量、适应症和禁忌症等详细信息。</p>
    </div>
    <div class="feature">
      <h2>📝 处方管理</h2>
      <p>便捷的处方创建、审核和管理功能，支持医生、药师和患者多角色协作。</p>
    </div>
    <div class="feature">
      <h2>👥 用户管理</h2>
      <p>完善的用户权限系统，根据不同角色提供差异化功能和访问控制。</p>
    </div>
    <div class="feature">
      <h2>🔍 信息检索</h2>
      <p>强大的搜索功能，快速查找相关药品和医疗信息。</p>
    </div>
    <div class="feature">
      <h2>📱 响应式设计</h2>
      <p>完美适配各种设备，提供一致的用户体验。</p>
    </div>
    <div class="feature">
      <h2>🌐 API接口</h2>
      <p>丰富的RESTful API接口，便于与其他医疗系统集成。</p>
    </div>
  </div>
</div>

<style>
.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature {
  background-color: transparent;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.feature p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

html.dark .feature {
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

html.dark .feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .features {
    grid-template-columns: 1fr;
  }
}

/* 隐藏标题 */
.vp-doc h1 {
  display: none;
}

/* 深色模式切换按钮增强 */
.VPSwitchAppearance {
  transform: scale(1.1);
}

html.dark img {
  filter: brightness(0.9);
}
</style>

# 云药家知识库

欢迎访问云药家系统知识库。本站点包含了关于云药家系统的所有文档、使用指南和API参考。

## 什么是云药家系统？

云药家是一个专为药品管理和医疗信息查询设计的综合系统，帮助用户轻松管理药品信息、处方数据和医疗知识。

## 快速导航

- [系统介绍](/cloud-pharmacy-docs/guide/index.html) - 了解云药家系统的核心功能
- [快速开始](/cloud-pharmacy-docs/guide/getting-started.html) - 安装和基本使用指南
- [组件库](/cloud-pharmacy-docs/components/index.html) - 浏览系统提供的所有组件

::: tip 提示
这是一个正在建设中的知识库，内容会持续更新。
:::
