import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

/**
 * Main layout file.
 * https://nextjs.org/docs/basic-features/layouts
 */
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component {...pageProps} />)
}
