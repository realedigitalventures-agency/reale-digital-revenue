import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Chiropractor Marketing Agency",
          "url": "https://your-site.com",
          "logo": "/logo.svg",
          "sameAs": ["https://www.facebook.com/yourpage"]
        })}} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <StickyCTA />
    </>
  )
}

export default MyApp