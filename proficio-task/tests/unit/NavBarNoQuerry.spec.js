import { shallowMount } from '@vue/test-utils'
import { ref } from 'vue';
import NavBar from '../../src/components/NavBar.vue'
import NavBarLanguageHeader from '../../src/components/NavBarLanguageHeader.vue'

jest.mock('vue-router', () => ({
    useRoute: () => {
      return {query: {}}
    }
  }))
  

describe('NavBarNoQuerryRender.vue', () => {
    const language = ref({"trcid":"de","header":"Unternehmen in Amsterdam","addFilter":"+ Filter hinzufügen", "removeFilter": "Filter entfernen", "nameFilter" : "Name", "descriptionFilter" : "Beschreibung", "seeMore": "Mehr sehen", "address": "Adresse", "website":"Webseite"});
    const wrapper = shallowMount(NavBar, {
      props: {language}
  });
    it('contains a exactly one NavBarLanguageHeader component', () => {
        expect(wrapper.findAllComponents(NavBarLanguageHeader).length).toBe(1)
      })
    it('renders add filter button with no form', () => {
        expect(wrapper.find('[data-test="addfilter-button--no-form"]').isVisible()).toBeTruthy()
    })

    it('renders add filter button with form', async () => { 
      await wrapper.get('[data-test="addfilter-button--no-form"]').trigger('click')
      expect(wrapper.find('[data-test="addfilter-button--with-form"]').isVisible()).toBeTruthy()
  })
  })