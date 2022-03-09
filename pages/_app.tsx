import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import GovBotProvider from 'components/context-provider/provider'
import theme from 'config/theme'
import NavBar from 'components/NavBar'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GovBotProvider>
        <ChakraProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </GovBotProvider>
    </SessionProvider>
  )
}

export default MyApp
