/**
 * @fileoverview SingleItem component. Displays the details and extended info about a single menu item.
 */
import Image from "next/image";
import AddToCart from "../../components/AddToCart";
import BackToMenu from "@/app/UI/BackToMenu";

type Props = {
  foundItem: MenuItem;
};

export default function SingleItem({ foundItem }: Props) {
  const { name, extendedDescription, price, image, ingredients } = foundItem;

  return (
    <div className='flex flex-col w-screen min-h-screen'>
      <div className='flex flex-col w-screen '>
        <div className='w-screen h-[30vh] sm:h-[40vh] md:h-[50vh]'>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className='object-cover w-full h-full'
            priority
          />
        </div>
        <div className=' text-sm text-slate-700 leading-8 md:leading-7 w-[95%] max-w-[1400px] mx-auto font-medium  px-2 '>
          <div className='2xl:flex 2xl:items-center 2xl:justify-between 2xl:w-full'>
            <div className='hidden 2xl:block 2xl:w-[20%] 2xl:mr-4 2xl:mb-4'>
              <BackToMenu />
            </div>

            <h1 className='text-xl text-orange-500 text-center font-bold mb-5 2xl:mb-10 mt-2 md:mt-4 2xl:mt-8 mx-auto'>
              {name}
            </h1>
            <div className='hidden 2xl:block  2xl:ml-4 2xl:mb-4'>
              <AddToCart item={foundItem} />
            </div>
          </div>
          <p className='text-slate-700 text-justify mb-2 '>
            {extendedDescription}
          </p>
          <p>
            <span className=' text-lg font-semibold  text-orange-500 text-start mt-2 '>
              Ingredients:{" "}
            </span>
            {ingredients}
          </p>
          <p className='font-bold text-lg'>
            <span className='text-lg font-semibold  text-orange-500 text-start'>
              Price:{" "}
            </span>
            {price}€
          </p>
        </div>
        <div className='w-[95%] max-w-[1400px] mb-20 mt-4 mx-auto flex items-center justify-between 2xl:hidden'>
          <BackToMenu />
          <AddToCart item={foundItem} />
        </div>
      </div>
    </div>
  );
}
