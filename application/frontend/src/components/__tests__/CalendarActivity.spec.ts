import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CalendarActivityVue from '../Calendar/CalendarActivity.vue'

import type { languages } from '../GlobalTypes.vue'

describe('CalendarActivity', () => {
  it('Only portuguese element should be visible if show_sw is set to false', () => {
    const wrapper = mount(CalendarActivityVue, {
      props: {
        show_sw: <boolean>false,
        title: <languages>{
          pt: 'Portuguese sentence',
          libras: '',
          eng: ''
        }
      }
    })

    expect(wrapper.find('.activity').find('img').attributes('style')).toContain('display: none')
    expect(wrapper.find('.activity').find('div').find('p').isVisible()).toBe(true)
  })

  it('Only signwriting element should be visible if show_sw is set to true', () => {
    const wrapper = mount(CalendarActivityVue, {
      props: {
        show_sw: <boolean>true,
        title: <languages>{
          pt: 'Portuguese sentence',
          libras: 'LIBRASFSW',
          eng: ''
        }
      }
    })

    expect(wrapper.find('.activity').find('div').find('p').isVisible()).toBe(false)
    expect(wrapper.find('.activity').find('img').attributes('style')).toBeUndefined() // style="display: none;" should not appear
  })
})
