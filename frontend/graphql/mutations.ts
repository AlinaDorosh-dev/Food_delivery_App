import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      code
      message
      success
      token {
        token
      }
      user {
        email
        id
        firstName
        lastName
      }
    }
  }
`;

export const AUTH_USER = gql`
  mutation AuthUser($input: AuthInput) {
    authUser(input: $input) {
      token
    }
  }
`;

export const SAVE_DELIVERY_DETAILS = gql`
  mutation SaveDeliveryDetails($input: DeliveryDetaisInput) {
    saveDeliveryDetails(input: $input)
  }
`;

export const CREATE_ORDER = gql`
mutation CreateOrder($input: OrderInput) {
  createOrder(input: $input)
}
`;
