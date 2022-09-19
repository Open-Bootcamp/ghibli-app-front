import Banner from '../Banner'
import Footer from './Footer'

function Layout ({ children }) {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  )
}

export default Layout
