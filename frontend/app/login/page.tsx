import { Metadata } from "next";
import LoginForm from "./components/LoginForm"

export const metadata: Metadata = {
    title: "Login",
    description: "Login page",
  };

export default function Login() {
  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0'>
        <h1 className='text-2xl font-bold text-center mt-24 md:mt-28 mb-2 text-orange-400'>
            Login
        </h1>
        <LoginForm />
    </div>
  )
}
