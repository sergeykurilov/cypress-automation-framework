/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Inspect Automation Test Store items using chain of commands', () => {
    it('click on the first item using item header',  () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
            .click();
    });

    it.only('click on the first item using item text',  () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname')
            .contains('a', 'Skinsheen Bronzer Stick')
            .click()
            .then(function (itemHeaderText) {
                console.log('selected the following item: ' + itemHeaderText.text());
            })
        cy.log('test complete');
    });

    it('click on the first item using item text',  () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper')
            .find('.prdocutname')
            .eq(0)
            .click()
    });
})