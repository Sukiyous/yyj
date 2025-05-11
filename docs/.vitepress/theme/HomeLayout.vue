<template>
  <div class="custom-home-layout">
    <div class="hero-section">
      <h2 class="hero-subtitle gradient-text">药品管理系统</h2>
      <p class="hero-description">易用高效，专业可靠，适用场景丰富的药品管理与医疗信息平台。</p>
      
      <div class="hero-actions">
        <a href="guide/getting-started" class="hero-button primary">快速上手 →</a>
        <a href="guide/getting-started#系统安装" class="hero-button secondary">安装</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑可以在这里添加
</script>

<style scoped>
.custom-home-layout {
  padding: 4rem 1.5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  border: none;
  outline: none;
}

.hero-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  box-shadow: none;
}

.hero-subtitle {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 700;
  margin: 0;
  padding: 0;
  letter-spacing: -1px;
  border: none;
  outline: none;
}

.gradient-text {
  background: var(--custom-gradient-text, linear-gradient(120deg, #42d392 30%, #47c1ff));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--vp-c-text-3);
  margin-top: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 780px;
  border: none;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  justify-content: center;
  border: none;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 20px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-button.primary {
  background-color: var(--vp-c-brand);
  color: white;
  border: 1px solid var(--vp-c-brand-dark);
}

.hero-button.primary:hover {
  background-color: var(--vp-c-brand-light);
}

.hero-button.secondary {
  background-color: var(--vp-c-bg-soft, #f6f6f7);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider, #e0e0e0);
}

.hero-button.secondary:hover {
  background-color: var(--vp-c-bg-mute, #e6e6e7);
}

:deep(.dark) .hero-button.primary {
  color: #0d0d0d;
  font-weight: 600;
}

:deep(.dark) .hero-button.secondary {
  background-color: transparent;
  border: 1px solid var(--vp-c-brand);
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 2.75rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-button {
    width: 100%;
  }
}
</style> 