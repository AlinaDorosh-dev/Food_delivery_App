/**
 * @fileoverview Confirmation component. It shows the order summary and allows to confirm the order.
 * 
 */

import useCart from "@/hooks/useCart";
import { GET_USER_DATA } from "@/graphql/queries";
import { useQuery, useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import { CREATE_ORDER, SAVE_DELIVERY_DETAILS } from "@/graphql/mutations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  formValues: DeliveryFormValues;
  setOpenConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
};

export default function Confirmation({
  formValues,
  setOpenConfirmation,
  setOrderCreated,
  setErrMsg,
}: Props) {
  const router = useRouter();
  const { data } = useQuery(GET_USER_DATA);
  const { getCustomerData } = data;
  const { cartItems, setCartItems } = useCart();

  //destructure formValues
  const { name, surname, address, city, zip, phone, saveDetails } = formValues;

  const [createOrder, { error }] = useMutation(CREATE_ORDER);

  const [saveDeliveryDetails, { error: err }] = useMutation(
    SAVE_DELIVERY_DETAILS
  );

  //If there is an error, set error message
  useEffect(() => {
    if (error || err) {
      setErrMsg(`${error?.message} ${err?.message}`);
    }
  }, [error, err]);

  const total: number = cartItems.reduce(
    (count, item) => count + item.menuItem.price * item.quantity,
    0
  );

  const delivery: number = total > 30 ? 0 : 3.5;

  const totalToPay: string = (total + delivery).toFixed(2);

  const handleConfirmOrder = async () => {
    //Avoid order creation if there are no items in cart
    if (cartItems.length === 0) {
      setErrMsg("Your cart is empty");
      return;
    }
    try {
      //Create new order
      const newOrder = await createOrder({
        variables: {
          input: {
            deliveryDetails: {
              receiver: `${name} ${surname}`,
              address: address,
              city: city,
              zipCode: zip,
              phone: phone,
            },
            items: cartItems.map((item) => ({
              menuItem: item.menuItem.id,
              quantity: item.quantity,
              price: item.menuItem.price,
            })),
            totalPrice: Number(totalToPay),
          },
        },
      });
      //If user wants to save delivery details, save them to DB
      if (saveDetails) {
        await saveDeliveryDetails({
          variables: {
            input: {
              receiver: `${name} ${surname}`,
              address: address,
              city: city,
              zipCode: zip,
              phone: phone,
            },
          },
        });
      }
      if (newOrder) {
        setOrderCreated(true);
      }
      //Set timeout to close modal
      setTimeout(() => {
        //Redirect to menu page
        router.push("/menu");
        setOpenConfirmation(false);
      }, 2800);

      //Set timeout to clear cart and local storage
      setTimeout(() => {
        //Clear cart
        setCartItems([]);
        //Clear local storage
        localStorage.removeItem("cart");
      }, 3100);
    } catch (orderError) {
      console.log("orderError", orderError);
    }
  };
  return (
    <>
      <div className='p-2 text-center'>
        <h2 className='my-2 text-lg font-semibold text-orange-600'>
          Dear {getCustomerData?.firstName} {getCustomerData?.lastName}, thank
          you for your order!
        </h2>

        <h3 className='mb-4 text-sm font-medium text-slate-700'>
          Here is your order summary:
        </h3>
        <div className='flex flex-col items-center justify-center text-slate-700  text-sm mb-4 w-full'>
          <div className='mb-2 border-b-4 border-gray-400 w-[95%]'>
            {cartItems.map((item) => (
              <div
                key={item.menuItem.id}
                className='flex justify-between mb-1  pb-1 w-full mx-auto'
              >
                <p>{item.menuItem.name}</p>
                <p>
                  {item.quantity}x{item.price} €
                </p>
              </div>
            ))}
            <div className='flex justify-between mb-1  pb-1 w-full mx-auto'>
              <p>Delivery</p>
              <p>{delivery ? `${delivery}€` : "Free"} </p>
            </div>
          </div>

          <p className='font-semibold text-sm mb-4'>
            Total to pay: {totalToPay}€
          </p>
          <p className='font-semibold text-sm '>Delivery details:</p>
          <ul className='scale-75'>
            <li className='mb-1'>
              <span className='font-medium'>Reciever:</span> {name} {surname}
            </li>
            <li className='mb-1'>
              <span className='font-medium'> Address: </span>
              {address}, {zip}, {city}
            </li>
            <li>
              <span className='font-medium'>Contact phone: </span>
              {formValues.phone}
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-evenly mt:4 md:mt-8'>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            data-modal-hide='popup-modal'
            type='button'
            className='bg-orange-400 hover:bg-orange-500 w-1/3 rounded-lg  px-4 py-2 text-center text-white  font-semibold mt-2 md:mt-6 mb-2 md:mb-4'
            onClick={() => {
              handleConfirmOrder();
            }}
          >
            Confirm
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            data-modal-hide='popup-modal'
            type='button'
            className=' bg-white hover:bg-gray-100  w-1/3 rounded-lg  px-4 py-2 text-center border border-gray-200 text-gray-500  font-semibold mt-2 md:mt-6 mb-2 md:mb-4'
            onClick={() => setOpenConfirmation(false)}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </>
  );
}
