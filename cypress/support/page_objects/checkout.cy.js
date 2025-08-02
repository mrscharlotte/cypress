class CheckoutPage {
  preencherFormulario(cliente) {
    cy.get('#billing_first_name').type(cliente.nome)
    cy.get('#billing_last_name').type(cliente.sobrenome)
    cy.get('#billing_company').type(cliente.empresa)
    cy.get('#billing_address_1').type(cliente.endereco1)
    cy.get('#billing_address_2').type(cliente.endereco2)
    cy.get('#billing_city').type(cliente.cidade)
    cy.get('#billing_state').select(cliente.estado)
    cy.get('#billing_postcode').type(cliente.cep)
    cy.get('#billing_phone').type(cliente.telefone)
    cy.get('#billing_email').type(cliente.email)
  }

  selecionarPagamento(metodo = 'bacs') {
    cy.get(`#payment_method_${metodo}`).check()
  }

  finalizarPedido() {
    cy.get('#place_order').click()
  }

  validarPedidoSucesso() {
    cy.get('.woocommerce-notice', { timeout: 10000 }).should('contain', 'Obrigado. Seu pedido foi recebido.')
  }
}

export default new CheckoutPage()