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

const classesData: classItem[] = [
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
      }
    ]
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

// Sort date by comparing milliseconds
classesData.sort((a, b) => {
  return a.date.getTime() - b.date.getTime()
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
