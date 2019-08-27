/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="layout-grid"
        style={{
          margin: `var(--spacing) auto`,
          maxWidth: 800,
          padding: `0px 0.5rem 1.45rem`,
          paddingTop: 0,
          display: `grid`
        }}
      >
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
