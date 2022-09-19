import React from 'react'
import Banner from '../components/Banner'
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
