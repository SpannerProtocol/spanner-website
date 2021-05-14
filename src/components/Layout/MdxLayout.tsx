import { Drawer, makeStyles } from "@material-ui/core"
import { SLink } from "components/Link"
import { graphql, useStaticQuery } from "gatsby"
import React, { useContext, useMemo } from "react"
import { Menu } from "react-feather"
import { useMedia } from "react-use"
import styled, { ThemeContext } from "styled-components"
import Layout from "."
import navMeta from "../Navbar/docnav.json"
import { HeavyText, Text } from "../Text"
import { ContentSection, ContentWrapper } from "../Wrapper"

interface FrontMatter {
  title: string | null
  path: string | null
  category: string | null
  sub_category: string | null
}

interface FrontMatters {
  frontmatter: FrontMatter
}

interface Nodes {
  nodes: FrontMatters[]
}

interface AllMdx {
  allMdx: Nodes
}

interface NavDataMap {
  [key: string]: FrontMatter
}

const HamburgerWrapper = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`

const DocsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: min(180px) auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: flex;
  `};
`

const DesktopWrapper = styled.div`
  display: initial;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
`};
`

const MobileWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: initial;
    position: fixed;
    bottom: 20px;
    right: 20px;
`};
`

const IconWrapper = styled.div`
  border: 1 solid transparent;
  border-radius: 4px;
  padding: 0.35rem;
  background: ${({ theme }) => theme.primary1};
`

function getNavItems(navData: AllMdx) {
  // Creating a map for access to each link's info
  const navMap = useMemo(() => {
    const navDataMap: NavDataMap = {}
    navData.allMdx.nodes.forEach(node => {
      if (node.frontmatter.path) {
        const pathName = node.frontmatter.path.split("/").reverse()[0]
        navDataMap[pathName] = node.frontmatter
      }
    })
    return navDataMap
  }, [navData])

  return (
    <>
      {Object.keys(navMeta.docs).map((category, index) => (
        <>
          <HeavyText key={index} fontSize="20px" padding="0.5rem 0">
            {category}
          </HeavyText>
          {navMeta.docs[category].map(categoryItem => {
            if (typeof categoryItem === "string") {
              if (Object.keys(navMap).includes(categoryItem)) {
                return (
                  <>
                    {navMap[categoryItem].path && (
                      <SLink to={navMap[categoryItem].path as string}>
                        <Text
                          key={navMap[categoryItem].title}
                          padding="0.15rem 0"
                        >
                          {navMap[categoryItem].title}
                        </Text>
                      </SLink>
                    )}
                  </>
                )
              } else {
                return null
              }
            } else if (typeof categoryItem === "object") {
              return (
                <>
                  <HeavyText fontSize="16px" padding="0.5rem 0">
                    {categoryItem.subcategory}
                  </HeavyText>
                  {categoryItem.items.map(item => {
                    if (Object.keys(navMap).includes(item)) {
                      return (
                        <>
                          {navMap[item].path && (
                            <SLink to={navMap[item].path as string}>
                              <Text
                                key={navMap[item].title}
                                padding="0.15rem 0"
                              >
                                {navMap[item].title}
                              </Text>
                            </SLink>
                          )}
                        </>
                      )
                    } else {
                      console.log(item)
                      return null
                    }
                  })}
                </>
              )
            } else {
              return null
            }
          })}
        </>
      ))}
    </>
  )
}

function DesktopDocNav({ navData }: { navData: AllMdx }) {
  return <>{getNavItems(navData)}</>
}

function DocNav() {
  const isMobile = useMedia("(max-width: 720px)")
  const navData = useStaticQuery<AllMdx>(graphql`
    query GetMdxInfo {
      allMdx {
        nodes {
          frontmatter {
            title
            path
            category
            sub_category
          }
        }
      }
    }
  `)
  console.log(navData)

  return (
    <>
      {!isMobile ? (
        <DesktopWrapper>
          <DesktopDocNav navData={navData} />
        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <MobileDocNav navData={navData} />
        </MobileWrapper>
      )}
    </>
  )
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

function MobileDocNav({ navData }: { navData: AllMdx }) {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const theme = useContext(ThemeContext)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setIsOpen(open)
  }

  return (
    <>
      <HamburgerWrapper onClick={toggleDrawer(true)}>
        <IconWrapper>
          <Menu size={24} color={theme.white} />
        </IconWrapper>
      </HamburgerWrapper>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
        <div style={{ padding: "1rem" }}>{getNavItems(navData)}</div>
      </Drawer>
    </>
  )
}

export default function MdxLayout({ children }) {
  return (
    <Layout>
      <ContentWrapper>
        <DocsGrid>
          <DocNav />
          <ContentSection style={{ overflow: "scroll" }}>
            {children}
          </ContentSection>
        </DocsGrid>
      </ContentWrapper>
    </Layout>
  )
}
