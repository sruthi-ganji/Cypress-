
import * as homepageElements from '../PageElements/HomePageElements'
class HomePage{
   
  
    selectMultipleWindows(){
        //click on multiple windows
        cy.get(homepageElements.MultipleWindows).click()
    }
    selectDragAndDrop(){
        //click on Drag and Drop
        cy.get(homepageElements.DragAndDrop).click()
    }
    selectFileDownload(){
        //click on File Download
        cy.get(homepageElements.FileDownload).click()
    }
    selectIframe(){
        //click on iframe
        cy.get(homepageElements.Frames).click()
    }

}
export default HomePage;