///<reference types ="Cypress" />
import HomePage from '../support/pageObjects/HomePage.po'
import DragDrop from '../support/pageObjects/DragDrop.po'
import CommonMethods from '../support/CommonMethods'
const commonMethods = new CommonMethods()
const homePage = new HomePage()
const dragdrop = new DragDrop()

describe("Drag and Drop", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })
  it('should drag  column a to the column b', () => {
    homePage.selectDragAndDrop()
    commonMethods.pageTitle()
    dragdrop.pageHeading()
    dragdrop.beforeDrag()
    dragdrop.selectDrag()
    dragdrop.selectDrop()
    dragdrop.afterDrop()

  });
});