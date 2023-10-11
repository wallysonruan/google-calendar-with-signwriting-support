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
    date: new Date('2023-08-10'),
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
    date: new Date('2021-08-10'),
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

function convertBackendDataModelToFrontendDataModel(classesData: classItem[]): YearClass[] {
    const result: YearClass[] = [];
  
    // Iterate through the input data
    classesData.forEach((classItem) => {
      const year = classItem.date.getFullYear();
      const month = classItem.date.getMonth() + 1; // Month is 0-based, so we add 1
  
      // Find the corresponding year in the result
      let yearObj = result.find((y) => y.year === year);
  
      if (!yearObj) {
        // If the year doesn't exist, create an object for it
        yearObj = {
          year: year,
          months: []
        };
        result.push(yearObj);
      }
  
      // Create an object for the month
      const monthObj: Month = {
        number: month,
        days: [
          {
            date: classItem.date.toISOString().slice(0, 10),
            course_title: classItem.course_title,
            class_title: classItem.class_title,
            activities: classItem.activities
          }
        ]
      };
  
      // Add the month to the corresponding year
      yearObj.months.push(monthObj);
    });
  
    return result;
  }

export const useClassesStore = defineStore({
  id: 'useClassesStore',
  state: () => ({
    classes: convertBackendDataModelToFrontendDataModel(classesData)
  }),
  actions: {
    getClasses(){
        return this.classes
    }
  }
})
