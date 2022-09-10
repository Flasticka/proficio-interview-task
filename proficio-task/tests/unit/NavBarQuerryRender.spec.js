import { shallowMount } from '@vue/test-utils'
import { ref } from 'vue';
import NavBar from '../../src/components/NavBar.vue'
import NavBarLanguageHeader from '../../src/components/NavBarLanguageHeader.vue'

jest.mock('vue-router', () => ({
    useRoute: () => {
      return {query: {name:"dog"}}
    }
  }))
  

describe('NavBarQuerryRender.vue', () => {
    const language = ref({"trcid":"de","header":"Unternehmen in Amsterdam","addFilter":"+ Filter hinzufügen", "removeFilter": "Filter entfernen", "nameFilter" : "Name", "descriptionFilter" : "Beschreibung", "seeMore": "Mehr sehen", "address": "Adresse", "website":"Webseite"});
    const wrapper = shallowMount(NavBar, {
        props: {language}
    });
    it('renders active filter', () => {
        expect(wrapper.find('[data-test="active-filter"]').isVisible()).toBeTruthy()
    })
    it('display text name', () => {
        const textResult = wrapper.get('[data-test="active-filter__name"]')
        expect(textResult.text()).toBe("dog")
    })
    it('no render description', () => {
        expect(wrapper.find('[data-test="active-filter__description"]').exists()).toBe(false)
    })
    it('renders active filter button', () => {
      expect(wrapper.find('[data-test="active-filter__button"]').isVisible()).toBeTruthy()
  })
  })