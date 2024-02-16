import { gql } from "@apollo/client";



export const CREATE_TICKET = gql`
mutation createTicket($name: String!, $email: String!, $description: String!) {
    createTicket(name: $name, email: $email, description: $description) {
      _id
    }
  }
`;


export const UPDATE_TICKET_STATE = gql`
mutation updateTicketState($id: ID!, $status: String!) {
  updateTicketState(_id: $id, status: $status) {
    _id
  }
}
`;

