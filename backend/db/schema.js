const typeDefs = `#graphql

type MenuItem {
    id: ID
    name: String
    price: Float
    category: String
    image: String
    description: String
    ingredients: String
}

type Query {

    # Menu Items
    getMenuItems: GetMenuItemsResponse
}

type GetMenuItemsResponse{
    success: Boolean
    menuItems: [MenuItem]
    code: Int
    message: String
}
`;

export default typeDefs;