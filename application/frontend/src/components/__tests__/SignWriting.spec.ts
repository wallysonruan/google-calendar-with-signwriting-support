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

      expect(wrapper.findComponent('.container').isVisible()).toBe(true)
    })

    it('Should NOT be visible when "display" is set to false', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: '',
          display: false
        }
      })

      expect(wrapper.findComponent('.container').isVisible()).toBe(false)
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

      expect(wrapper.findAll('fsw-sign').length).toBe(1)
    })

    it('If fsw string have spaces, the amount of signs should be the same as the amount of fsw strings separated by spaces', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531 M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531',
          display: true
        }
      })

      const totalOfFswStringsSeparatedBySpaces: string[] = wrapper.props('fsw').split(' ').length
      expect(wrapper.findAll('fsw-sign').length).toBe(totalOfFswStringsSeparatedBySpaces)
    })

    it('If fsw string does not have %20, should show only one sign', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531',
          display: true
        }
      })

      expect(wrapper.findAll('fsw-sign').length).toBe(1)
    })

    it('The amount of signs should be the same as the amount of fsw strings separated by %20 code', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531%20M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531',
          display: true
        }
      })

      const totalOfFswStringsSeparatedBySpaces: string[] = wrapper.props('fsw').split('%20').length
      expect(wrapper.findAll('fsw-sign').length).toBe(totalOfFswStringsSeparatedBySpaces)
    })
  })
  describe('Child Component Generation', () => {
    it('Should return a fsw-sign for any fsw string that is not of punctuation type', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'M536x549S30c00482x483S14710521x504S28903490x521S22e04519x531',
          display: true
        }
      })

      expect(wrapper.find('fsw-sign').exists()).toBe(true)
      expect(wrapper.find('fsw-symbol').exists()).toBe(false)
    })

    it('Should return a fsw-symbol for any fsw string that is of punctuation type', () => {
      const wrapper = mount(SignWriting, {
        props: {
          fsw: 'S38700',
          display: true
        }
      })

      expect(wrapper.find('fsw-sign').exists()).toBe(false)
      expect(wrapper.find('fsw-symbol').exists()).toBe(true)
    })
  })
})
