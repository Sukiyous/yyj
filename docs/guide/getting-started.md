# 快速开始

本指南将帮助您快速上手云药家系统，包括系统安装、配置和基本使用方法。

## 系统安装

### 前端应用安装

```bash
# 克隆项目仓库
git clone https://github.com/Sukiyous/yyj.git

# 进入项目目录
cd yyj

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 后端服务配置

```bash
# 配置环境变量
cp .env.example .env

# 编辑.env文件，设置数据库连接等信息
nano .env

# 启动后端服务
npm run serve
```

## 基本使用

### 登录系统

访问系统首页，使用管理员账号登录：

```
用户名: admin
密码: 首次登录使用初始密码 admin123
```

首次登录后，系统会要求修改密码。

### 药品管理

以下是添加新药品的简单步骤：

```vue
<script setup>
import { ref } from 'vue'
import { MedicineForm } from '@/components'

const medicineData = ref({
  name: '',
  ingredients: '',
  usage: '',
  sideEffects: ''
})

const submitForm = () => {
  // 提交表单逻辑
}
</script>

<template>
  <MedicineForm 
    v-model="medicineData" 
    @submit="submitForm" 
  />
</template>
```

### 处方创建

医生可以通过以下步骤创建处方：

1. 在"处方管理"菜单中选择"新建处方"
2. 搜索并选择患者信息
3. 添加药品和用药说明
4. 提交审核

## 后续步骤

- 阅读[用户指南](/yyj/guide/user-guide.html)了解更多功能
- 查看[API文档](/yyj/api/index.html)了解系统接口
- 访问[常见问题](/yyj/guide/faq.html)获取帮助

::: tip 开发环境
推荐使用Node.js 16+和Vue.js 3进行开发
::: 