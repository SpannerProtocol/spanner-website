import { MDXProvider } from "@mdx-js/react"
import { STable, STd, STh, STr } from "../../components/Table"
import React from "react"
import {
  DocAnchorText,
  DocHeader1,
  DocHeader2,
  DocHeader3,
  DocHeader4,
  DocText,
} from "../Text"
import { DocListItem } from "../../components/List"

export default function MDXStyleProvider({ children }) {
  return (
    <MDXProvider
      components={{
        // General
        h1: DocHeader1,
        h2: DocHeader2,
        h3: DocHeader3,
        h4: DocHeader4,
        p: DocText,
        a: DocAnchorText,
        // Table
        table: STable,
        tr: STr,
        td: STd,
        th: STh,
        // Lists
        li: DocListItem,
      }}
    >
      {children}
    </MDXProvider>
  )
}
