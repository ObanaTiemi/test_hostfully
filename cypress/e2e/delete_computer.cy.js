import DeleteComputerPage from "../pages/DeleteComputerPage";
import ComputersPage from "../pages/ComputersPage";

const delete_computer_page = new DeleteComputerPage()
const computers_page = new ComputersPage()

describe("Delete a computer tests", () => {
    it("Delete the first computer in the list", () => {
        cy.visit("/computers")
        computers_page.getComputersTable().within(() => {
            cy.get('td').eq(0).contains('ACE').click()
        })
        delete_computer_page.getDeleteComputerBtn().click({force: true})
        computers_page.getComputerTxt().should('contain.text', 'ACE')
    })
})