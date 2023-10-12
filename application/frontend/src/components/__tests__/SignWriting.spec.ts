import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SignWriting from '../SignWriting.vue'
import { SIGNWRITING_SVG_BASE_URL } from '../SignWriting.vue'

describe('SignWriting', () => {
  it('Should render no text', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST TEST',
        display: true
      }
    })

    expect(wrapper.text()).toBe('')
  })

  it('Shoud concatenate baseUrl with sign string', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST TEST',
        display: true
      }
    })

    const signs = wrapper.props('sign').split(' ')
    expect(wrapper.find('img').attributes('src')).toBe(SIGNWRITING_SVG_BASE_URL + signs[0])
  })

  it('Shoud NOT display if display is set to false', () => {
    const wrapper = mount(SignWriting, {
      props: {
        sign: 'TEST TEST',
        display: false
      }
    })

    expect(wrapper.find('img').attributes('style')).toContain('display: none')
    expect(wrapper.find('img').attributes('style')).not.toBe('')
  })
})
