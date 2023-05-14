import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./db/schema.js";
import resolvers from "./db/resolvers.js";
import connectDB from "./config/db.config.js";
import { getTokenPayload } from "./lib/jwt.js";

// Connect to the database
connectDB();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";
    let user = null;

    // Try to retrieve a user with the token
    if (token) {
      user = await getTokenPayload(token);
    }

    // Add the user to the context
    return { user };
  },
});

console.log(`🚀  Server ready at: ${url}`);