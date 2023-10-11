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

type Activity = {
  title: languages
}

type Day = {
  date: string
  course_title: languages
  class_title: languages
  activities: Activity[]
}

type Month = {
  number: number
  days: Day[]
}

type YearClass = {
  year: number
  months: Month[]
}

const classesData: classItem[] = [
  {
    date: new Date('2023-07-10'),
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
  }
]

function convertClassesDataToDesiredFormat(classesData: classItem[]) {
  const result: YearClass = {
    year: 0,
    months: [
      {
        number: 0,
        days: [
          {
            date: '2000-01-0',
            course_title: {
              pt: '',
              libras: '',
              eng: ''
            },
            class_title: {
              pt: '',
              libras: '',
              eng: ''
            },
            activities: [
              {
                title: {
                  pt: '',
                  libras: '',
                  eng: ''
                }
              }
            ]
          }
        ]
      }
    ]
  }

  classesData.forEach((classItem) => {
    const year = classItem.date.getFullYear()
    const month = classItem.date.getMonth() + 1 // Mês base 0, então adicionamos 1

    if (result.year !== year) {
      result.year = year
    }

    let monthObj = result.months.find((m) => m.number === month)
    if (!monthObj) {
      monthObj = {
        number: month,
        days: []
      }
      result.months.push(monthObj)
    }

    const dayObj = {
      date: classItem.date.toISOString().slice(0, 10),
      course_title: classItem.course_title,
      class_title: classItem.class_title,
      activities: classItem.activities
    }

    monthObj.days.push(dayObj)
  })

  return result
}

const convertedData = convertClassesDataToDesiredFormat(classesData)
console.log(convertedData)

export const useClassesStore = defineStore({
  id: 'useClassesStore',
  state: () => ({
    classes: <YearClass[]>[
      {
        year: 2023,
        months: [
          {
            number: 8,
            days: [
              {
                date: '2023-09-10',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
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
                date: '2023-09-11',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português 2',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
                  eng: ''
                },
                activities: [
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
                  }
                ]
              }
            ]
          },
          {
            number: 9,
            days: [
              {
                date: '2023-10-10',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
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
                date: '2023-10-11',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português 2',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
                  eng: ''
                },
                activities: [
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
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        year: 2022,
        months: [
          {
            number: 6,
            days: [
              {
                date: '2023-10-10',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
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
                date: '2023-09-11',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português 2',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
                  eng: ''
                },
                activities: [
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
                  }
                ]
              }
            ]
          },
          {
            number: 9,
            days: [
              {
                date: '2023-10-10',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
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
                date: '2023-10-11',
                course_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Curso de Português 2',
                  eng: ''
                },
                class_title: {
                  libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
                  pt: 'Aula de Português',
                  eng: ''
                },
                activities: [
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }),
  actions: {}
})
