/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('navigating to specific product pages',  () => {
        cy.visit('https://automationteststore.com/');
        // the following will fail
        // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeUpLink.click();
        // skinCare.click();

        // the following will pass
        // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeUpLink.click();
        // const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skinCare.click();

        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });

    it('navigating to specific product pages',  () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        // following code will fail
        // const header = cy.get('//span[@class=\'maintext\']');
        // cy.log(header.text());


        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq("Makeup");
        })


    });

    it.only('Validates the properties of contact us page',  () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');

        // Uses cypress commands and chaining
        cy
            .contains('form#ContactUsFrm', 'Contact Us Form')
            .find('#field_11')
            .should('contain.text', 'First name');

        // JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form')
            .then(text => {
                const firstNameText = text.find('#field_11').text()
                expect(firstNameText).to.contain('First')

                // Embedded commands (Closure)

                cy.get('#field_11').then(fnText => {
                    cy.log(fnText.text());
                })
            })
    });
})