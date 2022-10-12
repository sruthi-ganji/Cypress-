///<reference types ="Cypress" />
import HomePage from '../support/pageObjects/HomePage.po'
import FileDownload from '../support/pageObjects/FileDownload.po'
import CommonMethods from '../support/CommonMethods'
const commonMethods = new CommonMethods()
const homePage = new HomePage()
const fileDownload = new FileDownload()


describe("download file", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
    })
    it.only('should download the file ', () => {
        homePage.selectFileDownload()
        commonMethods.pageTitle()
        fileDownload.pageHeading()
        fileDownload.validatingFileVisible()
        fileDownload.selectDownload()
        fileDownload.downloadVerification()



    });



});