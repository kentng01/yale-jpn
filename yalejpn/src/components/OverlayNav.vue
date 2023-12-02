<script setup>
import BottomLeft from './nav-components/BottomLeft.vue'
import BottomRight from './nav-components/BottomRight.vue'
import TopLeft from './nav-components/TopLeft.vue'
import TopRight from './nav-components/TopRight.vue'
</script>
<template>
  <nav class="-nv">
    <BottomLeft />
    <BottomRight />
    <TopLeft />
    <TopRight />
  </nav>
</template>
<style scoped>
.-nv {
  position: relative;
  z-index: 9999;
}
</style>
