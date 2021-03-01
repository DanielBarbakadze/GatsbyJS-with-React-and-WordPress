import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export const Layout = ({ children, headerMenuItems, footerMenuItems }) => {
  return (
    <>
      <Header headerMenuItems={headerMenuItems} />
      {children}
      <Footer footerMenuItems={footerMenuItems} />
    </>
  )
}

export default Layout