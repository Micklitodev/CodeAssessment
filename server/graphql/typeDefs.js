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
    getSpecificTicket(_id: ID!): Ticket
  }

  
  type Mutation {

    createTicket( 
      name: String!
      email: String!
      description: String!
    ): Ticket

    updateTicketState(
    _id: ID!
    status: String!
    ): Ticket

  }
`;

module.exports = typeDefs;