import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Header1, Header2, Header3, Header4, Text } from '../Text'

export default function MDXStyleProvider({ children }) {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: Header1,
        h2: Header2,
        h3: Header3,
        h4: Header4,
        p: Text,
      }}
    >
      {children}
    </MDXProvider>
  )
}