/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Test Contact Us form via Automation Test Store', () => {
    it('should be able to submit a successful submission via contact us form',  () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//ul[@class='info_links_footer']//a[normalize-space()='Contact Us']").click();
        // cy.xpath("//a[contains(@href, 'contact')]").click()

        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function (itemHeaderText) {
            console.log('clicked the following item: ' + itemHeaderText.text());
        })
        cy.get('#ContactUsFrm_first_name').type('text')
        cy.get('#ContactUsFrm_email').type('email@email.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional information discount to the bulk address')
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
})