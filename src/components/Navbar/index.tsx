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
import { ExternalLink, SLocalizedLink, SLink } from "../Link"
import { Pill } from "../Pill"
import { Text, HeavyText } from "../Text"
import { CenterWrapper } from "../Wrapper"
import SpannerDeck from "../../assets/spanner-deck-v1.31.pdf"
import SpannerDeckZh from "../../assets/spanner-deck-v1.31-zh.pdf"
import { useTranslation } from "react-i18next"


const HamburgerWrapper = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`
//
// const MobileWrapper = styled.div`
//   display: none;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: initial;
//   `};
// `
//
// const DesktopWrapper = styled.div`
//   display: initial;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: none;
//   `};
// `

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
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
                   toggleDrawer
                 }: NavItemProps) {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: false
        })}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {internal ? (
          <List>
            <SLocalizedLink to={link} language={i18n.language}>
              <ListItem button>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={t(text)} />
              </ListItem>
            </SLocalizedLink>
          </List>
        ) : (
          <List>
            <ExternalLink href={link} target="_blank" download>
              <ListItem button>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={t(text)} />
              </ListItem>
            </ExternalLink>
          </List>
        )}
      </div>
    </>
  )
}

export function MobileNav({navItems}:{navItems: NavItem[]}) {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()

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
    // <MobileWrapper>
    <>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 1.5rem",
              justifyContent: "center",
              margin: "1rem 0"
            }}
          >
            <SLink fontSize="16px" to={"/"}>
              {t(`EN`)}
            </SLink>
            <Text fontSize="16px" padding="0 0.5rem" width="fit-content">
              |
            </Text>
            <SLink fontSize="16px" to={"/zh"}>
              {t(`CN`)}
            </SLink>
          </div>
        </CenterWrapper>
        <CenterWrapper>
          <ExternalLink>
            <Pill background={theme.primary1}>
              <HeavyText fontSize="16" color={theme.white}>
                {t("Launch Dapp")}
              </HeavyText>
            </Pill>
          </ExternalLink>
        </CenterWrapper>
      </Drawer>
      {/* </MobileWrapper> */}
    </>
  )
}

export function DesktopNav({navItems}:{navItems: NavItem[]}) {
  const [activeLabel, setActiveLabel] = useState<string>("")
  const theme = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  return (
    // <DesktopWrapper>
    <div style={{ display: "flex" }}>
      {navItems.map((navItem, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          {navItem.internal ? (
            <SLocalizedLink
              language={i18n.language}
              to={navItem.link}
              padding="0 1.5rem"
              fontSize="16px"
              onClick={() => setActiveLabel(navItem.label)}
              color={navItem.label === activeLabel ? theme.blue1 : theme.text1}
            >
              {t(navItem.label)}
            </SLocalizedLink>
          ) : (
            <ExternalLink
              href={navItem.link}
              target="_blank"
              padding="0 1.5rem"
              fontSize="16px"
              download
            >
              {t(navItem.label)}
            </ExternalLink>
          )}
        </div>
      ))}
      <div
        style={{ display: "flex", alignItems: "center", padding: "0 1.5rem" }}
      >
        <SLink fontSize="16px" to={"/"}>
          {t(`EN`)}
        </SLink>
        <Text fontSize="16px" padding="0 0.5rem">
          |
        </Text>
        <SLink fontSize="16px" to={"/zh"}>
          {t(`CN`)}
        </SLink>
      </div>
      <ExternalLink href="https://dapp.spanner.network" target="_blank">
        <HeavyText fontSize="16px" color={theme.primary1} padding="0 1.5rem">
          {t("Launch Dapp")}
        </HeavyText>
      </ExternalLink>
    </div>
    // </DesktopWrapper>
  )
}


interface NavItem {
  label: string
  link: string
  icon: JSX.Element
  internal: boolean
}

export default function NavBar() {
  const isMobile = useMedia("(max-width: 720px)")
  const { i18n } = useTranslation()
  const navItems: NavItem[] = [
    {
      label: "Deck",
      link: i18n.language == "zh" ? SpannerDeckZh : SpannerDeck,
      icon: <SlideShow />,
      internal: false
    },
    {
      label: "Docs",
      link: "/docs/getting-started",
      icon: <Description />,
      internal: true
    },
    {
      label: "Guides",
      link: "/guides",
      icon: <Directions />,
      internal: true
    },
    {
      label: "Blog",
      link: "https://blog.spanner.network",
      icon: <Book />,
      internal: false
    }
  ]
  return <>{isMobile ? <MobileNav  navItems={navItems}/> : <DesktopNav navItems={navItems} />}</>
}
