import { useStaticQuery, graphql } from "gatsby"

function useSiteUrl() {
  return window.location.href
}

export default useSiteUrl
