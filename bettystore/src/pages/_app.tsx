import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { type AppType, AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/tailwind-light/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Add generic type
type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

// Pass `{ session: Session; }` type as generic
function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(
        <>
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
