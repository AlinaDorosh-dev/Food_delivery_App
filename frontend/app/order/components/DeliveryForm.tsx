"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormSection from "../../UI/FormSection";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "@/graphql/queries";
import useAuth from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import OrderConfirmationModal from "./OrderConfirmationModal";

export default function DeliveryForm() {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    phone: "",
    savedDeliveryAddress: {
      address: "",
      city: "",
      zipCode: "",
    },
    saveDetails: false,
  });

  const { token } = useAuth();

  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);

  //Check if user is logged in
  useEffect(() => {
    if (token) {
      setUserAuthenticated(true);
    }
  }, [token]);

  const [formValues, setFormValues] = useState<DeliveryFormValues>({
    name: "",
    surname: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    saveDetails: false,
  });

  const [onHover, setOnHover] = useState<boolean>(false);
  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);

  const { data } = useQuery(GET_USER_DATA);
  const { firstName, lastName, phone, savedDeliveryAddress } = userData;

  useEffect(() => {
    if (data) {
      const { getCustomerData } = data;
      setUserData(getCustomerData);
      formik.setValues({
        name: firstName,
        surname: lastName,
        address: savedDeliveryAddress?.address ?? "",
        city: savedDeliveryAddress?.city ?? "",
        zip: savedDeliveryAddress?.zipCode ?? "",
        phone: phone,
        saveDetails: false,
      });
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      name: firstName ?? "",
      surname: lastName ?? "",
      address: savedDeliveryAddress?.address ?? "",
      city: savedDeliveryAddress?.city ?? "",
      zip: savedDeliveryAddress?.zipCode ?? "",
      phone: phone ?? "",
      saveDetails: false,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zip: Yup.string().required("Zip is required"),
      phone: Yup.string().required("Phone is required"),
    }),
    onSubmit: async (values) => {
      console.log("values", values);
      setFormValues(values);
      setOpenConfirmation(true);
    },
  });

  return (
    <>
      {userAuthenticated ? (
        <>
          <div className='w-[90%] max-w-2xl mx-auto'>
            <form
              className='bg-white shadow-md rounded px-8 pt-4 md:pt-6 pb-4 md:pb-8 mb-4'
              onSubmit={formik.handleSubmit}
            >
              <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='md:w-1/2 md:px-2'>
                  <FormSection
                    label='name'
                    placeholder='Name'
                    type='text'
                    formik={formik}
                  />
                  <FormSection
                    label='surname'
                    placeholder='Surname'
                    type='text'
                    formik={formik}
                  />
                  <FormSection
                    label='phone'
                    placeholder='Phone'
                    type='text'
                    formik={formik}
                  />
                </div>
                <div className='md:w-1/2 md:px-2'>
                  <FormSection
                    label='address'
                    placeholder='Address'
                    type='text'
                    formik={formik}
                  />
                  <FormSection
                    label='city'
                    placeholder='City'
                    type='text'
                    formik={formik}
                  />
                  <FormSection
                    label='zip'
                    placeholder='Zip'
                    type='text'
                    formik={formik}
                  />
                </div>
              </div>

              <input
                type={"checkbox"}
                id={"saveDetails"}
                name={"saveDetails"}
                className='mr-2'
                onChange={formik.handleChange}
              />
              <label htmlFor={"saveDetails"} className='text-slate-700 '>
                Save delivery details
              </label>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className='bg-orange-400 hover:bg-orange-500  rounded-lg  px-4 py-2 text-center text-white w-full font-semibold mt-2 md:mt-6 mb-2 md:mb-4'
              >
                <input type='submit' value='Continue' />
              </motion.button>
              <div className='text-slate-700 '>
                <Link
                  href='/cart'
                  onMouseEnter={() => setOnHover(true)}
                  onMouseLeave={() => setOnHover(false)}
                >
                  <HiOutlineArrowNarrowLeft
                    className={
                      "inline-block mr-2" +
                      (onHover ? " -translate-x-2 transition duration-200" : "")
                    }
                    size={30}
                  />
                  <span
                    className={
                      onHover
                        ? "text-slate 800 font-medium transition duration-200"
                        : ""
                    }
                  >
                    Back to cart
                  </span>
                </Link>
              </div>
            </form>
            {openConfirmation ? (
              <OrderConfirmationModal
                formValues={formValues}
                setOpenConfirmation={setOpenConfirmation}
              />
            ) : null}
          </div>{" "}
        </>
      ) : (
        <div className='flex flex-col items-center justify-center w-full'>
          <h3 className=' text-2xl sm:text-xl font-semibold text-center  text-slate-700 max-w-xl p-3 mt-20'>
            Please log in before proceed.
          </h3>
          <Link
            href='/login'
            className='w-1/2 sm:w-1/3 md:w-1/4 bg-orange-500 hover:bg-orange-600 text-white text-center text-2xl sm:text-xl lg:text-md font-bold py-2 px-6 rounded-full mt-10'
          >
            <button>Go to login</button>
          </Link>
        </div>
      )}
    </>
  );
}
