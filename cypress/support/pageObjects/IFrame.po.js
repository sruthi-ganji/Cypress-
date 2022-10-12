
import * as iframeElements from '../PageElements/IframeElements'
class IFrame {
    /*pageTitle() {
        //checking the page title
        cy.title().should('eq', 'The Internet')
    }*/

    clickIframe() {
        //clicking the Iframe button
        cy.get(iframeElements.Iframelink).click()
    }
    validatingPage() {
        //after clicking iframe verifying the  page is visible or not 
        cy.get('h3').should('be.visible')
    }
    selectiFrame() {
        //select the iframe and clearing it and typing the command
        cy.get(iframeElements.Iframe).then(function ($iFrame) {

            const iFramecontent = $iFrame.contents().find('body')
            cy.wrap(iFramecontent).clear().click().type('Cypress Training').type('{selectall}')

        })
    }
    clickingItalic() {
        //clicking the Italic button
        cy.get(iframeElements.ClickItalic).click()
    }
    validatingItalic() {
        //Validating Italic is clicked or not
        cy.contains(iframeElements.Italic).should('have.text', 'Italic')
    }
    clickingFormat() {
        //click on format
        cy.contains(iframeElements.ClickFormatmenu).click()
    }
    validatingFormat() {
        //After clicking ,menu bar should be visible
        cy.get(iframeElements.format).should('be.visible')
    }
    clickingTextColor() {
        //Click on text colour if it is visible 
        cy.contains(iframeElements.ClickTextColoroption).should('be.visible').click()
    }
    validatingTextcolour() {
        //After clicking Text colour the colour box should be visible
        cy.get(iframeElements.textcolour).should('be.visible')
    }
    clickColor() {
        //in colour box click on colour
        cy.get(iframeElements.Clickcolor).click()
    }
    
}
export default IFrame;