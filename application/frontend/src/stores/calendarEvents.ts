import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type calendarEventType = {
  date: Date
  events: languages[]
}

const calendarEventDatalocalStorage_key = 'calendarEvents'

const fakeCalendarEvents: calendarEventType[] = [
  {
    date: new Date('2021-06-02T00:00:00.000Z'),
    events: [
      {
        libras:
          'M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479S38a00464x490 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 S38700463x496 M532x519S15d01481x495S15d09497x496S20800496x481S22124510x483S22124469x483 M557x523S2d608528x503S22714472x477S11a50510x493S11a58479x493S2d610444x502S22714508x477 S38700463x496 M527x529S21100495x505S3790b474x486S14731473x508S26607480x483S20357506x472 M520x525S1eb20481x506S21d00497x475S26b00493x489',
        pt: 'Texto Borboleta',
        eng: ''
      }
    ]
  },
  {
    date: new Date('2023-03-15T00:00:00.000Z'),
    events: [
      {
        libras:
          'M512x512S10e00489x492S10e08472x492S21600496x489S21600496x489 M527x519S15a37504x482S15a2f473x482S20600495x501S26507514x484S2651f472x484 M523x528S11541502x472S11549478x472S20600499x484S22100511x480S22100492x480',
        pt: 'Festa de Aniversário',
        eng: ''
      }
    ]
  },
  {
    date: new Date('2022-08-20T00:00:00.000Z'),
    events: [
      {
        libras:
          'M512x512S1060a488x492S10602488x492S2df24488x497 M519x517S2ff00482x483S10e10494x484S20e00503x489S20e00503x491S2ff10482x477',
        pt: 'Viagem à Praia',
        eng: ''
      }
    ]
  },
  {
    date: new Date('2023-01-10T00:00:00.000Z'),
    events: [
      {
        libras:
          'M520x515S2e211487x485S1f721482x498 M520x528S1f740481x484S1f748500x484S20600499x514S20e00492x496',
        pt: 'Reunião de Trabalho',
        eng: ''
      }
    ]
  },
  {
    date: new Date('2022-11-30T00:00:00.000Z'),
    events: [
      {
        libras:
          'M528x516S26500504x504S1f551486x487S18610497x497 M516x518S1f740487x479S1f748495x479S20600492x494S20e00491x497',
        pt: 'Compras de Natal',
        eng: ''
      }
    ]
  },
  {
    date: new Date('2023-05-05T00:00:00.000Z'),
    events: [
      {
        libras:
          'M527x518S10600473x481S10608476x481S2ff00480x495S2ff08480x495 M519x529S1f740481x507S1f748493x507S20600492x520S20e00492x520',
        pt: 'Feriado Nacional',
        eng: ''
      },
      {
        libras:
          'M512x512S10e00489x492S10e08472x492S21600496x489S21600496x489 M527x519S15a37504x482S15a2f473x482S20600495x501S26507514x484S2651f472x484 M523x528S11541502x472S11549478x472S20600499x484S22100511x480S22100492x480',
        pt: 'Dia da Mãe',
        eng: ''
      }
    ]
  }
]

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
