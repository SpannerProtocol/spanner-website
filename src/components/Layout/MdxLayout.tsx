import { Drawer, makeStyles } from "@material-ui/core"
import Header from "components/header"
import { SLink } from "components/Link"
import { SideBar } from "components/Sidebar"
import { graphql, useStaticQuery } from "gatsby"
import React, { useContext, useMemo } from "react"
import { Menu } from "react-feather"
import { useMedia } from "react-use"
import styled, { ThemeContext } from "styled-components"
import Layout from "."
import navMeta from "../Navbar/docnav.json"
import { DocsContentSection } from "../Wrapper"
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
  width: 100vw;
  height: 100vh;
  grid-template-columns: 30vw auto;
  grid-column-gap: 5vw;
  grid-row-gap: 1rem;
  justify-content: flex-start;

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

const SidebarCategory = styled.p`
  text-align: left;
  font-family: "Lato", "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: #707070;
  word-spacing: 0.5rem;
`

const SidebarSubCategory = styled.p`
  text-align: left;
  font-family: "Lato", "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: #707070;
  word-spacing: 0.5rem;
`

const SidebarItem = styled.p<{ nested?: boolean }>`
  text-align: left;
  font-family: "Lato", "Roboto", sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.28px;
  color: ${({ theme }) => theme.text1};
  opacity: 1;
  padding-left: ${({ nested }) => (nested ? "1rem" : "0")};
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
          <SidebarCategory key={index}>{category}</SidebarCategory>
          {navMeta.docs[category].map((categoryItem, index) => {
            if (typeof categoryItem === "string") {
              if (Object.keys(navMap).includes(categoryItem)) {
                return (
                  <div key={index}>
                    {navMap[categoryItem].path && (
                      <SLink to={navMap[categoryItem].path as string}>
                        <SidebarItem key={navMap[categoryItem].title}>
                          {navMap[categoryItem].title}
                        </SidebarItem>
                      </SLink>
                    )}
                  </div>
                )
              } else {
                return null
              }
            } else if (typeof categoryItem === "object") {
              return (
                <div key={index}>
                  <SidebarSubCategory>
                    {categoryItem.subcategory}
                  </SidebarSubCategory>
                  {categoryItem.items.map(item => {
                    if (Object.keys(navMap).includes(item)) {
                      return (
                        <div key={navMap[item].title}>
                          {navMap[item].path && (
                            <SLink to={navMap[item].path as string}>
                              <SidebarItem
                                key={navMap[item].title}
                                nested={true}
                              >
                                {navMap[item].title}
                              </SidebarItem>
                            </SLink>
                          )}
                        </div>
                      )
                    } else {
                      return null
                    }
                  })}
                </div>
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
  return (
    <>
      <SideBar>
        <div style={{ padding: "0 3rem" }}>{getNavItems(navData)}</div>
      </SideBar>
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
        <div style={{ padding: "1rem 2.5rem" }}>{getNavItems(navData)}</div>
      </Drawer>
    </>
  )
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

export default function MdxLayout({ children }) {
  return (
    <Layout>
      <Header siteTitle={`Spanner Protocol`} fixed={true} withBorder={true} />
      <DocsGrid>
        <DocNav />
        <DocsContentSection>{children}</DocsContentSection>
      </DocsGrid>
    </Layout>
  )
}
