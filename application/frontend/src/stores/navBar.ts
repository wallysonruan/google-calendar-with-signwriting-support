import { defineStore } from 'pinia'

export const useNavBar = defineStore({
  id: 'useNavBar',
  state: () => ({
    drawer: false
  }),
  actions: {
    showDrawer() {
      this.drawer = !this.drawer
    },
    shouldShowDrawer() {
      return this.drawer
    }
  }
})
