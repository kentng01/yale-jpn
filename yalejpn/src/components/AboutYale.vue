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
  <section id="about" class="abt-contents">
    <div class="abt-wrapper">
      <div class="abt-head">
        <h1 class="abt-title -jp-b" v-if="language.currLanguage === 'jp'">概要</h1>
        <h1 class="abt-title -en-7" v-else>DETAILS</h1>
      </div>
      <div class="abt-article-container">
        <article class="abt-article-contents"></article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.abt-wrapper {
  max-width: 768px;
  margin: 0 auto;
}

.abt-contents {
  min-height: 100vh;
}

.abt-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}

.abt-title {
  font-size: 2rem;
  color: #000;
}
</style>
