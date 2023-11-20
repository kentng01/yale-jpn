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
  <section id="intro" class="intro-body -wpx">
    <div class="intro-title">
      <h1 class="intro-head -jp-b" v-if="language.currLanguage === 'jp'">紹介</h1>
      <h1 class="intro-head -en-5" v-else>Introduction</h1>
    </div>
  </section>
</template>

<style scoped>
.intro-body {
  min-height: 100vh;
}
</style>
