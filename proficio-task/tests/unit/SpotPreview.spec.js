import { shallowMount } from '@vue/test-utils'
import { ref } from 'vue';
import SpotPreview from '../../src/components/SpotPreview.vue'
jest.mock('../../src/router')
describe('SpotPreview.vue', () => {
    const language = ref({"trcid":"de","header":"Unternehmen in Amsterdam","addFilter":"+ Filter hinzufügen", "removeFilter": "Filter entfernen", "nameFilter" : "Name", "descriptionFilter" : "Beschreibung", "seeMore": "Mehr sehen", "address": "Adresse", "website":"Webseite"});
    const spotData = {
        "trcid":"aceb30d9-8a56-4073-a863-7340a67f32c6",
        "title":"Hampshire Golfhotel - Waterland",
        "details":{
           "de":{
              "language":"de",
              "title":"Hampshire Golfhotel Waterland",
              "calendarsummary":"",
              "shortdescription":"",
              "longdescription":""
           },
           "en":{
              "language":"en",
              "title":"Hampshire Golfhotel - Waterland",
              "calendarsummary":"",
              "shortdescription":"The Hampshire Golfhotel - Waterland is situated in the midst of the northern Holland landscape. This modern, excellent built hotel borders on a magnificent 45-hole golf course with beautifull water and woodlands. You will be enchanted rediscovering authentic Holland in the \"Zaanse Schans\".",
              "longdescription":"You will find picturesque villages, such as Edam, Volendam, Monnickendam and Hoorn, in the Waterland region. This setting makes the hotel a unique starting point for day trips, cycling expeditions and enjoyable excursions. The hotel is only 20 minutes away from Amsterdam and 30 minutes from Schiphol Airport.<br \/>\n<br \/>\n<strong>Rooms and facilities<\/strong><br \/>\nThe 97 tastefully decorated rooms are fully equipped with all convenience: a bathroom with bath and shower, hair dryer, direct dial telephone, radio, television, coffee and tea-making facilties, minibar and comfortable sitting area and writing table. The hotel has an &agrave; la carte restaurant \"Magnolia's\", a bar and free parking space for over 250 cars.<br \/>\n<br \/>\n<strong>Meetings<\/strong><br \/>\nWhen it comes to meetings, training sessions, product presentations or seminars, you are certainlyat the right place. The eight conference rooms accommodate from 2 to 200 persons. All rooms have daylight and airconditioning.<br \/>\n<br \/>\n<strong>Golf<\/strong><br \/>\nThe hotel is on the challenging 45-hole golf course. You can safely entrust us with the organization of your golf clinic, golf incentive or company golf days, perhaps combined with a business meeting."
           },
           "fr":{
              "language":"fr",
              "title":"Hampshire Golfhotel Waterland",
              "calendarsummary":"",
              "shortdescription":"",
              "longdescription":""
           },
           "nl":{
              "language":"nl",
              "title":"Hampshire Golfhotel - Waterland",
              "calendarsummary":"",
              "shortdescription":"Middenin het waterrijke Noord-Hollandse landschap ligt Hampshire Golfhotel - Waterland. Dit moderne, fraai vormgegeven viersterrenhotel grenst aan een prachtige 45-holes golfbaan met mooie water- en bospartijen.",
              "longdescription":"Het authentieke Holland vind je terug in de Zaanse Schans en schilderachtige dorpjes, zoals Edam, Volendam, Monnickendam en Hoorn, liggen midden in de regio. Dit maakt het hotel een uniek startpunt voor dagtochten, fietsroutes en gezellige uitstapjes. Het hotel is slechts 20 minuten van Amsterdam en 30 minuten van Schiphol verwijderd.<br \/>\n<br \/>\n<strong>Kamers en faciliteiten<\/strong><br \/>\nDe 97 ruime en sfeervolle kamers zijn van alle gemakken voorzien: een badkamer met bad, haardroger, radio\/televisie, telefoon met directe buitenlijn, een comfortabele zithoek en een schrijftafel. Het hotel beschikt over een &agrave; la carte restaurant, een brasserie en een bar. Tevens biedt het hotel gratis <br \/>\nparkeerruimte voor meer dan 250 auto's.<br \/>\n<br \/>\n<strong>Vergaderzalen<\/strong><br \/>\nVoor vergaderingen, trainingen, productpresentaties, seminars of feesten en <br \/>\npartijen bent je bij Hampshire Golfhotel - Waterland aan het juiste adres. De acht&nbsp;vergaderzalen bieden ruimte aan gezelschappen van 2 tot 200 personen en zijn allen voorzien van daglicht en airconditioning. <br \/>\n<br \/>\n<strong>Golfen<\/strong><br \/>\nHet hotel grenst aan de uitdagende 45-holes golfbaan van 'BurgGolf' Purmerend. Bij de golfbaan zijn volop mogelijkheden voor golfclinics, incentives of bedrijfsgolfdagen, eventueel gecombineerd met een bijeenkomst.<br \/>\n<br \/>\n<strong>Fietsverhuur<\/strong><br \/>\nHet hotel beschikt ook over fietsverhuur faciliteiten, welke 7 dagen in de week open is.&nbsp;"
           },
           "it":{
              "language":"it",
              "title":"Hampshire Golfhotel Waterland",
              "calendarsummary":"",
              "shortdescription":"",
              "longdescription":""
           },
           "es":{
              "language":"es",
              "title":"Hampshire Golfhotel Waterland",
              "calendarsummary":"",
              "shortdescription":"",
              "longdescription":""
           }
        },
        "types":[
           {
              "type":"",
              "catid":"1.3.4"
           },
           {
              "type":"",
              "catid":"4.3.4"
           },
           {
              "type":"",
              "catid":"4.3.5"
           }
        ],
        "location":{
           "name":"Hampshire Golfhotel - Waterland",
           "city":"PURMEREND",
           "adress":"Westerweg 60",
           "zipcode":"1445 AD",
           "latitude":"52,5005610",
           "longitude":"4,9933230"
        },
        "urls":[
           "http:\/\/www.hampshirehotels.nl"
        ],
        "media":[
           {
              "url":"https:\/\/media.iamsterdam.com\/ndtrc\/Images\/20110113\/cd70d638-da40-4b59-8138-edb76793b37f.jpg",
              "main":"true"
           },
           {
              "url":"https:\/\/media.iamsterdam.com\/ndtrc\/Images\/20110113\/c7affd4e-1f55-42c6-91f7-bccdf68cdf05.jpg",
              "main":""
           },
           {
              "url":"https:\/\/media.iamsterdam.com\/ndtrc\/Images\/20110113\/6d8df3cd-5c47-4390-90b6-5766ae08ab45.jpg",
              "main":""
           },
           {
              "url":"https:\/\/media.iamsterdam.com\/ndtrc\/Images\/20110113\/041ce59d-a7e9-46f9-b6e7-f4a218b3d406.jpg",
              "main":""
           }
        ],
        "dates":[
           
        ],
        "lastupdated":"2017-01-04 14:08:36",
        "eigenschappen":{
           "4.1":{
              "Catid":"4.1",
              "Value":"4",
              "CategoryArea":"Classificatie",
              "Category":"Classificatie in sterren"
           },
           "3.6":{
              "Catid":"3.6",
              "Value":"True",
              "CategoryArea":"Lidmaatschappen",
              "Category":"Lid VVV"
           },
           "42.2":{
              "Catid":"42.2",
              "Value":{
                 
              },
              "CategoryArea":"Contactinfo zakelijk",
              "Category":"E-mail"
           },
           "42.3":{
              "Catid":"42.3",
              "Value":{
                 
              },
              "CategoryArea":"Contactinfo zakelijk",
              "Category":"Telefoon"
           }
        }
     }
    const wrapper = shallowMount(SpotPreview, {
        props: {spotData, language}
    });
    it('renders title in selected language', () => {
        expect(wrapper.find('[data-test="spot-preview__title"]').text()).toBe("Hampshire Golfhotel Waterland")
    })
  })