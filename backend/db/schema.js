const typeDefs = `#graphql

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    address: Address
    birthDate: String
    createdAt: String
    }

type Address {
    street: String
    number: String
    floor: String
    door: String
    city: String
    zipCode: String
    country: String
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



type Query {

    # Menu Items
    getMenuItems: GetMenuItemsResponse
}

type Mutation {
    # User
    createUser(input: UserInput): CreateUserResponse
    authUser(input: AuthInput): Token
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
