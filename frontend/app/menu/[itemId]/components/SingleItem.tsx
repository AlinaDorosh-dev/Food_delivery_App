import Image from "next/image";
import AddToCart from "../../components/AddToCart";
import BackToMenu from "./BackToMenu";


type Props = {
  foundItem: MenuItem;
};

export default function SingleItem({ foundItem }: Props) {
  const { name, extendedDescription, price, image, ingredients } = foundItem;
  
  return (
    <div className='flex flex-col w-screen '>
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
        <div className=' text-sm text-slate-700 leading-8 md:leading-7 w-[95%] max-w-[1400px] mx-auto font-medium   '>
          <h1 className='text-xl text-orange-500 text-center font-bold mb-5 mt-2 md:mt-4  mx-auto'>
            {name}
          </h1>
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
        <div className='w-[95%] sm:w-[80%] max-w-[1000px] mb-20 mt-4 mx-auto flex items-center justify-between'>
          <BackToMenu />
          <AddToCart item={foundItem} />
        </div>
      </div>
    </div>
  );
}
