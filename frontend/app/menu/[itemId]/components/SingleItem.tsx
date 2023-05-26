import Image from "next/image";
import ReviewForm from "./ReviewForm";

type Props = {
  foundItem: MenuItem;
};

export default function SingleItem({ foundItem }: Props) {
  const { name, description, price, image } = foundItem;
  return (
    <div
    
    className='w-full bg-orange-200  max-w-sm border border-gray-200 rounded-lg shadow mx-auto my-14 sm:m-4 shadow-slate-500/50'
  >
      <h1 className='text-base text-orange-500 text-center font-bold mb-5'>
        {name}
      </h1>
      <div className='flex flex-col '>
        <div className=" h-48 w-48 mx-auto">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className='rounded-lg mx-auto md:mx-0 object-cover w-full h-full'
        />
        </div>
        <div className='flex flex-col justify-between items-center md:items-start text-base text-slate-700 text-center font-medium'>
          <p>{description}</p>
          <p>${price}</p>
          <ReviewForm />
          
        </div>
        

        
      </div>
    </div>
  );
}
