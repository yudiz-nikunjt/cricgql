import queryGraphql from '../components/queryGraphql'
import MyApolloProvider from '../graphql'
import App from 'next/app'
import { HEADER_BOTTOM_MENU } from '../graphql/header-bottom-menu'
import "../assets/scss/globals.scss"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FOOTER_MENU } from '../graphql/footer'

function MyApp({ Component, pageProps, headerMenu, footerMenu }) {
  return (
    <MyApolloProvider>
      <Navbar />
			<Header results={headerMenu?.getMenuTree?.aResults}/>
      <Component {...pageProps} />
      <Footer result={footerMenu?.getFrontFooter} />
    </MyApolloProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  try {
    const { data: header } = await queryGraphql(HEADER_BOTTOM_MENU)
    const { data: footer } = await queryGraphql(FOOTER_MENU)
    return { ...appProps, headerMenu: header, footerMenu: footer }
  } catch (e) {
    console.error(e)
    return { ...appProps, headerMenu: [], footerMenu: [] }
  }
}
