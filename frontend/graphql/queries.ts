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
        extendedDescription
      }
    }
  }
`;

export const GET_USER_DATA = gql`
  query GetCustomerData {
    getCustomerData {
      firstName
      lastName
      phone
      savedDeliveryAddress {
        address
        city
        zipCode
      }
    }
  }
`;

export const GET_ORDERS_HISTORY = gql`
  query GetOrdersHistory {
    getOrdersHistory {
      code
      message
      orders {
        createdAt
        deliveryDetails {
          address
          city
          phone
          receiver
          zipCode
        }
        id
        status
        totalPrice
        items {
          menuItem {
            name
            price
          }
          quantity
        }
      }
    }
  }
`;
