import { defineStore } from 'pinia'

export const useAlertStore = defineStore({
  id: 'useAlertStore',
  state: () => ({
    onHold: true
  }),
  actions: {
    showOnHold() {
      this.onHold = !this.onHold
      console.log(this.onHold)
    }
  }
})
