class ComputersPage {

    elements = {
        addComputerButton: () => cy.get('[id="add"]'),
        filterComputerByNameButton: () => cy.get('[id="searchsubmit"]'),
        aceComputerText: () => cy.contains("ACE"),
        ComputerTxt: () => cy.get('[class="alert-message warning"]'),
        computersTable: () => cy.get('[class="computers zebra-striped"]')
    }

    getAddComputerButton(){
        return this.elements.addComputerButton()
    }

    getFilterComputerByNameButton(){
        return this.elements.filterComputerByNameButton()
    }

    getAceComputerText(){
        return this.elements.aceComputerText()
    }

    getComputerTxt(){
        return this.elements.ComputerTxt()
    }

    getComputersTable(){
        return this.elements.computersTable()
    }
}
export default ComputersPage