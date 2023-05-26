"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
  
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
  } from "@apollo/experimental-nextjs-app-support/ssr";

export function makeClient() {
  const httpLink = new HttpLink({
    useGETForQueries: true,
      uri: "http://localhost:4000/graphql",
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
            httpLink,
          ])
        : httpLink,
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