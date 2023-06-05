type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients: string;
  extendedDescription: string;
};

type ChildrenProps = {
  children: React.ReactNode;
};

type OrderItem = {
  menuItem: MenuItem;
  quantity: number;
  price: number;
};

type MenuContext = {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  pending: boolean;
};

type CartContext = {
  cartItems: OrderItem[];
  setCartItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
  pending: boolean;
};

type AuthContext = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

type UserData = {
  firstName: string;
  lastName: string;
  phone: string;
  savedDeliveryAddress: {
    address: string;
    city: string;
    zipCode: string;
  };
  saveDetails: boolean;
};

type DeliveryDetaisInput = {
  receiver: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
};

type OrderInput = {
  deliveryDetails: DeliveryDetaisInput;
  items: OrderItem[];
  totalPrice: number;
};

type DeliveryFormValues = {
  name: string;
  surname: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  saveDetails: boolean;
};

type OrderHistoryItem = {
  createdAt: string;
  deliveryDetails: {
    address: string;
    city: string;
    phone: string;
    receiver: string;
    zipCode: string;
  };
  id: string;
  status: string;
  totalPrice: number;
  items: [
    {
      menuItem: {
        name: string;
        price: number;
      };
      quantity: number;
    }
  ];
};
