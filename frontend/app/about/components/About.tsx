import { FaCircle } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <div className='mt-20 sm:mt-24 md:mt-32'>
      <div className='bg-white shadow-md w-full max-w-3xl mx-auto mb-10 p-6 text-justify text-slate-600'>
        <h4 className='text-center mb-4 text-2xl font-bold text-orange-500'>
          About FoodApp
        </h4>
        <p className='text-base '>
          This is a simple food delivery app. Built as a personal project to
          improve practical skills in{" "}
          <span className='font-semibold'>GraphQL API</span> design with{" "}
          <span className='font-semibold'>Apollo Server</span> and{" "}
          <span className='font-semibold'>MongoDB</span>.
        </p>
        <p className='text-base mt-2'>
          Frontend development with{" "}
          <span className='font-semibold'>NextJS</span> version 13.4 on{" "}
          <span className='font-semibold'>Typescript</span>,{" "}
          <span className='font-semibold'>Tailwind CSS</span> for styling and{" "}
          <span className='font-semibold'>Apollo Client</span> for data fetching
          with <span className='font-semibold'>GraphQL</span>.
        </p>
        <h6 className='mt-4 text-center block font-bold text-lg underline'>
          Features:
        </h6>
        <ul className='pl-6 mt-2 text-sm leading-8'>
          <li className='mb-4'>
            <FaCircle size={20} className='inline-block text-orange-600 mr-3' />
            Menu and Ordering: Present menu with categorized food items and
            prices. Allow users to add items to their cart and place orders.
          </li>
          <li className='mb-4'>
            <FaCircle size={20} className='inline-block text-orange-600 mr-3' />
            Authentication: Allow users to sign up and log in with email and
            password.
          </li>
          <li className='mb-6'>
            <FaCircle size={20} className='inline-block text-orange-600 mr-3' />
            User room: Allow users to view their orders and update their
            delivery details.
          </li>
        </ul>
        <p className='text-base text-center font-semibold'>
          The source code is available on GitHub:
        </p>
        <Link
          href='https://github.com/AlinaDorosh-dev/Food_delivery_App'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-3 block text-center w-full font-semibold text-base text-orange-500 hover:text-orange-600  hover:underline underline-offset-4'
        >
          FoodApp repository
        </Link>
      </div>
    </div>
  );
}
