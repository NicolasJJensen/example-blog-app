import '@styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import Navbar from '@components/navbar.tsx'
import Footer from '@components/footer.tsx'

function MyApp({ Component, pageProps }) {

  const components = {
  }

  return (
    <>
      <Navbar />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
      <Footer />
    </>
  )
}

export default MyApp
