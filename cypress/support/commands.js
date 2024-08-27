// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Acessar url e clicar no botão create
Cypress.Commands.add('createTask', (taskName = '') => {
    cy.visit('/')

    cy.get('input[placeholder="Add a new Task"]').as('inputTask')

    if (taskName !== '') {
        cy.get('@inputTask')
            .type(taskName)
    }

    cy.contains('button', 'Create').click()
})

// Required field
// Chama o invoke do cypress pois a mensagem de erro não é html
Cypress.Commands.add('isRequired', (targetMessage) => {
    cy.get('@inputTask')
        .invoke('prop', 'validationMessage')
        .should((text) => {
            expect(targetMessage).to.eq(text)
        })
})

// Deleta o id da ultima task criada no site
Cypress.Commands.add('deleteTaskByName', (taskName) => {
    cy.request({
        url: Cypress.env('apiUrl') + '/helper/tasks',   // Esta vindo do cypress.config.js
        method: 'DELETE',
        body: { name: taskName }
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

// Cria a task 'Estudar javascript como false
Cypress.Commands.add('postTask', (task) => {
    cy.request({
        url: Cypress.env('apiUrl') + '/tasks',  // Esta vindo do cypress.config.js
        method: 'POST',
        body: task
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})