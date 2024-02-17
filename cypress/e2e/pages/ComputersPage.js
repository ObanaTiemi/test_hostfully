class ComputersPage {

    elements = {
        addComputerButton: () => cy.get('[id="add"]'),
        filterComputerByNameButton: () => cy.get('[id="searchsubmit"]'),
        aceComputerText: () => cy.contains("ACE"),
        addedComputerTxt: () => cy.get('[class="alert-message warning"]')
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

    getAddedComputerTxt(){
        return this.elements.addedComputerTxt()
    }
}
export default ComputersPage