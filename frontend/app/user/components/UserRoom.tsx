/**
 * @fileoverview user room component to display user's personal info and order history.
 */
"use client";
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA, GET_ORDERS_HISTORY } from "@/graphql/queries";
import { useRouter } from "next/navigation";
import Spinner from "../../UI/Spinner";
import UserDrawer from "./UserDrawer";
import PersonalInfo from "./PersonalInfo";
import OrderHistory from "./OrderHistory";
import LogoutModal from "./LogoutModal";

export default function UserRoom() {
  const { token, setToken } = useAuth();
  const router = useRouter();

  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    setToken("");
    setConfirmLogout(false);
    router.push("/");
  };

  //Check if user is logged in
  //   useEffect(() => {
  //     if (!token) {
  //       router.push("/login");
  //     }
  //   }, [token]);

  const { data, loading } = useQuery(GET_USER_DATA);
  const { firstName, lastName, phone, savedDeliveryAddress } =
    data?.getCustomerData ?? {};

  const { data: ordersData, loading: loadingOrders } =
    useQuery(GET_ORDERS_HISTORY);
  const { getOrdersHistory } = ordersData ?? {};

  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div
      className={
        loading ? "flex flex-col items-center justify-center min-h-[80vh]" : ""
      }
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <UserDrawer
            setConfirmLogout={setConfirmLogout}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className={"sm:fixed sm:right-0 sm:w-2/3 md:w-3/4 lg:w-4/5"}>
            <h1 className='text-3xl font-semibold text-center mb-4 mt-6 sm:mt-20 md:mt-24 text-orange-500'>
              Welcome {firstName} {lastName}
            </h1>
            {selectedTab === 0 ? (
              <PersonalInfo
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                savedDeliveryAddress={savedDeliveryAddress}
              />
            ) : (
              <OrderHistory
                getOrdersHistory={getOrdersHistory}
                loadingOrders={loadingOrders}
              />
            )}
            {confirmLogout ? (
              <LogoutModal
                setConfirmLogout={setConfirmLogout}
                handleLogout={handleLogout}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
