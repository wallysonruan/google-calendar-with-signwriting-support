import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type calendarEventType = {
  date: Date
  class_title: languages
  course_title: languages
}

const calendarEventDatalocalStorage_key = 'calendarEvents'

function sortCalendarEventsByDate(data: calendarEventType[]): calendarEventType[] {
  return data.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate.getTime() - bDate.getTime()
  })
}

export function getcalendarEventsFromLocalStorage(key: string): calendarEventType[] {
  const emptycalendarEvent: calendarEventType[] = []

  try {
    // Get data from localStorage
    const jsonData = localStorage.getItem(key)

    if (jsonData) {
      // Converts string JSON data back to a TypeScript object
      const data = JSON.parse(jsonData) as calendarEventType[]
      return data
    } else {
      // Returns `null` if key does not exists in LocalStorage
      return emptycalendarEvent
    }
  } catch (error) {
    console.error(`Error while retrieving data from localStorage: ${error}`)
    return emptycalendarEvent
  }
}

export function saveCalendarEventsToLocalStorage(data: calendarEventType[], key: string) {
  try {
    // Converts data to string JSON
    const jsonData = JSON.stringify(data)

    // Uploads string JSON to localStorage
    localStorage.setItem(key, jsonData)

    console.log(`Data uploaded to localStorage with key: "${key}".`)
  } catch (error) {
    console.error(`Error uploading to localStorage: ${error}`)
  }
}

function getcalendarEventsData(): calendarEventType[] {
  const fakeCalendarEvents: calendarEventType[] = [
    {
      date: new Date('2021-06-02'),
      class_title: {
        libras: 'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479',
        pt: 'Texto Borboleta',
        eng: ''
      },
      course_title: {
        libras:
          'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479 S38a00464x490 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 S38700463x496 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 M557x523S2d608528x503S22714472x477S11a50510x493S11a58479x493S2d610444x502S22714508x477 S38700463x496 M527x529S21100495x505S3790b474x486S14731473x508S26607480x483S20357506x472 M520x525S1eb20481x506S21d00497x475S26b00493x489',
        pt: 'Texto Borboleta',
        eng: ''
      }
    },
    {
      date: new Date('2021-06-02'),
      class_title: {
        libras: 'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479',
        pt: 'Texto Borboleta',
        eng: ''
      },
      course_title: {
        libras:
          'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479 S38a00464x490 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 S38700463x496 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 M557x523S2d608528x503S22714472x477S11a50510x493S11a58479x493S2d610444x502S22714508x477 S38700463x496 M527x529S21100495x505S3790b474x486S14731473x508S26607480x483S20357506x472 M520x525S1eb20481x506S21d00497x475S26b00493x489',
        pt: 'Texto Borboleta',
        eng: ''
      }
    },
    {
      date: new Date('2021-07-06'),
      class_title: {
        libras: 'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479',
        pt: 'Texto Borboleta',
        eng: ''
      },
      course_title: {
        libras:
          'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479 S38a00464x490 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 S38700463x496 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 M557x523S2d608528x503S22714472x477S11a50510x493S11a58479x493S2d610444x502S22714508x477 S38700463x496 M527x529S21100495x505S3790b474x486S14731473x508S26607480x483S20357506x472 M520x525S1eb20481x506S21d00497x475S26b00493x489',
        pt: 'Texto Borboleta',
        eng: ''
      }
    },
    {
      date: new Date('2022-9-10'),
      class_title: {
        libras:
          'M521x567S36d00479x526S20310480x537S21600468x540S20500482x556S30a00483x483 M546x518S30001482x483S30007482x483S18010516x485S18018454x485S26500521x461S26510469x460 M520x524S15a20481x483S1dc20495x477S21410505x511S20500490x513 M536x583S1bb48466x555S1bb40515x523S22b16489x565S22b02484x537S21b00523x570S21b00472x540S30f00482x483',
        pt: 'Teste texto SW',
        eng: ''
      },
      course_title: {
        libras:
          'M521x567S36d00479x526S20310480x537S21600468x540S20500482x556S30a00483x483 M546x518S30001482x483S30007482x483S18010516x485S18018454x485S26500521x461S26510469x460 M520x524S15a20481x483S1dc20495x477S21410505x511S20500490x513 M536x583S1bb48466x555S1bb40515x523S22b16489x565S22b02484x537S21b00523x570S21b00472x540S30f00482x483',
        pt: 'Teste texto SW',
        eng: ''
      }
    },
    {
      date: new Date('2022-07-10'),
      class_title: {
        libras:
          'M521x567S36d00479x526S20310480x537S21600468x540S20500482x556S30a00483x483 M546x518S30001482x483S30007482x483S18010516x485S18018454x485S26500521x461S26510469x460 M520x524S15a20481x483S1dc20495x477S21410505x511S20500490x513 M536x583S1bb48466x555S1bb40515x523S22b16489x565S22b02484x537S21b00523x570S21b00472x540S30f00482x483',
        pt: 'Teste texto SW',
        eng: ''
      },
      course_title: {
        libras:
          'M521x567S36d00479x526S20310480x537S21600468x540S20500482x556S30a00483x483 M546x518S30001482x483S30007482x483S18010516x485S18018454x485S26500521x461S26510469x460 M520x524S15a20481x483S1dc20495x477S21410505x511S20500490x513 M536x583S1bb48466x555S1bb40515x523S22b16489x565S22b02484x537S21b00523x570S21b00472x540S30f00482x483',
        pt: 'Teste texto SW',
        eng: ''
      }
    }
  ]

  const dataRetrievedFromLocalStorage = getcalendarEventsFromLocalStorage(
    calendarEventDatalocalStorage_key
  )

  if (dataRetrievedFromLocalStorage.length > 0)
    return sortCalendarEventsByDate(dataRetrievedFromLocalStorage)

  saveCalendarEventsToLocalStorage(fakeCalendarEvents, calendarEventDatalocalStorage_key)

  return sortCalendarEventsByDate(fakeCalendarEvents)
}

const calendarEventsData = ref<calendarEventType[]>(getcalendarEventsData())

function updatecalendarEvents() {
  calendarEventsData.value = getcalendarEventsData()
}

localStorage.removeItem(calendarEventDatalocalStorage_key)

export const useCalendarEventsStore = defineStore({
  id: 'useCalendarEventsStore',
  state: () => ({
    calendarEvents: calendarEventsData
  }),
  actions: {
    getCalendarEvents() {
      return this.calendarEvents
    },
    async saveCalendarEventToLocalStorage(data: calendarEventType) {
      const dataFromLocalStorage = await getcalendarEventsFromLocalStorage(
        calendarEventDatalocalStorage_key
      )
      dataFromLocalStorage.push(data)
      await saveCalendarEventsToLocalStorage(
        dataFromLocalStorage,
        calendarEventDatalocalStorage_key
      )
      updatecalendarEvents()
    }
  }
})
