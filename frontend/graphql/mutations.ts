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
