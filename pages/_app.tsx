import { AppProps } from 'next/app'
import LayoutDefault from '../components/layoutDefault'
import { Page } from '../interfaces/page'
import '../styles/globals.css'

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.layout ?? LayoutDefault
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
