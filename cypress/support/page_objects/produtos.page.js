class ProdutosPage {
  visitarUrl() {
    cy.visit('produtos')
  }

  buscarProduto(nomeProduto) {
    cy.get('[name="s"]').eq(0).should('be.visible').type(`${nomeProduto}{enter}`)
  }

  buscarProdutoLista(nomeProduto) {
    cy.get('.products > .row').contains(nomeProduto).click()
  }

  visitarProduto(nomeProduto) {
    const urlFormatada = nomeProduto.replace(/ /g, '-')
    cy.visit(`produtos/${urlFormatada}`)
  }

  addProdutoCarrinho(tamanho, cor, quantidade = 1) {
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  }
}

export default new ProdutosPage()