<script setup>
import { ref } from 'vue'
import TOU from '../../assets/images/creators/ken.jpg'

const kt = ref(TOU)
const ktjp = ref('トウ・ケニー')
const yale = ref("イェール大学 '26")
const ktmajor = ref('コンピューター科学と東アジア研究')
</script>
<template>
  <div class="-bott-l">
    <div class="-author -kt">
      <img :src="kt" class="-kt-x -pfp" alt="Tou" />
      <div class="-desc -r-wrap">
        <h1 class="-kt-namae">{{ ktjp }}</h1>
        <p class="-kt-desc">{{ yale }}</p>
        <p class="-kt-desc">{{ ktmajor }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.-bott-l {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
}

.-pfp {
  width: 6rem;
  border-radius: 50%;
}

.-kt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.625rem;
}

.-l-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.-kt-x {
  border: 5px solid var(--y-blue);
  transition: 300ms ease;
  cursor: pointer;
}

.-kt-namae {
  font-size: 1.375rem;
  color: var(--y-blue);
}

.-kt-desc {
  font-size: 1rem;
}

@media (hover: hover) {
  .-kt-x:hover {
    border: 5px solid var(--2-blue);
    transform: scale(1.025) rotate(-4deg);
  }

  .-kt-x:active {
    transform: scaleX(1) rotate(-4deg);
  }
}
</style>
