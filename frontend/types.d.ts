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
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

type CartContext = {
  cartItems:OrderItem[];
  setCartItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

type AuthContext = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>; 
};

