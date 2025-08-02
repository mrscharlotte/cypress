// <reference types="cypress"/>
import produtosPage from '../support/page_objects/produtos.page'
import checkoutPage from '../support/page_objects/checkout.page'
import { clienteFake } from '../support/utils/dadosCliente'

describe('Fluxo de pedido otimizado', () => {
   before(() => {
    produtosPage.visitarUrl()
  })
    const produtos = [
    { nome: 'Argus All-Weather Tank', tamanho: 'L', cor: 'Gray' },
    { nome: 'Atlas Fitness Tank', tamanho: 'XL', cor: 'Blue' },
    { nome: 'Aether Gym Pant', tamanho: '36', cor: 'Green' },
    { nome: 'Arcadio Gym Short', tamanho: '36', cor: 'Blue' }
  ]

  

  it('Deve finalizar um pedido com quatro produtos', () => {
    produtos.forEach(({ nome, tamanho, cor }) => {
      produtosPage.buscarProdutoLista(nome)
      produtosPage.addProdutoCarrinho(tamanho, cor)
      cy.get('.woocommerce-message', { timeout: 10000 }).should('contain', 'foi adicionado')
    })

    cy.get('.woocommerce-message a').contains('ver carrinho').click()
    cy.get('.checkout-button', { timeout: 10000 }).click()
    cy.get('#billing_first_name', { timeout: 10000 }).should('be.visible')

    checkoutPage.preencherFormulario(clienteFake)
    checkoutPage.selecionarPagamento()
    checkoutPage.finalizarPedido()
    checkoutPage.validarPedidoSucesso()
  })
})