import { useClassesStore } from './classes'
import { useLanguageStore } from './language'
import { useNavBar } from './navBar'

type storesType = {
  classes: Function
  languages: Function
  navbar: Function
}

export const stores: storesType = {
  classes: useClassesStore,
  languages: useLanguageStore,
  navbar: useNavBar
}
