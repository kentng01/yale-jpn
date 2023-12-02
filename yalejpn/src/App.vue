<script setup>
import MobileOverlay from './components/MobileOverlay.vue'
import OverlayNav from './components/OverlayNav.vue'
import SplashYale from './components/SplashYale.vue'
import IntroBit from './components/IntroBit.vue'
import TourVideo from './components/TourVideo.vue'
import AboutInfo from './components/AboutInfo.vue'
import FinalCredits from './components/FinalCredits.vue'
</script>

<template>
  <div id="yj">
    <MobileOverlay msg="Error" />
    <OverlayNav />
    <SplashYale />
    <IntroBit />
    <TourVideo />
    <AboutInfo />
    <FinalCredits />
  </div>
</template>

<style scoped>
#yj {
  animation: fade 3s linear forwards;
}
</style>
