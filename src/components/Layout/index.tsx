/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "../../theme"
import Footer from "../footer"
import MDXStyleProvider from "./MdxProvider"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <FixedGlobalStyle />
      <ThemeProvider>
        <ThemedGlobalStyle />
        <MDXStyleProvider>
          {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
          <Header />
          <main>{children}</main>
          <Footer />
        </MDXStyleProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
