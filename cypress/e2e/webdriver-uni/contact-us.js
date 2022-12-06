/// <reference types="Cypress" />

describe('Test Contact Us form via webdriveruni', () => {
    it('should be able to submit a successful submission via contact us form',  () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.document().should('have.property', 'charset').and('eq','UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')

        // cy.get('#contact-us').click({ force: true })
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Bloggs')
        cy.get('[name="email"]').type('email@email.com')
        cy.get('textarea.feedback-input').type('feedback')
        cy.get('[type="submit"]').click()
        cy.xpath('//div[@id=\'contact_reply\']/h1[.=\'Thank You for your Message!\']').should('have.text', 'Thank You for your Message!')
    });
    it('should NOT be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Bloggs')
        cy.get('textarea.feedback-input').type('feedback')
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain.text', 'Error');
    });
})