// <reference types="cypress" />
import PerlegoURL from '../support/url';

function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    ) 
    cy.task('table', violationData)
  };

describe('Accessability checking for landing page', () => {

    before(() => {
      cy.visit(PerlegoURL.home);
      cy.injectAxe();
    });

    it('should check it has not detected accessability violation', () => {
        cy.checkA11y(null, null, terminalLog)
    });
})