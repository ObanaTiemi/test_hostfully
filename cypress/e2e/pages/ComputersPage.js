class ComputersPage {

    elements = {
        addComputerButton: () => cy.get('[id="add"]'),
        filterComputerByNameButton: () => cy.get('[id="searchsubmit"]'),
        aceComputerText: () => cy.contains("ACE")
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

}
export default ComputersPage