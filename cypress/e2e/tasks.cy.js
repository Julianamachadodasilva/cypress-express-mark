/// <reference types="cypress" />

describe('tarefas', ()=>{

    let testData;   //Essa variavél vai iniciar vazia
    
    // Inserindo um gancho no projeto, para reaproveitar um comportamento, não é muito bom, mas é necessário nesse projeto
    // Vai entrar na pasta fixture 
    before(()=> {
       cy.fixture('tasks').then(t => {
            testData = t
       })     
    })

    context('cadastro', () => {
        it('deve cadatrar uma nova tarefa', ()=>{

            const taskName = 'Ler um Livro de node.js' 
    
            cy.deleteTaskByName(taskName)  // Chama a API 'DELETE' em support>commands.js
            cy.createTask(taskName)   // Chama o comando acessar url em support>commands.js 
    
            cy.contains('main div p', taskName)
                .should('be.visible')
        })
    
        it('não deve permitir tarefa duplicada',()=> {
    
            const task = testData.dup   // Pega os dados da pasta fixture junto com a variavél criada antes dos contextos
    
            cy.deleteTaskByName(task.name)  // Chama a API 'DELETE' em support>commands.js
            cy.postTask(task)               // Chama a API 'POST' em support>commands.js  // Dado que eu tenho uma tarefa duplicada
            cy.createTask(task.name)        // Chama o comando acessar url em support>commands.js  // Dado que eu tenho uma tarefa duplicada
            
            // Então vejo a mensagem de duplicidade
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
        })
    
        it('campo obrigatório', ()=> {
            cy.createTask()      
            cy.isRequired('This is a required field')   // Chama o comando required field em support>commands.js 
        })
    })
    context('atualização', () => {
        it('deve encerrar uma tarefa', ()=> {
            const task = {
                name: 'Pagar contas de consumo', 
                is_done: false
            }

            cy.deleteTaskByName(task.name)  // Chama a API 'DELETE' em support>commands.js
            cy.postTask(task)               // Chama a API 'POST' em support>commands.js

            cy.visit('/')   // Esta vindo do cypress.config.js

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })
    context('exclusão', ()=> {
        it('excluir uma tarefa', ()=> {
            const task = {
                name: 'Estudar Javascript', 
                is_done: false
            }

            cy.deleteTaskByName(task.name)  // Chama a API 'DELETE' em support>commands.js
            cy.postTask(task)               // Chama a API 'POST' em support>commands.js

            cy.visit('/')   // Esta vindo do cypress.config.js

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
}) 