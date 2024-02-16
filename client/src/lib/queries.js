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
