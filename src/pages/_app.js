import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/globals.scss"
export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
