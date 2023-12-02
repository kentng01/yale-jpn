<script setup>
import { ref } from 'vue'
import TOU from '../../assets/images/creators/ken.jpg'

const kt = ref(TOU)
const ktjp = ref('トウ・ケニー')
</script>
<template>
  <div class="-bott-l">
    <div class="-author -kt">
      <img :src="kt" class="-kt-x -pfp" alt="Tou" />
      <div class="-desc -r-wrap">
        <h1 class="">{{ ktjp }}</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
.-bott-l {
  position: fixed;
  bottom: 3rem;
  left: 3rem;
}

.-pfp {
  width: 6rem;
  border-radius: 50%;
  transform: scaleX(-1);
}

.-kt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.625rem;
}

.-kt-x {
  border: 5px solid var(--y-blue);
}
</style>
