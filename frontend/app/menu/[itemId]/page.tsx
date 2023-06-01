import { notFound } from "next/navigation";
import { getClient } from "@/lib/client";
import { GET_MENU } from "@/graphql/queries";
import { Metadata } from "next";
import SingleItem from "./components/SingleItem";

export const dynamic = "force-dynamic";

const getItems = async () => {
  const { data } = await getClient().query({
    query: GET_MENU,
  });
  const menuItems = data.getMenuItems.menuItems;
  return menuItems;
};

export async function generateStaticParams() {
  const menuItems = await getItems();
  const staticParams = menuItems.map((item: MenuItem) => ({ itemId: item.id }));
  return staticParams;
}

type Props = {
  params: { itemId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const menuItems = await getItems();
  const { itemId } = params;
  const foundItem = menuItems.find((item: MenuItem) => item.id === itemId);

  if (!foundItem) {
    return {
      title: "Item Not found",
    };
  }

  return {
    title: foundItem.name,
  };
}

export default async function SingleItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const { data } = await getClient().query({
    query: GET_MENU,
  });
  const menuItems = data.getMenuItems.menuItems;

  const { itemId } = params;
  const foundItem = menuItems.find((item: MenuItem) => item.id === itemId);
  console.log(foundItem);
  if (!foundItem) {
    return notFound();
  }

  return (
    <div className='bg-orange-50  min-w-full absolute top-0 min-h-max'>
      <SingleItem foundItem={foundItem} />
    </div>
  );
}
