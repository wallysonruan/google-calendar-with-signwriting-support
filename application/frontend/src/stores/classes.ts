import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'

export type activity = {
  title: languages
}

export type classItem = {
  date: Date
  class_title: languages
  course_title: languages
  activities: activity[]
}

const classItemDatalocalStorage_key = 'classes'

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
      date: new Date('2023-01-10'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: [
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 1',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 3',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 4',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 5',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 6',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 7',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 8',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 9',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 10',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 11',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 12',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 13',
            eng: ''
          }
        }
      ]
    },
    {
      date: new Date('2023-01-10'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: []
    },
    {
      date: new Date('2023-01-09'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: [
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 1',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        }
      ]
    },
    {
      date: new Date('2022-08-10'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: [
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 1',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        }
      ]
    },
    {
      date: new Date('2021-04-10'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: [
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 1',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        }
      ]
    },
    {
      date: new Date('2021-06-02'),
      class_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Aula de Português',
        eng: ''
      },
      course_title: {
        libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
        pt: 'Curso de Tradução',
        eng: ''
      },
      activities: [
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 1',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        },
        {
          title: {
            libras:
              'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
            pt: 'Atividade 2',
            eng: ''
          }
        }
      ]
    }
  ]

  const dataRetrievedFromLocalStorage = getClassItemsFromLocalStorage(classItemDatalocalStorage_key)

  if (dataRetrievedFromLocalStorage.length > 0) return dataRetrievedFromLocalStorage

  saveClassesToLocalStorage(classesDataFake, classItemDatalocalStorage_key)

  return classesDataFake
}

const classesData: classItem[] = getClassesData()

// Sort date by comparing milliseconds
classesData.sort((a, b) => {
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)
  return aDate.getTime() - bDate.getTime()
})

export const useClassesStore = defineStore({
  id: 'useClassesStore',
  state: () => ({
    classes: classesData
  }),
  actions: {
    getClasses() {
      return this.classes
    },
    getClassesFromLocalStorage() {
      return getClassItemsFromLocalStorage(classItemDatalocalStorage_key)
    },
    saveClassToLocalStorage(data: classItem[]) {
      saveClassesToLocalStorage(data, classItemDatalocalStorage_key)
    }
  }
})
