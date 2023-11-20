<script>
import { useLanguageStore } from '../stores/languageStore'
export default {
  setup() {
    const languageStore = useLanguageStore()

    return {
      language: languageStore
    }
  }
}
</script>

<template>
  <section id="home" class="splash-body">
    <div class="splash-content -wpx">
      <div class="splash-title">
        <h1 class="splash-yale -jp-b" v-if="language.currLanguage === 'jp'">イェール・大学</h1>
        <h1 class="splash-yale -en-7" v-else>Yale University</h1>
      </div>
      <div class="splash-creds">
        <h2 class="splash-namae -jp" v-if="language.currLanguage === 'jp'">
          「トウとクルーズによるプレゼン」
        </h2>
        <h2 class="splash-namae -en-4 -i" v-else>Presented by Tou and Cruz</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.splash-body {
  min-height: 85vh;
  margin-bottom: calc(100vh - 85vh);
  background-image: linear-gradient(rgba(0, 53, 107, 0.7), rgba(0, 53, 107, 0.7)),
    url('@/assets/images/splash/splash.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 87%, 50% 100%, 100% 87%, 100% 0, 0 0);
}

.splash-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: inherit;
}

.splash-title {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: calc(1 + 9);
}

.splash-yale {
  font-size: 6.5rem;
  color: #fff;
}

.splash-creds {
  padding-top: 0.75rem;
  font-size: 1.375rem;
  color: #fff;
}

.-i {
  font-style: italic;
}
</style>
