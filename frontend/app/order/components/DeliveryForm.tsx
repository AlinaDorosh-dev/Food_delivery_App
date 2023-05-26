"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormSection from "../../UI/FormSection";

export default function DeliveryForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      city: "",
      zip: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zip: Yup.string().required("Zip is required"),
      phone: Yup.string().required("Phone is required"),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <div className='w-[90%] max-w-2xl mx-auto'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={formik.handleSubmit}
      >
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div
          className="md:w-1/2 md:px-2"
          >
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
          <div
          className="md:w-1/2 md:px-2"
          >
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

        <input type={"checkbox"} id={"save"} name={"save"} className='mr-2' />
        <label htmlFor={"save"} className='text-slate-700 '>
          Save delivery details
        </label>

        <input
          type='submit'
          value='Confirm'
          className='bg-orange-400 hover:bg-orange-500 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center text-white w-full font-semibold mt-4 md:mt-6'
        />
      </form>
    </div>
  );
}
