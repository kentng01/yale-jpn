import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currLanguage: 'jp'
  }),

  actions: {
    toggleLanguage() {
      this.currLanguage = this.currLanguage === 'jp' ? 'en' : 'jp'
    }
  }
})

//
// ::::::: EXAMPLE USE CASE :::::::
//
// import { useLanguageStore } from '../stores/languageStore'
// export default {
//   setup() {
//     const languageStore = useLanguageStore()

//     return {
//       language: languageStore
//     }
//   }
// }
// <h1 class="abt-title -jp-b" v-if="language.currLanguage === 'jp'">概要</h1>
// <h1 class="abt-title -en-7" v-else>DETAILS</h1>
//