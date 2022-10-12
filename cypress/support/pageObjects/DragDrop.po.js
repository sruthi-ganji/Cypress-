
import * as DragDropElements from '../PageElements/DragandDropElements'
const dataTransfer = new DataTransfer();
class DragDrop {
    /*pageTitle() {
        cy.title().should('eq', 'The Internet')
    }*/
    pageHeading() {
        //checking the page heading
        cy.get('h3').should('have.text', 'Drag and Drop')
    } 
    beforeDrag() {
        //checking the header of drag and drop
        cy.get(DragDropElements.Drag).should('contain.text', 'A')
        cy.get(DragDropElements.Drop).should('contain.text', 'B')
    }
    selectDrag() {
        //select the boxA drag to box b   
        cy.get(DragDropElements.Drag).trigger('dragstart', {
            dataTransfer
        });
    }
    selectDrop() {
        //drop at boxb
        cy.get(DragDropElements.Drop).trigger('drop', {
            dataTransfer
        });
    }
    afterDrop() {
        //after drag and drop , checking the header of box
        cy.get(DragDropElements.Drag).should('contain.text', 'B')
       
    }




}
export default DragDrop;