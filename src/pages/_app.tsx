import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import Container from '@/components/Container'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>JSON</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Navigation/>
      <Component {...pageProps} />
    </Container>
  </>
}
