import ComputersPage from "./pages/ComputersPage"
import AddComputerPage from "./pages/AddComputerPage"

const computers_page = new ComputersPage()
const add_computer_page = new AddComputerPage()

describe("Add a Computer Tests", () => {
    it("Add a new computer", () => {
        cy.visit("/computers")
        computers_page.getAddComputerButton().click()
        add_computer_page.getComputerNameTxf().type('ASCI 2')
        add_computer_page.getComputerIntroTxf().type('2020-02-16')
        add_computer_page.getComputerDiscTxf().type('2022-02-16')
        add_computer_page.getComputerSField().select('Nintendo')
        add_computer_page.getCreateComputerBtn().click()
        computers_page.getAddedComputerTxt().should('contain.text', 'Done !')
    })
})