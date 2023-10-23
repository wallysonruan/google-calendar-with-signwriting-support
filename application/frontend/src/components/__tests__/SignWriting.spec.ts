import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SignWriting from '../SignWriting.vue'

describe('SignWriting', () => {
  it('Shoud accept only one sign and render it, instead of just taking two or more.', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST',
        display: false
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('Should render no text', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST',
        display: true
      }
    })

    expect(wrapper.text()).toBe('')
  })

  it('Shoud concatenate baseUrl with sign string', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST',
        display: true
      }
    })
  })

  it('Shoud NOT display if display is set to false', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST',
        display: false
      }
    })

    expect(wrapper.find('img').attributes('style')).toContain('display: none')
    expect(wrapper.find('img').attributes('style')).not.toBe('')
  })

  it('Shoud accept multiple signs separated by SPACES, and iterate over them to generate a SignWriting for each', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST TEST TEST',
        display: true
      }
    })

    wrapper
      .props('sign')
      .split(' ')
      .forEach((sign: string, index: number) => {
        expect(wrapper.findAll('img')[index].attributes('src')).toContain(sign)
      })
  })

  it('Shoud accept multiple signs separated by "%20", and iterate over them to generate a SignWriting for each', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST%20TEST%20TEST',
        display: true
      }
    })

    wrapper
      .props('sign')
      .split(' ')
      .forEach((sign: string, index: number) => {
        expect(wrapper.findAll('img')[index].attributes('src')).toContain(sign)
      })
  })
})
