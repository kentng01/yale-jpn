<script setup>
import { ref } from 'vue'

const links = ref([
  { text: 'ホーム', section: '#home' },
  { text: '紹介', section: '#intro' },
  { text: 'ツアー', section: '#tour' },
  { text: '概要', section: '#about' }
])
</script>

<template>
  <div class="-links-wrap">
    <div class="-links-list">
      <a v-for="(link, i) in links" :key="i" :href="link.section" class="-l-x">
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="-arr-up" />
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.-links-wrap {
  position: fixed;
  top: 2rem;
  left: 2rem;
}
.-links-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
}
.-l-x {
  color: var(--y-blue);
  font-size: 1.375rem;
  font-weight: 500;
  transition: 300ms ease;
}
.-arr-up {
  font-size: 1rem;
  font-weight: 300;
}
@media (hover: hover) {
    .-l-x:hover {
        transform: translate(2px, -2px);
    }
}
</style>
