
class CommonMethods{
    pageTitle(){
        cy.title().should('eq', 'The Internet')
    }
}
export default CommonMethods;