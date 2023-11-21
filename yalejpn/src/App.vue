<script setup>
import NavBar from './components/NavBar.vue'
import SplashHome from './components/SplashHome.vue'
import IntroYale from './components/IntroYale.vue'
import VideoTour from './components/VideoTour.vue'
</script>

<template>
  <div id="yj">
    <div class="yj-nav">
      <NavBar />
    </div>
    <main class="yj-tour">
      <SplashHome />
      <IntroYale />
      <VideoTour />
    </main>
  </div>
</template>

<style scoped></style>
