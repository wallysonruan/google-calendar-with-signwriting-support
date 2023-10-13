import { beforeEach, describe, it, vi, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CalendarListActivities from '../Calendar/CalendarListActivities.vue'

import type { activity } from '@/stores/classes'

import { createTestingPinia } from '@pinia/testing'
import type { languages } from '../GlobalTypes.vue'
import { setActivePinia } from 'pinia'

describe('CalendarListActivities', () => {
  beforeEach(() => {
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn(),
        stubActions: false,
        fakeApp: true
      })
    )
  })

  // TODO: Finish this test, must stub/mock store.

  it('Only portuguese content should be shown when <><><><><>', () => {
    const wrapper = mount(CalendarListActivities, {
      props: {
        activities: <activity[]>[
          {
            title: <languages>{
              libras: '',
              pt: 'aaa',
              eng: ''
            }
          }
        ]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
