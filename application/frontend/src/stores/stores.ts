import { useAlertStore } from './alert'
import { useClassesStore } from './classes'
import { useLanguageStore } from './language'

type storesType = {
  alerts: Function
  classes: Function
  languages: Function
}

export const stores: storesType = {
  alerts: useAlertStore,
  classes: useClassesStore,
  languages: useLanguageStore
}
