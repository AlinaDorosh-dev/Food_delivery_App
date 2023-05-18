import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Props = {
  item: MenuItem;
};

export default function AddToCart({ item }: Props) {
  const { setCartItems } = useContext(MenuContext);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, { menuItem: item, quantity: quantity }]);
  };
  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex justify-between items-center border border-gray-300 rounded-lg px-2 py-1 mr-2'>
        <button
          className=' px-2 py-1 text-slate-600'
          disabled={quantity === 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <AiOutlineMinus />
        </button>
        <input
          type='number'
          className='w-12 h-8 border border-gray-300 rounded-lg text-center'
          value={quantity}
          defaultValue={1}
          min={1}
          max={10}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button
          className=' px-2 py-1'
          onClick={() => setQuantity((prev) => prev + 1)}
          disabled={quantity === 10}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button
        onClick={() => handleAddToCart()}
        className='text-white font-bold text-base md:text-sm bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center'
      >
        Add
      </button>
    </div>
  );
}
