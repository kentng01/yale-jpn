<script setup>
import { ref } from 'vue'
import CRUZ from '../../assets/images/creators/cruz.jpg'

const dc = ref(CRUZ)
const dcjp = ref('クルーズ・ ダーウィン')
</script>
<template>
  <div class="-bott-r">
    <div class="-author -dc">
      <img :src="dc" class="-dc-x -pfp" alt="Cruz" />
      <div class="-desc -r-wrap">
        <h1 class="-dc-namae">{{ dcjp }}</h1>
        <p class="-dc-desc"></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.-bott-r {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}

.-pfp {
  width: 6rem;
  border-radius: 50%;
  transform: scaleX(1);
}

.-dc {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 0.625rem;
}

.-l-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.-dc-x {
  border: 5px solid var(--y-blue);
}
</style>
