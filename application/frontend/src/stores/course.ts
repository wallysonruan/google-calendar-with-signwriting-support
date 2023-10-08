import { defineStore } from 'pinia'

export const useCourseStore = defineStore({
  id: 'useCourseStore',
  state: () => ({
    courses: [
      {
        day: '10/07/2000',
        classess: [
          {
            name: {
              pt: 'Aula 1',
              libras: ''
            },
            activities: {
              id: 1,
              title: {
                pt: 'Teste',
                libras: ''
              }
            }
          },
          {
            name: {
              pt: 'Aula 2',
              libras: ''
            },
            activities: {
              id: 2,
              title: {
                pt: 'Teste',
                libras: ''
              }
            }
          }
        ]
      }
    ]
  }),
  actions: {}
})
