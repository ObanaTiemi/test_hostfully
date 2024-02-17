class AddComputerPage {

    elements = {
        computerNameTxf: () => cy.get('[id="name"]'),
        computerIntroTxf: () => cy.get('[id="introduced"]'),
        computerDiscTxf: () => cy.get('[id="discontinued"]'),
        computerCompanySField: () => cy.get('select')
    }

}
export default AddComputerPage