import { gql } from "@apollo/client";
export const GET_MENU = gql`
  query getMenuItems {
    getMenuItems {
      success
      code
      menuItems {
        price
        name
        ingredients
        image
        id
        description
        category
      }
    }
  }
`;