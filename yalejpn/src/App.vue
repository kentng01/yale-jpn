<script setup>
import NavBar from './components/NavBar.vue'
import SplashHome from './components/SplashHome.vue'
import IntroYale from './components/IntroYale.vue'
import VideoTour from './components/VideoTour.vue'
import AboutYale from './components/AboutYale.vue'
import CreatorsPage from './components/CreatorsPage.vue'
import FooterBar from './components/FooterBar.vue'
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
      <AboutYale />
      <CreatorsPage />
    </main>
    <div class="yj-footer">
      <FooterBar />
    </div>
  </div>
</template>

<style scoped>

@keyframes fade {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
}

#yj {
    animation: fade 1.5s linear forwards;
}

</style>
