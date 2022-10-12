
import * as  Download_Elements from '../PageElements/DownloadPageElements'
class FileDownload {
    /*pageTitle(){
        cy.title().should('eq', 'The Internet')
    }*/
    pageHeading() {
         //verifying the page heading
        cy.get('h3').should('have.text', 'File Downloader')
    }
    validatingFileVisible(){
         //checking the file is there or not
        cy.get(Download_Elements.Download).should('be.visible')
    } 
    selectDownload() {
        //downloading the file 
        cy.get(Download_Elements.Download).then((el) => {
            el.attr('download', '');
        }).click();
    }
    downloadVerification() {
         //verifying the file is downloaded or  not
        cy.verifyDownload("some-file.txt")
    }
   
}




export default FileDownload;