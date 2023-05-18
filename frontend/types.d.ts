type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients: string;
};

type ChildrenProps = {
  children: React.ReactNode;
};

type OrderItem ={
  menuItem: MenuItem;
  quantity: number;
}

type MenuContext = {
  cartItems:OrderItem[];
  setCartItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

