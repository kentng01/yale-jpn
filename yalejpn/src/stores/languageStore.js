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
