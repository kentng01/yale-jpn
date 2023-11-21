<script>
import { useLanguageStore } from '../stores/languageStore'

export default {
  setup() {
    const languageStore = useLanguageStore()

    const toggleLanguage = () => {
      languageStore.toggleLanguage()
    }

    const navItems = [
      { link: '#home', jp: 'ホーム', en: 'Home' },
      { link: '#intro', jp: '紹介', en: 'Intro' },
      { link: '#tour', jp: 'ツアー', en: 'Tour' },
      { link: '#about', jp: '概要', en: 'About' },
      { link: '#creators', jp: '僕達', en: 'Creators' }
    ]

    return {
      language: languageStore,
      toggleLanguage,
      navItems
    }
  }
}
</script>

<template>
  <header class="nav-container">
    <nav class="nav-bar">
      <ul class="nav-list">
        <li class="nav-items" v-for="(item, i) in navItems" :key="i">
          <a :href="item.link" id="__jp__" class="nav-link" v-if="language.currLanguage === 'jp'">
            {{ item.jp }}
          </a>
          <a id="__en__" class="nav-link" v-else>
            {{ item.en }}
          </a>
        </li>
        <li id="jp-en" class="btn-wrapper -flag">
          <button class="lang-btn" @click="toggleLanguage">
            {{ language.currLanguage === 'jp' ? '🇯🇵' : '🇺🇸' }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-container {
  position: absolute;
  width: 100%;
  z-index: calc(1 + 99);
}

.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
}

.nav-link {
  font-size: 1.25rem;
}

.lang-btn {
  font-size: 1.625rem;
  transition: 300ms ease;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: 250ms;
  display: inline-block;
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 300ms ease;
}

.sakura-bg {
  position: fixed;
  background-repeat: no-repeat;
  bottom: 0;
  right: 0;
  width: 10rem;
  height: 10rem;
  opacity: 0.6;
}

#jp-en {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.625rem;
  position: fixed;
  bottom: 0.5rem;
  right: 1rem;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  background: linear-gradient(rgba(0, 119, 204, 0.7), rgba(0, 119, 204, 0.7));
  width: 3.25rem;
  z-index: calc(1 + 9);
}

@media (hover: hover) {
  .nav-link:hover::before {
    width: 100%;
  }

  .lang-btn:hover {
    transform: scale(1.075);
  }
}
</style>
