"use client";

export default function error() {
  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0 flex justify-center items-center'>
      <h3 className='text-xl font-semibold text-center  text-slate-700 max-w-xl p-3'>
        Ooops.... It seems something went wrong. Please reload the app or try
        again later.
      </h3>
    </div>
  );
}
