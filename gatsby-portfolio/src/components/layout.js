import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {/*  Title */}
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
