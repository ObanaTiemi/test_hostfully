class DeleteComputerPage{

    elements = {
        deleteComputerBtn: () => cy.get('[class="btn danger"]')
    }

    getDeleteComputerBtn(){
        return this.elements.deleteComputerBtn()
    }

}
export default DeleteComputerPage