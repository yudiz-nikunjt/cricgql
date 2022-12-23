import Footer from '../components/footer'
import Header from '../components/header'
import queryGraphql from '../components/queryGraphql'
import MyApolloProvider from '../graphql'
import App from 'next/app'
import { HEADER_BOTTOM_MENU } from '../graphql/header-bottom-menu'
import '../styles/globals.css'
import HeaderBottomMenu from '../components/header-bottom-menu'

function MyApp({ Component, pageProps, headerMenu }) {
  return (
    <MyApolloProvider>
      <Header />
      <HeaderBottomMenu results={headerMenu?.getMenuTree?.aResults}/>
        <Component {...pageProps} />
      <Footer/>
    </MyApolloProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  try {
    const { data: header } = await queryGraphql(HEADER_BOTTOM_MENU)
    // const { data: footer } = queryGraphql(FOOTER_MENU)
    return { ...appProps, headerMenu: header }
  } catch (e) {
    console.error(e)
    return { ...appProps, headerMenu: [] }
  }
}
