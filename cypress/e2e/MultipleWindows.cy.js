///<reference types ="Cypress" />
import HomePage from '../support/pageObjects/HomePage.po'
import WindowPage from '../support/pageObjects/WindowPage.po'
import CommonMethods from '../support/CommonMethods'
const commonMethods = new CommonMethods()
const homePage = new HomePage()
const windowPage = new WindowPage()


describe("Multiple windows", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })
  it('should open the window ', () => {
    homePage.selectMultipleWindows()
    commonMethods.pageTitle()
    windowPage.pageHeading()
    windowPage.selectNewWindows()
    windowPage.verifyTitle()

  });

});