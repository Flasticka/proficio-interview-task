import { shallowMount } from '@vue/test-utils'
import LanguageSelector from '../../src/components/LanguageSelector.vue'

describe('LanguageSelector.vue', () => {
    it('renders all six images', () => {
        const wrapper = shallowMount(LanguageSelector)
        expect(wrapper.findAll('img').length).toBe(6)
    })
  })