import ComputersPage from "./pages/ComputersPage"

const computers_page = new ComputersPage()

describe("Add a Computer Tests", () => {
    it("Add a new computer", () => {
        cy.visit("/computers")
        computers_page.getAddComputerButton().click()
    })
})