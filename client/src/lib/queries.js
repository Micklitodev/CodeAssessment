import { gql } from "@apollo/client";

export const QUERY_ALL_TICKETS = gql`
  query Query {
      getTickets {
        _id
        description
        email
        name
        status
      }
    }
`;


export const GET_SPECIFIC_TICKET = gql`
  query GetSpecificTicket($id: ID!) {
    getSpecificTicket(_id: $id) {
      _id
      description
      email
      name
      status
    }
  }
`; 
