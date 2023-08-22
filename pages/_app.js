import '@/styles/globals.css'
import Layout from '@/components/layout'
import { ContextProvider } from '@/lib/Context'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
