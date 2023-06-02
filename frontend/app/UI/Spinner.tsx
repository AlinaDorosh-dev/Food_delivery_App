export default function Spinner() {
  return (
    <div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-700 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-600 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-500 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-400 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-300 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-200 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <div
        className='inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-orange-100 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  );
}
