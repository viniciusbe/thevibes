import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import type { AppProps } from 'next/app'
import MenuContextProvider from '@/contexts/MenuContext'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
    </div>
  )
}
