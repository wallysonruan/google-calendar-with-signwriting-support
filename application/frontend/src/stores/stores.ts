import { useCalendarEventsStore } from './calendarEvents'
import { useLanguageStore } from './language'
import { useNavBar } from './navBar'
import { useCreateEventStore } from './createEvent'

type storesType = {
  calendarEvents: Function
  languages: Function
  navbar: Function
  createEvent: Function
}

export const stores: storesType = {
  calendarEvents: useCalendarEventsStore,
  languages: useLanguageStore,
  navbar: useNavBar,
  createEvent: useCreateEventStore
}
