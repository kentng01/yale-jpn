<script setup>
import { ref } from 'vue'

const ty = ref('トウとクルーズによって作成されました。❤️')
</script>

<template>
  <footer class="-creds-x">
    <div class="-ty-msg -wpx">
      <p class="-ty-cc">
        {{ ty }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.-creds-x {
  padding: 4rem 0 8rem 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url('@/assets/images/creators/yourname.jpg') no-repeat scroll center/cover;
}

.-ty-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}

.-ty-cc {
  font-size: 1.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 3px solid #000;
}
</style>
