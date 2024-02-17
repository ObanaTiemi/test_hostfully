class AddComputerPage {

    elements = {
        computerNameTxf: () => cy.get('[id="name"]'),
        computerIntroTxf: () => cy.get('[id="introduced"]'),
        computerDiscTxf: () => cy.get('[id="discontinued"]'),
        computerCompanySField: () => cy.get('select'),
        createComputerBtn: () => cy.get('[type="submit"]'),
    }

    getComputerNameTxf(){
        return this.elements.computerNameTxf()
    }

    getComputerIntroTxf(){
        return this.elements.computerIntroTxf()
    }

    getComputerDiscTxf(){
        return this.elements.computerDiscTxf()
    }

    getComputerSField(){
        return this.elements.computerCompanySField()
    }

    getCreateComputerBtn(){
        return this.elements.createComputerBtn()
    }

}
export default AddComputerPage