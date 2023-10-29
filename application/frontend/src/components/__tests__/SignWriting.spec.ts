import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SignWriting from '../SignWriting.vue'

describe('SignWriting', () => {
  describe('Visibility', () => {
    it('Should be visible when "display" is set to false', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: '',
          display: true
        }
      })

      expect(wrapper.findComponent('.signwriting-container').isVisible()).toBe(true)
    })

    it('Should NOT be visible when "display" is set to false', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: '',
          display: false
        }
      })

      expect(wrapper.findComponent('.signwriting-container').isVisible()).toBe(false)
    })
  })
  describe('Quantity', () => {
    it('If fsw string does not have spaces, should show only one sign', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531',
          display: true
        }
      })

      expect(wrapper.find('.sign').exists()).toBe(true)
    })
  })

  // it('Shoud accept multiple signs separated by SPACES, and iterate over them to generate a SignWriting for each', () => {
  //   const wrapper = mount(SignWriting, {
  //     props: {
  //       fsw: 'TEST TEST TEST',
  //       display: true
  //     }
  //   })

  //   wrapper
  //     .props('sign')
  //     .split(' ')
  //     .forEach((sign: string, index: number) => {
  //       expect(wrapper.findAll('img')[index].attributes('src')).toContain(sign)
  //     })
  // })

  // it('Shoud accept multiple signs separated by "%20", and iterate over them to generate a SignWriting for each', () => {
  //   const wrapper = mount(SignWriting, {
  //     props: {
  //       fsw: 'TEST%20TEST%20TEST',
  //       display: true
  //     }
  //   })

  //   wrapper
  //     .props('sign')
  //     .split(' ')
  //     .forEach((sign: string, index: number) => {
  //       expect(wrapper.findAll('img')[index].attributes('src')).toContain(sign)
  //     })
  // })
})
