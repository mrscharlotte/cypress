import { faker } from '@faker-js/faker'

export const clienteFake = {
  nome: faker.person.firstName(),
  sobrenome: faker.person.lastName(),
  empresa: faker.company.name(),
  endereco1: faker.location.streetAddress(),
  endereco2: faker.location.secondaryAddress(),
  cidade: faker.location.city(),
  estado: 'SP',
  cep: '01001-000',
  telefone: faker.phone.number('119#######'),
  email: faker.internet.email()}