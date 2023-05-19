import Link from "next/link";

export default function LoginForm() {
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='w-[90%] max-w-sm'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-slate-600 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50 invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-300 focus:invalid:ring-pink-300 peer'
              id='email'
              type='email'
              placeholder='Email'
            />
            <p className='mt-2 hidden peer-invalid:visible text-pink-300 text-sm'>
              Please provide a valid email address.
            </p>
          </div>
          <div className='mb-6'>
            <label
              className='block text-slate-600 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50'
              id='password'
              type='password'
              placeholder='********'
            />
          </div>
          <div className='flex items-center justify-between'>
            <input
              type='submit'
              value='Login'
              className='bg-orange-400 hover:bg-orange-500 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center text-white w-full font-semibold mt-4 sm:mt-0'
            />
          </div>
          <div className='mt-4'>
            <p className='text-slate-600 text-xs font-semibold'>
              Don´t have an account yet?
            </p>
            <Link href='/register'>
                <p className='text-slate-600 hover:text-sky-800 text-sm font-semibold hover:underline decoration-orange-500'>
                Sign Up 
                </p>
                </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
