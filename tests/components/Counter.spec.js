/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
  it('Rendered', () => {
    // mount command comes from
    // https://github.com/bahmutov/cypress-vue-unit-test
    mount(Counter, { 
      propsData: { 
        // msg: 'Hello, Cypress!' 
      } 
    })

    
    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.contains('button', '+1').should('be.visible')
    cy.contains('div', 'counter: 0').should('be.visible')
  })

  it('Increment', () => {
    mount(Counter, { 
      propsData: { 
        // msg: 'Hello, Cypress!' 
      } 
    })

    cy.get('button').click()
    cy.contains('div', 'counter: 1').should('be.visible')
  })
})