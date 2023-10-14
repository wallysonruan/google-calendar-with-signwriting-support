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

// const classesData: classItem[] = [
//   {
//     date: new Date('2023-01-10'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: [
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 1',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 3',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 4',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 5',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 6',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 7',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 8',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 9',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 10',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 11',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 12',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 13',
//           eng: ''
//         }
//       }
//     ]
//   },
//   {
//     date: new Date('2023-01-10'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: []
//   },
//   {
//     date: new Date('2023-01-09'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: [
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 1',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       }
//     ]
//   },
//   {
//     date: new Date('2022-08-10'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: [
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 1',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       }
//     ]
//   },
//   {
//     date: new Date('2021-04-10'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: [
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 1',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       }
//     ]
//   },
//   {
//     date: new Date('2021-06-02'),
//     class_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Aula de Português',
//       eng: ''
//     },
//     course_title: {
//       libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
//       pt: 'Curso de Tradução',
//       eng: ''
//     },
//     activities: [
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 1',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       },
//       {
//         title: {
//           libras:
//             'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
//           pt: 'Atividade 2',
//           eng: ''
//         }
//       }
//     ]
//   }
// ]

function saveDataToLocalStorage(data: any, key: string) {
  try {
    // Converte o objeto em uma string JSON
    const jsonData = JSON.stringify(data)

    // Armazena a string JSON no localStorage com a chave especificada
    localStorage.setItem(key, jsonData)

    console.log(`Dados salvos no localStorage com a chave "${key}".`)
  } catch (error) {
    console.error(`Erro ao salvar os dados no localStorage: ${error}`)
  }
}

// saveDataToLocalStorage(classesData, "1")

function getDataFromLocalStorage(key: string): classItem[] | null {
  try {
    // Obtém a string JSON armazenada no localStorage usando a chave especificada
    const jsonData = localStorage.getItem(key)

    if (jsonData) {
      // Converte a string JSON de volta para um objeto TypeScript
      const data = JSON.parse(jsonData) as classItem[]
      return data
    } else {
      // Retorna `null` se a chave não existir no localStorage
      return null
    }
  } catch (error) {
    console.error(`Erro ao recuperar os dados do localStorage: ${error}`)
    return null
  }
}

console.log(getDataFromLocalStorage('classes'))

const classesData: classItem[] | null = getDataFromLocalStorage('classes')

// Sort date by comparing milliseconds
classesData?.sort((a, b) => {
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
    }
  }
})
