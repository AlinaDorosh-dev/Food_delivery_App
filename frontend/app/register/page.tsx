import { Metadata } from "next";
import SignUpForm from './components/SignUpForm'

export const metadata: Metadata = {
    title: "Register",
    description: "Register page",
  };


export default function Register() {
  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0'>
    <h1 className='text-2xl font-bold text-center mt-14 md:mt-20 mb-2 text-orange-400'>
        Sign Up
    </h1>
    <SignUpForm />
</div>
  )
}
