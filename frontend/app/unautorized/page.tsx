import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Unautorized",
  description: "Unautorized page",
};

export default function page() {
  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0 sm:flex sm:flex-col sm:justify-center sm:items-center'>
      <h1 className=' text-6xl sm:text-4xl font-bold text-center text-slate-700 max-w-xl p-3 mb-4'>
        404
      </h1>
      <h3 className=' text-2xl sm:text-xl font-semibold text-center  text-slate-700 max-w-xl p-3'>
        Ooops.... It seems you are not logged in.
      </h3>
      <Link href='/login' className='w-1/4 bg-orange-500 hover:bg-orange-600 text-white text-center text-2xl sm:text-xl font-bold py-2 px-6 rounded-full mt-6'>
        <button >
          Go to login
        </button>
      </Link>
    </div>
  )
}
