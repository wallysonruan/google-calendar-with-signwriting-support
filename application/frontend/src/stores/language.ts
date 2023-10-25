import { defineStore } from 'pinia'

type languagesStoreType = {
  portuguese: boolean
  libras: boolean
}

export const useLanguageStore = defineStore({
  id: 'useLanguageStore',
  state: () =>
    <languagesStoreType>{
      libras: false,
      portuguese: true
    },
  actions: {
    changeLanguage() {
      if (!this.libras) {
        this.libras = true
        this.portuguese = false
      } else {
        this.libras = false
        this.portuguese = true
      }
    }
  }
})
