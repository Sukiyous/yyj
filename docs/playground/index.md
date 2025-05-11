# 演练场

云药家系统提供了在线演练环境，你可以在这里尝试各种功能，而无需安装系统。

## 在线演示

:::warning 注意
演练场功能正在开发中，敬请期待
:::

## 交互示例

以下是一个简单的药品搜索组件示例：

```vue
<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])

function searchMedicines() {
  // 这里会连接到API搜索药品
  // 简单模拟结果
  searchResults.value = [
    { id: 1, name: '阿司匹林', usage: '用于缓解轻至中度疼痛' },
    { id: 2, name: '布洛芬', usage: '用于缓解轻至中度疼痛、发热' },
    { id: 3, name: '对乙酰氨基酚', usage: '用于缓解轻至中度疼痛、发热' }
  ].filter(item => 
    item.name.includes(searchQuery.value) || 
    item.usage.includes(searchQuery.value)
  )
}
</script>

<template>
  <div class="search-container">
    <input 
      v-model="searchQuery" 
      @keyup.enter="searchMedicines"
      placeholder="搜索药品名称或用途..."
    />
    <button @click="searchMedicines">搜索</button>
    
    <div v-if="searchResults.length" class="results">
      <div v-for="medicine in searchResults" :key="medicine.id" class="medicine-item">
        <h3>{{ medicine.name }}</h3>
        <p>{{ medicine.usage }}</p>
      </div>
    </div>
  </div>
</template>
```

## 尝试云药家API

你也可以通过Postman或其他API工具试用我们的API：

```bash
# 获取药品列表
GET https://api.cloudpharmacy.example.com/v1/medicines

# 搜索药品
GET https://api.cloudpharmacy.example.com/v1/medicines?search=阿司匹林
``` 