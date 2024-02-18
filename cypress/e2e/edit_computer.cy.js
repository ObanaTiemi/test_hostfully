import ComputersPage from "../pages/ComputersPage";
import AddComputerPage from "../pages/AddComputerPage";

const computers_page = new ComputersPage()
const add_computer_page = new AddComputerPage()

describe("Edit a computer tests", () => {
    it("Edit the first computer in the list", () => {
        cy.visit("/computers")
        computers_page.getComputersTable().within(() => {
            cy.get('td').eq(0).contains('ACE').click()
        })
        add_computer_page.getComputerNameTxf().clear().type('ACES')
        add_computer_page.getCreateComputerBtn().click()
        computers_page.getComputerTxt().should('contain.text', 'ACES')
    })
    it("Edit a computer with incorrect dates", () => {
        cy.visit("/computers")
        computers_page.getComputersTable().within(() => {
            cy.get('td').eq(0).contains('ACE').click()
        })
        add_computer_page.getComputerIntroTxf().clear().type('20200216')
        add_computer_page.getComputerDiscTxf().clear().type('20220216')
        add_computer_page.getCreateComputerBtn().click()
        add_computer_page.getErrComputer().should('be.visible').should('contain.text', 'Failed')
    })
})