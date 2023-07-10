/// <reference types="cypress" />


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
  }

  const severityIndicators = {
    minor:    '⚪️',
    moderate: '🟡',
    serious:  '🟠',
    critical: '🔴',
  }
  
  function callback(violations) {
    violations.forEach(violation => {
      const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))
  
      Cypress.log({
        name: `${severityIndicators[violation.impact]} A11Y`,
        consoleProps: () => violation,
        $el: nodes,
        message: `[${violation.help}](${violation.helpUrl})`
      })
  
      violation.nodes.forEach(({ target }) => {
        Cypress.log({
          name: '🔧',
          consoleProps: () => violation,
          $el: Cypress.$(target.join(',')),
          message: target
        })
      })
    });
  }
  
  Cypress.Commands.add("checkPageA11y", (path) => {
    cy.visit(path)
    cy.injectAxe()
    cy.checkA11y(null, null, callback)
  })
  
  

