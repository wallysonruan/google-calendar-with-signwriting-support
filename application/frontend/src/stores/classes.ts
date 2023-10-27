import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type classItem = {
  date: Date
  class_title: languages
  course_title: languages
}

const classItemDatalocalStorage_key = 'classes'

function sortClassesItem(data: classItem[]): classItem[] {
  return data.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate.getTime() - bDate.getTime()
  })
}

export function getClassItemsFromLocalStorage(key: string): classItem[] {
  const emptyClassItem: classItem[] = []

  try {
    // Get data from localStorage
    const jsonData = localStorage.getItem(key)

    if (jsonData) {
      // Converts string JSON data back to a TypeScript object
      const data = JSON.parse(jsonData) as classItem[]
      return data
    } else {
      // Retorna `null` se a chave não existir no localStorage
      return emptyClassItem
    }
  } catch (error) {
    console.error(`Error while retrieving data from localStorage: ${error}`)
    return emptyClassItem
  }
}

export function saveClassesToLocalStorage(data: classItem[], key: string) {
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

function getClassesData(): classItem[] {
  const classesDataFake: classItem[] = [
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

  const dataRetrievedFromLocalStorage = getClassItemsFromLocalStorage(classItemDatalocalStorage_key)

  if (dataRetrievedFromLocalStorage.length > 0)
    return sortClassesItem(dataRetrievedFromLocalStorage)

  saveClassesToLocalStorage(classesDataFake, classItemDatalocalStorage_key)

  return sortClassesItem(classesDataFake)
}

const classesData = ref<classItem[]>(getClassesData())

function updateClasses() {
  classesData.value = getClassesData()
}

localStorage.removeItem(classItemDatalocalStorage_key)

export const useClassesStore = defineStore({
  id: 'useClassesStore',
  state: () => ({
    classes: classesData
  }),
  actions: {
    getClasses() {
      return this.classes
    },
    async saveClassToLocalStorage(data: classItem) {
      const dataFromLocalStorage = await getClassItemsFromLocalStorage(
        classItemDatalocalStorage_key
      )
      dataFromLocalStorage.push(data)
      await saveClassesToLocalStorage(dataFromLocalStorage, classItemDatalocalStorage_key)
      updateClasses()
    }
  }
})
