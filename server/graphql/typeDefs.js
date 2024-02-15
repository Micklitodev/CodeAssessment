const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Ticket {
    _id: ID
    name: String
    email: String
    description: String
    status: String
  }










  type Query {
    getTickets: [Ticket]
  }



  type Mutation {

    createTicket( 
      name: String!
      email: String!
      description: String!
      status: String!
    ): Ticket

    updateTicketState(
    _id: ID!
    name: String!
    email: String!
    description: String!
    status: String!
    ): Ticket

  }
`;

module.exports = typeDefs;