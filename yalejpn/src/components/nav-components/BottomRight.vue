<script setup>
import { ref } from 'vue'
import CRUZ from '../../assets/images/creators/cruz.jpg'

const dc = ref(CRUZ)
const dcjp = ref('クルーズ・ ダーウィン')
const yale = ref("イェール大学 '26")
const dcmajor = ref('コンピューティングと言語学')
</script>
<template>
  <div class="-bott-r">
    <div class="-author -dc">
      <img :src="dc" class="-dc-x -pfp" alt="Cruz" />
      <div class="-desc -r-wrap">
        <h1 class="-dc-namae">{{ dcjp }}</h1>
        <p class="-dc-desc">{{ yale }}</p>
        <p class="-dc-desc">{{ dcmajor }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.-bott-r {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

.-pfp {
  width: 6rem;
  border-radius: 50%;
}

.-dc {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 0.625rem;
}

.-r-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.-dc-x {
  border: 5px solid var(--y-blue);
  transition: 300ms ease;
  cursor: pointer;
}

.-dc-namae {
  font-size: 1.375rem;
  color: var(--y-blue);
}

.-dc-desc {
  font-size: 1rem;
}

@media (hover: hover) {
  .-dc-x:hover {
    border: 5px solid var(--2-blue);
    transform: scale(1.025) rotate(4deg);
  }

  .-dc-x:active {
    transform: scale(1) rotate(4deg);
  }
}
</style>
