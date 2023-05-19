"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormSection from "../../UI/FormSection";

export default function SignUpForm() {
  //form validation
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      email: Yup.string()
        .email("Please provide a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
      confirm: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='w-[90%] max-w-sm'>
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8  lg:pb-4 mb-6'
          onSubmit={formik.handleSubmit}
        >
          <FormSection
            label='name'
            type='text'
            placeholder='John'
            formik={formik}
            autoFocus={true}
          />
          <FormSection
            label='surname'
            type='text'
            placeholder='Smith'
            formik={formik}
          />
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
          <FormSection
            label='confirm'
            type='password'
            placeholder='********'
            formik={formik}
          />

          <div className='flex items-center justify-between'>
            <input
              type='submit'
              value='Sign Up'
              className='bg-orange-400 hover:bg-orange-500 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center text-white w-full font-semibold mt-4 sm:mt-0'
            />
          </div>
          <div className='mt-4'>
            <p className='text-slate-600 text-xs font-semibold'>
              Already have an account yet?
            </p>
            <Link href='/register'>
              <p className='text-slate-600 hover:text-sky-800 text-sm font-semibold hover:underline decoration-orange-500'>
                Sign In
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
