import { shallowMount } from '@vue/test-utils'
import NavBarLanguageHeader from '../../src/components/NavBarLanguageHeader.vue'
import LanguageSelector from '../../src/components/LanguageSelector.vue'

describe('NavBarLanguageHeader.vue', () => {
  const header = 'dummy message'
  const wrapper = shallowMount(NavBarLanguageHeader, {
    props: { header }
  })

  it('renders props.header when passed', () => {
    const headeResult = wrapper.get('[data-test="nav-bar-container__header-test"]')
    expect(headeResult.text()).toBe(header)
  })
  it('contains a exactly one LanguageSelector component', () => {
    expect(wrapper.findAllComponents(LanguageSelector).length).toBe(1)
  })
})