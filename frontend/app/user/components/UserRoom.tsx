"use client";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "@/graphql/queries";
import { useRouter } from "next/navigation";
import Spinner from "../../UI/Spinner";

export default function UserRoom() {
  const { token } = useAuth();
  const router = useRouter();

  //Check if user is logged in
  //   useEffect(() => {
  //     if (!token) {
  //       router.push("/login");
  //     }
  //   }, [token]);

  const { data, loading } = useQuery(GET_USER_DATA);
  const { firstName, lastName, phone, savedDeliveryAddress } =
    data?.getCustomerData ?? {};

  return (
    <div
      className={
        loading
          ? "flex flex-col items-center justify-center min-h-[80vh]"
          : "flex flex-col items-center justify-center"
      }
    >
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className='text-3xl font-semibold text-center mb-4 mt-20 md:mt-24 text-orange-500'>
            Welcome {firstName} {lastName}
          </h1>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Details:</h2>
            <p className="text-lg text-center mb-4">
              Phone: {phone || "N/A"}
            </p>
            {savedDeliveryAddress && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
                <p>{savedDeliveryAddress.address}</p>
                <p>{savedDeliveryAddress.city}</p>
                <p>{savedDeliveryAddress.zipCode}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
