<template>
  <div class="VPL">
    <div class="VPL-container">
      <CustomNavBar>
        <template #navbar-right>
          <slot name="navbar-right"></slot>
        </template>
      </CustomNavBar>
      
      <div class="VPL-content">
        <div class="VPL-main">
          <slot></slot>
        </div>
      </div>
      
      <div class="VPL-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<style scoped>
.VPL {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.VPL-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.VPL-content {
  flex: 1;
  padding-top: calc(var(--vp-nav-height) + 24px);
}

.VPL-main {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 24px;
}

.VPL-footer {
  padding: 32px 24px;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 64px;
}
</style> 