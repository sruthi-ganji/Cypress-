import * as Windows_Elements from '../PageElements/WindowPageElements'
class WindowPage {

   /* pagetitle(){
        cy.title().should('eq', 'The Internet')
    }*/
    
    pageHeading(){
        //verifying the page heading
        cy.get('h3').should('have.text','Opening a new window')
    }

    selectNewWindows() {
       //opening the new window
        cy.get(Windows_Elements.Window).invoke('removeAttr', 'target').should('have.text','Click Here').click();
    }
    verifyTitle(){
        //verifying that new window is open or not
        cy.title().should('eq','New Window')
    }


}
export default WindowPage;