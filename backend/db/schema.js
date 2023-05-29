const typeDefs = `#graphql

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    address: Address
    createdAt: String
    savedDeliveryAddress: Address
    }

type Address {
    address: String!
    city: String!
    zipCode: String!
    country: String!
}    

type Token {
      token: String
    }

type MenuItem {
    id: ID
    name: String
    price: Float
    category: String
    image: String
    description: String
    ingredients: String
}

input UserInput {
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    }

input AuthInput {
      email: String!
      password: String!
    }

input OrderInput {
    items: [OrderItemInput]
    totalPrice: Float!
    deliveryAddress: AddressInput
    }

input OrderItemInput {
    menuItem: ID!
    price:Float!
    quantity: Int!
    }

input AddressInput {
    address: String!
    city: String!
    zipCode: String!
    country: String!
    }


type Query {
    # Customers
    getCustomerData: User

    # Menu Items
    getMenuItems: GetMenuItemsResponse
}

type Mutation {
    # User
    createUser(input: UserInput): CreateUserResponse
    authUser(input: AuthInput): Token

    #Order
    createOrder(input: OrderInput): String
}

type CreateUserResponse {
    success: Boolean
    user: User
    code: Int
    message: String
    token: Token
}



type GetMenuItemsResponse{
    success: Boolean
    menuItems: [MenuItem]
    code: Int
    message: String
}
`;

export default typeDefs;
