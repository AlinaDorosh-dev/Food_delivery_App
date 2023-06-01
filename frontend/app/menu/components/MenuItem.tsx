import Image from "next/image";
import Link from "next/link";

import AddToCart from "./AddToCart";

type Props = {
  item: MenuItem;
};

export default function MenuItem({ item }: Props) {
  const { id, name, description, ingredients, category, image, price } = item;

  return (
    
      <div
        key={id}
        className='w-full bg-orange-50  max-w-sm border border-gray-200 rounded-lg shadow mx-auto my-4 sm:m-4 shadow-orange-500/50'
      >
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className='rounded-t-lg object-cover w-full h-64'
        />
        <div className='py-6 px-8 text-slate-800 leading-10 text-justify'>
          <div className='min-h-[330px]'>
            <h1 className='text-base text-orange-500 font-semibold text-center'>
              {name}
            </h1>

            <p>{description}</p>
            <p>
              <span className='font-semibold'>Ingredients:</span> {ingredients}
            </p>

            <p>
              <span className='font-semibold'> Category: </span>
              {category}
            </p>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center mt-2.5 mb-5'>
                <Link href={`/menu/${id}`}
                className='text-orange-400 font-semibold text-sm hover:text-orange-500'
                >
                  More info
                </Link>
              </div>
              <p className='text-xl md:text-lg font-bold text-slate-700'>
                {price} €
              </p>
            </div>
          </div>
          <AddToCart item={item} />
        </div>
      </div>
    
  );
}
