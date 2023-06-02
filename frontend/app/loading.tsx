import Spinner from "./UI/Spinner";
export default function loading() {
  return (
    <div className='flex justify-center items-center bg-orange-50 min-h-screen min-w-full absolute top-0'>
      <Spinner />
    </div>
  );
}
