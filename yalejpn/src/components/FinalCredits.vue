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
  padding: 4rem 0 10rem 0;
}

.-ty-msg {
  display: flex;
  align-items: center;
  justify-content: center;
}

.-ty-cc {
  font-size: 1.25rem;
}
</style>
