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

type State = {
    classes: classItem[]
}

export const useClassesStore = defineStore({
    id: 'useClassesStore',
    state: (): State => ({
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
                            pt: 'Atividade 1',
                            eng: ''
                        }
                    }
                ]
            },
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
                            pt: 'Atividade 1',
                            eng: ''
                        }
                    }
                ]
            }
        ]
    }),
    actions: {
        months() {
            console.log(this.classes.map((classItem) => {
                return classItem.date.getMonth()
            }).sort()
            )
        },
        years() {
            const sortedYears = this.classes.map((classItem) => {
                return classItem.date.getFullYear()
            }).sort()
            const noDuplicates = new Set(sortedYears)
            console.log(noDuplicates)
        }
    }
})
