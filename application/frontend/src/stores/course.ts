import { defineStore } from 'pinia'

export const useCourseStore = defineStore({
  id: 'useCourseStore',
  state: () => ({
    courses: [
      {
        day: "10/07/2000",
        classess: [
          {
            name: "Aula 1",
            activities: {
              id: 1,
              title: "Teste"
            }
          },
          {
            name: "Aula 2",
            activities: {
              id: 2,
              title: "Teste"
            }
          }
        ]
      },
    ]
  }),
  actions: {
  }
})
