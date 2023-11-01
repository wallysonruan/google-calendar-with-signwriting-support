import { defineStore } from 'pinia'

function blockOrUnblockPageScrollingBehavior() {
  const getHtmlElement = document.querySelector('html')
  if (getHtmlElement != null) {
    if (getHtmlElement.style.overflow != 'hidden') {
      getHtmlElement.style.overflow = 'hidden'
    } else {
      getHtmlElement.style.overflow = 'auto'
    }
  }
}

export const useCreateEventStore = defineStore({
  id: 'useCreateEventStore',
  state: () => ({
    activated: false
  }),
  actions: {
    activateCreateEvent() {
      this.activated = !this.activated
      blockOrUnblockPageScrollingBehavior()
    }
  }
})
