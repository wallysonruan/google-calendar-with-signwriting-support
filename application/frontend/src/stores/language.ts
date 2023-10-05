import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useLanguageStore = defineStore({
  id: 'useLanguageStore',
  state: () => ({
    signwriting: false,
    portuguese: true
  }),
  actions: {
    showSignWriting(){
        if(!this.signwriting){
            this.signwriting = true
            this.portuguese = false
        }else{
            this.signwriting = false
            this.portuguese = true
        }
    }
  }
})
