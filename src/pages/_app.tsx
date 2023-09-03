import AuthGuard from '@/components/hoc/AuthGuard';
import Loader from '@/components/Loader';
import { ToastProvider } from '@/components/providers/ToastProvider';
import '@/styles/globals.css';

import type { Role } from '@prisma/client';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;
type AuthType = {
  role: Role;
};

export type AppPropsWithAuth = AppProps<{ [key: string]: any }> & {
  Component: { auth?: AuthType };
};

export default function MyApp({ Component, pageProps }: AppPropsWithAuth) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', (_url) => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', (_url) => {
      setLoading(false);
    });
    Router.events.on('routeChangeError', (_url) => {
      setLoading(false);
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          {loading && <Loader />}
          <ToastProvider>
            {Component.auth ? (
              <AuthGuard role={Component.auth.role}>
                <Component {...pageProps} />
              </AuthGuard>
            ) : (
              <Component {...pageProps} />
            )}
          </ToastProvider>
        </SessionProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
