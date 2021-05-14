const { gql } = require('apollo-server');
//On untilise gql pour creer les TypeDefs necessaires au fonctionnement avec Apollo-server
module.exports = gql`
  type Colis {
    id: ID!
    numeroVoie: String!
    typeVoie: String!
    nomVoie: String!
    codePostal: String!
    ville: String!
    dateRetrait: String!
  }
  input CreateColisInput {
    numeroVoie: String!
    typeVoie: String!
    nomVoie: String!
    codePostal: String!
    ville: String!
    dateRetrait: String!
  }
  input UpdateColisInput {
    numeroVoie: String
    typeVoie: String
    nomVoie: String
    codePostal: String
    ville: String
    dateRetrait: String
  }
  input DeleteColisInput {
    id: ID!
  }
  # Ce type sert a retourner l'ID du colis détruit 
  type DeletePayload{ 
    id: ID!
  }
  type Query {
    colis: [Colis]
  }
  type Mutation {
    createColis(input: CreateColisInput!): Colis!
    updateColis(id: ID!, input: UpdateColisInput!): Colis!
    deleteColis(id: ID!): DeletePayload!
  }
  
`;
