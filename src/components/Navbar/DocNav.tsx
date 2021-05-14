import { graphql, useStaticQuery } from "gatsby"
import React, { useMemo } from "react"
import { useMedia } from "react-use"
import { HeavyText, Text } from "../Text"
import navMeta from "./docnav.json"

interface FrontMatter {
  title: string | null
  path: string | null
  category: string | null
  sub_category: string | null
}

interface AllMdx {
  nodes: FrontMatter[]
}

interface GetMdxInfo {
  data: AllMdx
  extensions: any
}

function DesktopDocNav({ navData }: { navData: GetMdxInfo }) {
  console.log(navData)
  // return <></>
  // console.log(navMeta)
  return (
    <>
      {Object.keys(navMeta.docs).map(category => (
        <>
          <HeavyText>{category}</HeavyText>
          {navMeta.docs[category].map(categoryItem => {
            if (typeof categoryItem === "string") {
              return <Text>{categoryItem}</Text>
            } else if (typeof categoryItem === "object") {
              return (
                <>
                  <HeavyText>{categoryItem.subcategory}</HeavyText>
                  {categoryItem.items.map(item => (
                    <Text>{item}</Text>
                  ))}
                </>
              )
            } else {
              return <></>
            }
          })}
        </>
      ))}
    </>
  )
}

export function DocNav() {
  const isMobile = useMedia("(max-width: 720px)")
  // const navData = useStaticQuery<GetMdxInfo>(graphql`
  //   query GetMdxInfo {
  //     allMdx {
  //       nodes {
  //         frontmatter {
  //           title
  //           path
  //           category
  //           sub_category
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <DesktopDocNav navData={navData} />
    </>
  )
}

// export default function DocNav() {
//   return (
//     <></>
//   )
// }
