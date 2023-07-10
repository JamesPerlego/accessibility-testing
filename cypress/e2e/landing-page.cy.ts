// <reference types="cypress" />
import PerlegoURL from '../support/url';


describe('Accessability checking for landing page', () => {

    it('should check for accessibility violation on the landing page', () => {
        cy.checkPageA11y(PerlegoURL.home);
    });
})