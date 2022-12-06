

describe('examples', () => {
    it('Examples of Selectors via WebdriverUni Contact Us Page', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');

        // by tag name
        cy.get('input')

        // by attribute name and value
        cy.get("input[name='first_name']");

        // by id
        cy.get('#contact_me');

        // by class name
        cy.get('.feedback-input');

        // by multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        // by two different attributes
        cy.get("[name='email'][placeholder='Email Address']");

        // by xpath
        cy.get('input[name="first_name"]');
    })
})