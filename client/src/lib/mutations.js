import { gql } from "@apollo/client";



export const CREATE_TICKET = gql`
mutation createTicket($name: String!, $email: String!, $description: String!) {
    createTicket(name: $name, email: $email, description: $description) {
      _id
    }
  }
`;

