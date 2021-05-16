/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "../../theme"
import Footer from "../footer"
import MDXStyleProvider from "./MdxProvider"
import useSiteUrl from "hooks/useSiteUrl"

const Layout = ({ children }) => {
  const siteUrl = useSiteUrl()
  return (
    <>
      <FixedGlobalStyle />
      <ThemeProvider>
        <ThemedGlobalStyle />
        <MDXStyleProvider>
          {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
          {!siteUrl.includes("/docs") && (
            <Header siteTitle={`Spanner Protocol`} fixed={false} />
          )}
          <main>{children}</main>
          {!siteUrl.includes("/docs") && <Footer />}
        </MDXStyleProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
