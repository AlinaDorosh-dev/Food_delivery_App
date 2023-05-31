"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

export function makeClient() {
  const httpLink = new HttpLink({
    useGETForQueries: true,
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
  });

  const authLink = setContext(async (_, { headers }) => {
    // Get the authentication token from session storage
    const auth = sessionStorage.getItem("auth");

    // Asynchronous storage retrieval might cause delays, so you can await it
    // await new Promise((resolve) => setTimeout(resolve, 0));

    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: auth ? auth : "",
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: true,
    ssrMode: true,
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink.concat(httpLink),
          ])
        : authLink.concat(httpLink),
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
