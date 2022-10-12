
///<reference types ="Cypress" />

import HomePage from '../support/pageObjects/HomePage.po';
import IFrame from '../support/pageObjects/IFrame.po'
import CommonMethods from '../support/CommonMethods'
const homePage = new HomePage
const iframe = new IFrame()
const commonMethods = new CommonMethods()

describe("Hanling iframe", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })
  it('should open the frame', () => {
   
    homePage.selectIframe()
    commonMethods.pageTitle()
    iframe.clickIframe()
    iframe.validatingPage()
    iframe.selectiFrame()
    iframe.clickingItalic()
    iframe.validatingItalic()
    iframe.clickingFormat()
    iframe.validatingFormat()
    iframe.clickingTextColor()
    iframe.validatingTextcolour()
    iframe.clickColor()

  });


});


