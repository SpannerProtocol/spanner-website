import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import Book from "@material-ui/icons/Book"
import Description from "@material-ui/icons/Description"
import Directions from "@material-ui/icons/Directions"
import SlideShow from "@material-ui/icons/Slideshow"
import { ClassNameMap } from "@material-ui/styles"
import clsx from "clsx"
import React, { useContext, useState } from "react"
import { useMedia } from "react-use"
import hamburgerIcon from "../../images/icon-hamburger-gradient.svg"
import styled, { ThemeContext } from "styled-components"
import { ExternalLink, SLink } from "../Link"
import { Pill } from "../Pill"
import { HeavyText } from "../Text"
import { CenterWrapper } from "../Wrapper"
import SpannerDeck from "../../assets/spanner-deck-v1.31.pdf"

const navItems = [
  {
    label: "Deck",
    link: SpannerDeck,
    icon: <SlideShow />,
    internal: false,
  },
  {
    label: "Docs",
    link: "/docs/getting-started",
    icon: <Description />,
    internal: true,
  },
  {
    label: "Guides",
    link: "/guides",
    icon: <Directions />,
    internal: true,
  },
  {
    label: "Blog",
    link: "https://blog.spanner.network",
    icon: <Book />,
    internal: false,
  },
]

const HamburgerWrapper = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`

const MobileWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: initial;

  `};
`

const DesktopWrapper = styled.div`
  display: initial;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;

  `};
`

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

interface NavItemProps {
  icon?: JSX.Element
  text: string
  link: string
  internal: boolean
  classes: ClassNameMap<"list" | "fullList">
  toggleDrawer: (
    open: boolean
  ) => (event: React.MouseEvent | React.KeyboardEvent) => void
}

function NavItem({
  icon,
  text,
  link,
  classes,
  internal,
  toggleDrawer,
}: NavItemProps) {
  return (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: false,
        })}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {internal ? (
          <List>
            <SLink to={link}>
              <ListItem button>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            </SLink>
          </List>
        ) : (
          <List>
            <ExternalLink href={link} target="_blank" download>
              <ListItem button>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            </ExternalLink>
          </List>
        )}
      </div>
    </>
  )
}

export function MobileNav() {
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
    <MobileWrapper>
      <HamburgerWrapper onClick={toggleDrawer(true)}>
        <img src={hamburgerIcon} width="30px" />
      </HamburgerWrapper>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
        <Divider />

        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            icon={navItem.icon}
            link={navItem.link}
            text={navItem.label}
            internal={navItem.internal}
            classes={classes}
            toggleDrawer={toggleDrawer}
          />
        ))}
        <Divider />
        <CenterWrapper style={{ paddingTop: "1rem" }}>
          <ExternalLink>
            <Pill background={theme.primary1}>
              <HeavyText fontSize="16" color={theme.white}>
                Launch App
              </HeavyText>
            </Pill>
          </ExternalLink>
        </CenterWrapper>
      </Drawer>
    </MobileWrapper>
  )
}

export function DesktopNav() {
  const [activeLabel, setActiveLabel] = useState<string>("")
  const theme = useContext(ThemeContext)
  return (
    <DesktopWrapper>
      <div style={{ display: "flex" }}>
        {navItems.map((navItem, index) => (
          <div key={index}>
            {navItem.internal ? (
              <SLink
                to={navItem.link}
                padding="0 1.5rem"
                fontSize="16px"
                onClick={() => setActiveLabel(navItem.label)}
                color={
                  navItem.label === activeLabel ? theme.blue1 : theme.text1
                }
              >
                {navItem.label}
              </SLink>
            ) : (
              <ExternalLink
                href={navItem.link}
                target="_blank"
                padding="0 1.5rem"
                fontSize="16px"
                download
              >
                {navItem.label}
              </ExternalLink>
            )}
          </div>
        ))}
        <ExternalLink href="https://dapp.spanner.network" target="_blank">
          <HeavyText fontSize="16px" color={theme.primary1} padding="0 1.15rem">
            Launch Dapp
          </HeavyText>
        </ExternalLink>
      </div>
    </DesktopWrapper>
  )
}

export default function NavBar() {
  const isMobile = useMedia("(max-width: 720px)")

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>
}
