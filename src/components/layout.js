import React from "react"
import PropTypes from "prop-types"

import "../styles/bootstrap.min.css"
import "../styles/layout.css"

import Navbar from "./globals/navbar"
import Footer from "./globals/footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
