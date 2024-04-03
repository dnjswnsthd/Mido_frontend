import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
type RQProviderProps = {
  children: React.ReactNode;
}
const RQProvider = ({children}: RQProviderProps) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        }
      }
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default RQProvider;