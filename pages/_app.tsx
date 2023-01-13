import '@/styles/globals.css'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '@/lib/apollo'
import localFont from '@next/font/local'

const melodrama = localFont({
  src: [
    {
      path: './fonts/melodrama/Melodrama-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/melodrama/Melodrama-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/melodrama/Melodrama-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-melodrama',
})

const generalSans = localFont({
  src: [
    {
      path: './fonts/generalSans/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/generalSans/GeneralSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/generalSans/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/generalSans/GeneralSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/generalSans/GeneralSans-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-generalSans',
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ApolloProvider client={client}>
      <main className={`${melodrama.variable} ${generalSans.variable} font-generalSans`}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </main>
    </ApolloProvider>
  )
}
