"use client";
import { gql, useQuery } from "@apollo/client";
import MenuItem from "./MenuItem";

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
  const { data } = useQuery(GET_MENU);

 

  return (
    <div className="flex flex-row justify-evenly flex-wrap p-4 mt-6 md:mt-10 lg:mt-14">
      {data?.getMenuItems?.menuItems.map((item: any) => {
        return (
          <MenuItem key={item.id} item={item} />
        );
      })}
    </div>
  );
}
