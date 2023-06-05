import Spinner from "../../UI/Spinner";
import Link from "next/link";
import HistoryItem from "./HistoryItem";

type Props = {
  getOrdersHistory: {
    code: string;
    message: string;
    orders: OrderHistoryItem[] | [];
  };
  loadingOrders: boolean;
};

export default function OrderHistory({
  getOrdersHistory,
  loadingOrders,
}: Props) {
  const { orders } = getOrdersHistory || [];
  console.log(orders);

  return (
    <div>
      {loadingOrders ? (
        <Spinner />
      ) : (
        <div>
          {orders?.length === 0 ? (
            <div>
              <p className='text-center text-xl text-slate-500 mt-10'>
                No orders yet
              </p>
              <Link href='/menu'>
                <button className='bg-orange-500 text-white font-medium px-4 py-2 rounded-md mt-8 mx-auto block hover:bg-orange-600'>
                  Order now
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <div className='flex flex-col items-center justify-center w-full'>
                {orders?.map((order: OrderHistoryItem) => (
                  <HistoryItem key={order.id} order={order} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
