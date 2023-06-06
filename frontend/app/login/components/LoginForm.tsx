/**
 * @fileoverview LoginForm component for users authentication.
 */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import { AUTH_USER } from "@/graphql/mutations";
import FormSection from "../../UI/FormSection";

export default function LoginForm() {
  const [authUser, { error }] = useMutation(AUTH_USER);

  const router = useRouter();

  const { setToken } = useAuth();
  const { cartItems } = useCart();

  //state to message text
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    if (error) {
      error.message === "Access denied"
        ? setMessage("Wrong email or password")
        : setMessage(error.message);
    }
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please provide a valid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const { data } = await authUser({
          variables: {
            input: {
              email,
              password,
            },
          },
        });
        const { token } = data.authUser;
        setToken(token);
        if (cartItems.length > 0) {
          router.push("/order");
        } else {
          router.push("/menu");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  //clear message when formik values change
  useEffect(() => {
    setMessage("");
  }, [formik.values]);

  const showMessage = () => {
    return (
      <div
        className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2'
        role='alert'
      >
        <p>{message}</p>
      </div>
    );
  };
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='w-[90%] max-w-sm'>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white shadow-md rounded p-8 mb-4'
        >
          {message ? showMessage() : null}
          <FormSection
            label='email'
            type='email'
            placeholder='john.smith@gmail.com'
            formik={formik}
          />
          <FormSection
            label='password'
            type='password'
            placeholder='********'
            formik={formik}
          />
          <div className=''>
            <input
              type='submit'
              value='Login'
              className='outline-double outline-orange-400 hover:text-orange-500 hover:drop-shadow-md cursor-pointer focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg mx-auto px-4 py-2 text-center text-slate-600 w-full font-semibold mt-4 sm:mt-0'
            />
          </div>
          <div className='mt-6'>
            <p className='text-slate-600 text-xs font-semibold text-center'>
              Don´t have an account yet?
            </p>
            <Link href='/register'>
              <p className='bg-orange-400 hover:bg-orange-500 focus:ring-2 focus:outline-none mx-auto focus:ring-orange-300 rounded-lg  px-4 py-2 text-center text-white w-full font-semibold mt-2 '>
                Sign Up
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
