import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'

export type calendarEventType = {
  date: Date
  events: languages[]
}

export type Day = {
  date: Date
  events: languages[]
}

export type Month = {
  number: number
  days: Day[]
}

export type YearClass = {
  year: number
  months: Month[]
}

const calendarEventDatalocalStorage_key = 'calendarEvents'

const dummyCalendarEvents: calendarEventType[] = [
  {
    "date": new Date('2021-06-05T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M528x598S15a00493x545S20e00502x535S26504506x583S15720499x553S22104516x548S30a00482x483 M521x520S36d10479x488S16d10469x480S20500509x505S22a05489x494 S38700463x496 M531x551S30000482x483S14011500x460S22c04492x493S20500495x540 M547x569S30122482x476S30c30489x496S10020510x538S2f700533x528S26c02532x542',
        "pt": 'imitar Cristo, egoísta não',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2021-06-05T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M519x537S15a02492x504S2bf00492x464S2fc04481x526 M534x524S15a37474x487S10e51480x499S2a20f511x503S20601466x477 M543x538S10059471x479S10051496x479S23110469x504S2fc04491x527S23100503x504S20e00493x463S22a04530x507S22a10457x504 M563x512S12d02514x489S12d0a458x489S22612503x492S22616489x492S22a12438x498S22a06548x498 M522x538S16d48479x496S10e20487x462S24e04501x498S21000481x523 M535x594S2fb04496x588S15a00520x524S15a00473x523S25104517x557S25114470x556S31500482x483',
        "pt": 'Processo tradução materiais vários bilíngues análise',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2021-06-05T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M573x563S20320515x532S20320531x532S23c04550x535S23c1c488x536S30a00482x483 S38700463x496 M521x557S20320463x526S20320479x526S23c04498x529S23c1c436x530S30a00482x483 S38700463x496 M543x572S15a00471x524S15a00517x524S27100503x556S2711c457x557S30a00482x483 S38800464x496',
        "pt": 'sistema-comparar',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2021-06-03T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M533x608S15a48494x553S17d56493x585S21000513x561S26a00487x532S2f900479x566S30a00482x483 M535x577S30c00482x488S34d00482x488S17736482x534S1773e503x557S2ea00520x552S2ea4c470x552S30100482x477 M522x542S30c00482x483S15a10510x496S22e03497x523 M536x534S10049465x504S12741481x498S26507495x487S20e00470x492S13f47513x467 S38a00464x490 M518x578S1f80a491x560S1f822503x541S20600478x545S30a00482x488S30104482x477 M532x532S1ce41508x469S22b04516x502S1ce49469x469S22b14469x502 S38700463x496 M550x527S2450a519x509S24512450x507S14020506x473S14028466x473',
        "pt": 'aconselhar como mal vencer: fazer certo, paz',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2021-06-02T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M538x537S10050497x464S10058480x464S24402505x497S2441a462x497S20500495x526 M533x536S10021497x464S10029467x464S23d03507x487S23d1b467x486S20500495x525 M532x543S10021500x457S2890c517x484S10041504x513S10029469x457S28914478x482S10049482x513 M548x529S1f41f452x499S1ee10474x482S28a0a501x472S22104536x494',
        "pt": 'bandeira-brasil',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2023-03-15T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M557x530S19a10523x510S26b00530x491S34000482x483S30a30488x489 M553x527S30007482x483S11501514x485S25505534x508S22611508x469 M542x536S18600524x506S30a00482x483 M518x520S33200482x483S19410459x493S2f900467x515',
        "pt": 'contar-história-três-porquinho',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2022-08-20T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M513x523S20500488x512S10b43492x478 M521x519S36d00479x481S21100479x494S15a01496x496 M525x516S15a37476x486S15a3f488x493S20600503x484 M548x522S37a06452x509S20356498x502S16d20497x479S21100516x494S2710a533x482 M528x528S1dc28472x473S14c10495x472S23704489x507 S38800464x496 M513x523S20500488x512S10b43492x478 M534x530S31410482x483S10e20510x500S26500520x484 M518x535S33d00482x483S13d20476x520S22114446x519 M543x538S22120521x507S14c00499x507S22120521x502S34400482x483 M548x523S37a06452x510S20356498x503S2710a533x483S21100516x495S14700499x477 S38800464x496',
        "pt": 'historia-fonologia-cm',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2023-01-10T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M520x515S2e211487x485S1f721482x498 M520x528S1f740481x484S1f748500x484S20600499x514S20e00492x496',
        "pt": 'historia-fonologia-movimento',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2022-11-30T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M532x578S11e28485x423S11e20508x423S10e11465x517S2df06512x457S2df1e481x457S36d00479x522S20e00485x542S22b05495x554 M529x520S20500506x500S15d39479x497S20500519x501S1d320472x481 M521x519S36d00479x486S37700479x490S14051457x482S21100466x505 S38700463x496 M516x527S1dc02486x473S18602485x509 M530x530S11551499x486S11559476x486S20e00495x471S23110471x513S23100504x513 M516x554S1dc02486x500S18602485x536S17610500x478S1dc02485x447 S38800464x496 M521x531S22b05495x507S20e00485x495S10e11465x470S36d00479x475 S38a00464x490 M514x598S10e20493x403S14a20493x437S11950486x456S1f720488x486S11950486x505S16d20492x535S19220493x559S17620493x582 M515x555S14050485x446S20320499x480S10120499x499S14720500x533 S38800464x496',
        "pt": 'Keity final',
        "eng": ''
      }
    ]
  },
  {
    "date": new Date('2023-05-05T00:00:00.000Z'),
    "events": [
      {
        "libras":
          'M536x517S15a20465x490S1f010479x495S20e00510x497S21410492x483S26a06522x488 M510x537S11020490x464S27102495x497 S38800464x496 M595x562S15a20547x519S1dc20561x514S21410580x515S20b00559x549S32105482x483 M553x525S36d00479x504S26a04526x511S15a00534x475 M543x544S19a29474x516S19a21505x516S33e00482x483S22a11459x511S22a07530x513 M532x551S10030504x467S10038480x467S10051468x516S10059502x516S37600488x528S2f700493x449 M589x575S15a06551x523S10021559x528S22b05562x549S22b03559x551S32105482x483 S38700463x496 M518x580S15a20419x537S1dc20433x532S21410452x533S20b00431x567S32103482x483 L530x509S17640514x493S26602481x492S21b00470x497 M518x573S22a03444x550S10b12457x539S15a20427x546S32103482x483 M518x592S11520449x529S32103482x483S2e600441x559 M537x527S18048473x500S18040506x512S2f900463x512S26600506x474 S38800464x496',
        "pt": 'artigo 05',
        "eng": ''
      },
      {
        "libras":
          'M515x573S14a20497x427S18d50492x446S14a20497x475S11950490x494S1f720492x558S1d320486x524 S38a00464x490 M523x523S15d39478x482S1ea41495x478S20c01482x499 M546x518S31100482x483S10010523x476S21800528x463 S38700463x496 M538x516S11520463x485S14021483x492S1f720518x497 S38700463x496 M546x518S31100482x483S10010523x476S21800528x463 M553x528S20e00472x509S20e00510x508S36d10479x472S15d14456x485S15d1c522x485S2d201527x505S2d210442x504 S38700463x496 M525x519S15a19475x496S15a11502x496S20600489x481 M553x528S20e00472x509S20e00510x508S36d10479x472S15d14456x485S15d1c522x485S2d201527x505S2d210442x504 M521x526S36d00479x475S15a1f471x482S22b05490x502S21100470x502 M534x531S14c38466x500S14c30510x500S2b700510x469S2b711473x470 M537x524S32b10482x483S1c110514x486S20800513x514 M546x526S15a52494x474S15a56476x491S23610455x509S23604507x494S20e00477x475 M542x577S15a39469x509S15a51479x521S2a20f500x541S20601459x500S2a201512x554S15a39477x433S10e51486x442S20601469x424S2a20f511x464S2a201522x476 M528x532S14c0a473x504S14c10500x469S2480c512x504 M514x525S22f04489x511S15712487x476S20e00496x495 S38800464x496',
        "pt": 'titulo 3',
        "eng": ''
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

function getcalendarEventsFromLocalStorage(key: string): calendarEventType[] {
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

function getcalendarEventsDataFromAllSources(fallback: calendarEventType[]): calendarEventType[] {
  const emptycalendarEvent: calendarEventType[] = []
  const dataRetrievedFromLocalStorage = getcalendarEventsFromLocalStorage(
    calendarEventDatalocalStorage_key
  )

  if (dataRetrievedFromLocalStorage.length > 0)
    return sortCalendarEventsByDate(dataRetrievedFromLocalStorage)

  return sortCalendarEventsByDate(emptycalendarEvent.concat(fallback))
}

function convertBackendDataModelToFrontendDataModel(
  calendarEvents: calendarEventType[]
): YearClass[] {
  const result: YearClass[] = []

  calendarEvents.forEach((event) => {
    const year = event.date.getFullYear()
    const month = event.date.getMonth() + 1 // Month is 0-based, so we add 1

    // Find the corresponding year in the result
    let yearObj = result.find((y) => y.year === year)

    if (!yearObj) {
      // If the year doesn't exist, create an object for it
      yearObj = {
        year: year,
        months: []
      }
      result.push(yearObj)
    }

    // Find the corresponding month in the year
    let monthObj = yearObj.months.find((m) => m.number === month)

    if (!monthObj) {
      // If the month doesn't exist, create an object for it
      monthObj = {
        number: month,
        days: []
      }
      yearObj.months.push(monthObj)
    }

    // Find the corresponding day in the month
    let dayObj = monthObj.days.find((d) => d.date.getDate() === event.date.getDate())

    if (!dayObj) {
      // If the day doesn't exist, create an object for it
      dayObj = {
        date: event.date,
        "events": []
      }
      monthObj.days.push(dayObj)
    }

    // Add the events to the day
    dayObj.events.push(...event.events)
  })

  return result
}

localStorage.removeItem(calendarEventDatalocalStorage_key)
const calendarEventsData: YearClass[] = convertBackendDataModelToFrontendDataModel(getcalendarEventsDataFromAllSources(dummyCalendarEvents))

export const useCalendarEventsStore = defineStore({
  id: 'useCalendarEventsStore',
  state: () => ({
    calendarEvents: calendarEventsData
  }),
  actions: {
    getCalendarEvents() {
      return this.calendarEvents
    }
  }
})
