"use client";
import { gql, useQuery } from "@apollo/client";

const GET_MENU = gql`
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

export default function Menu() {
  const { loading, error, data } = useQuery(GET_MENU);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error.message}`;</p>;
  console.log(data);

  return <div>Menu component</div>;
}
