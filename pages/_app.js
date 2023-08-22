import '@/styles/globals.css'
import Layout from '@/components/layout'
import { ContextProvider } from '@/lib/Context'

import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </SessionProvider>
  )
}