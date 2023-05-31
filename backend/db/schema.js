const typeDefs = `#graphql

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    createdAt: String
    savedDeliveryAddress: Address
    }

type Address {
    address: String!
    city: String!
    zipCode: String!
    
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
    deliveryDetails: DeliveryDetaisInput
    }

input OrderItemInput {
    menuItem: ID!
    price:Float!
    quantity: Int!
    }



input DeliveryDetaisInput{
    receiver: String!
    address: String!
    city: String!
    zipCode: String!
    phone: String!
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
    saveDeliveryDetails (input: DeliveryDetaisInput): String

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
