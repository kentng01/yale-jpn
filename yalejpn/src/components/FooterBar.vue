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
  <footer class="footer-container">
    <div class="footer-contents">
      <div class="footer-cp">
        <div class="cp-msg">
          <h1 class="-cp -jp" v-if="language.currLanguage === 'jp'">著作権</h1>
          <h1 class="-cp -en-5" v-else>Copyright</h1>
        </div>
        <div class="cp-icon">
          <font-awesome-icon :icon="['far', 'copyright']" class="cp-ic" />
        </div>
        <div class="cp-msg">
          <h1 class="-cp -jp" v-if="language.currLanguage === 'jp'">トウ・クルーズ</h1>
          <h1 class="-cp -en-5" v-else>Tou &amp; Cruz</h1>
        </div>
        <div class="cp-msg">
          <h1 class="-cp -en-5">2023</h1>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  height: 8rem;
  background-color: var(--y-blue);
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-contents {
  max-width: 768px;
  margin: 0 auto;
}

.footer-cp {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
}

.-cp {
  font-size: 1.125rem;
}

.cp-ic {
  font-size: 1.125rem;
  padding-left: 0.25rem;
}
</style>
