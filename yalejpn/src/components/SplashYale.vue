<script setup>
import { ref } from 'vue'

const yale = ref('イェール・大学')
const creds = ref('：トウとクルーズによるプレゼン：')
</script>

<template>
  <main id="home" class="-splash-yale">
    <div class="-splash-container -wpx">
      <div class="-splash-title">
        <h1 class="-t-x">{{ yale }}</h1>
        <p class="-c-x">{{ creds }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.-splash-yale {
  min-height: 100vh;
  background:
    linear-gradient(var(--rgba-2)),
    url('@/assets/images/splash/splash-fastload.jpg') no-repeat scroll center/cover;
  clip-path: polygon(0 75%, 50% 85%, 100% 75%, 100% 0, 0 0);
}

.-splash-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 6rem;
}

.-t-x {
  font-size: 6.5rem;
}

.-c-x {
  padding-top: 0.5rem;
  font-size: 2rem;
}
</style>
