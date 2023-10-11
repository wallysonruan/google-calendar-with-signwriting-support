import type { languages } from '@/components/GlobalTypes.vue'
import { defineStore } from 'pinia'

export type activity = {
  title: languages
}

export type classItem = {
  date: Date
  course: languages
  class_title: languages
  activities: activity[]
}

// type State = {
//   classes: classItem[]
// }

export const useClassesStore = defineStore({
  id: 'useClassesStore',
  state: () => ({
    classes: [
      {
        date: new Date('2023-07-10'),
        class_title: {
          libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
          pt: 'Aula de Português',
          eng: ''
        },
        course: {
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
        date: new Date('2023-08-10'),
        class_title: {
          libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
          pt: 'Aula de Português',
          eng: ''
        },
        course: {
          libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4 ',
          pt: 'Curso de Tradução',
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
    ],
    testedata: [
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
      }
    ]
  }),
  actions: {
    // months() {
    //   const allMonths = this.classes
    //     .map((classItem) => {
    //       return classItem.date.getMonth()
    //     })
    //     .sort()
    //   console.group('month')
    //   console.log(allMonths)
    //   console.groupEnd()
    // },
    // years() {
    //   const sortedYears = this.classes
    //     .map((classItem) => {
    //       return classItem.date.getFullYear()
    //     })
    //     .sort()
    //   const noDuplicates = new Set(sortedYears)
    //   console.group('year')
    //   console.log(noDuplicates)
    //   console.groupEnd()
    // }
    // teste() {
    //   this.testedata.forEach((year) => {
    //     console.log(year.year)
    //     year.months.forEach((month) => {
    //       console.log(month.number)
    //       month.days.forEach((day) => {
    //         console.log(day.date)
    //         console.log(day.class_title.pt)
    //         console.log(day.course_title.pt)
    //         day.activities.forEach((activity) => {
    //           console.log(activity.title.pt)
    //         })
    //       })
    //     })
    //   })
    // }
  }
})
