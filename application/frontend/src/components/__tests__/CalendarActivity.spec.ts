import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import CalendarActivityVue from '../Calendar/CalendarActivity.vue'

import { createTestingPinia } from '@pinia/testing'
import { setActivePinia } from 'pinia'
import { createVuetify } from 'vuetify'

import type { languages } from '../GlobalTypes.vue'

describe('CalendarActivity', () => {
  const vuetify = createVuetify()

  const testingPinia = createTestingPinia({
    createSpy: vi.fn(),
    initialState: {
      signwriting: true
    }
  })

  beforeEach(() => {
    setActivePinia(testingPinia)
  })

  it('Only portuguese element should be visible if show_sw is set to false', () => {
    const wrapper = mount(CalendarActivityVue, {
      global: {
        plugins: [vuetify]
      },
      props: {
        show_sw: <boolean>false,
        title: <languages>{
          pt: 'Portuguese sentence',
          libras: '',
          eng: ''
        }
      }
    })

    console.log(wrapper.find('.activity').html())
    expect(wrapper.find('.activity').find('img').attributes('style')).toContain('display: none')
    expect(wrapper.find('.activity').find('div').find('p').isVisible()).toBe(true)
  })

  it('Only signwriting element should be visible if show_sw is set to true', () => {
    const wrapper = mount(CalendarActivityVue, {
      global: {
        plugins: [vuetify]
      },
      props: {
        show_sw: <boolean>true,
        title: <languages>{
          pt: 'Portuguese sentence',
          libras: 'LIBRASFSW',
          eng: ''
        }
      }
    })

    console.log(wrapper.find('.activity').html())
    expect(wrapper.find('.activity').find('div').find('p').isVisible()).toBe(false)
    expect(wrapper.find('.activity').find('img').attributes('style')).toBeUndefined() // style="display: none;" should not appear
  })
})
