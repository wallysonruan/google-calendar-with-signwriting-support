import { useAlertStore } from './alert'
import { useClassesStore } from './classes'
import { useLanguageStore } from './language'
import { useCourseStore } from './course'

type storesType = {
  alerts: Function
  classes: Function
  languages: Function
  course: Function
}

export const stores: storesType = {
  alerts: useAlertStore,
  classes: useClassesStore,
  languages: useLanguageStore,
  course: useCourseStore
}
