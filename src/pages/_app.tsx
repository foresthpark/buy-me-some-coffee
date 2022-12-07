import { type AppType } from "next/dist/shared/lib/utils";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
