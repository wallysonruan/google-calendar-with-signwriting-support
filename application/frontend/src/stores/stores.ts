import { useCalendarEventsStore } from './calendarEvents'
import { useLanguageStore } from './language'
import { useNavBar } from './navBar'

type storesType = {
  calendarEvents: Function
  languages: Function
  navbar: Function
}

export const stores: storesType = {
  calendarEvents: useCalendarEventsStore,
  languages: useLanguageStore,
  navbar: useNavBar
}
