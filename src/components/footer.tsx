import useSiteUrl from "hooks/useSiteUrl"
import * as React from "react"
import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import SpannerDeck from "../assets/spanner-deck-v1.31.pdf"
import logo from "../images/logo-spanner-gradient.svg"
import { ExternalLink, SLink } from "./Link"
import { HeavyText, Text } from "./Text"
import {
  CenterWrapper,
  ContentSection,
  ContentWrapper,
  FlexWrapper,
} from "./Wrapper"

const LogoTitle = styled.p`
  padding-left: 1rem;
  font-size: 24px;
  font-family: Lato, Roboto, sans-serif;
  font-weight: 900;
  color: #262a41;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 44px;
`

const infoAndDocs = [
  {
    label: `Spanner Introduction`,
    link: `/docs/getting-started`,
    internal: true,
  },
  {
    label: `Roadmap`,
    link: `/docs/roadmap`,
    internal: true,
  },
  {
    label: `Guides`,
    link: `/docs/spanner-dapp`,
    internal: true,
  },
]

const community = [
  {
    label: `Telegram Official`,
    link: `https://t.me/spannerprotocol`,
    internal: false,
  },
  {
    label: `Telegram Announcements`,
    link: `https://t.me/spannerupdates`,
    internal: false,
  },
  {
    label: `Twitter`,
    link: `https://twitter.com/ProtocolSpanner`,
    internal: false,
  },
  // {
  //   label: `Reddit`,
  //   link: `/`,
  // },
]

const more = [
  {
    label: `Blog`,
    link: `https://blog.spanner.network`,
    internal: false,
  },
  {
    label: `Pitch Deck`,
    link: SpannerDeck,
    internal: false,
  },
  {
    label: `GitHub`,
    link: `https://github.com/SpannerProtocol`,
    internal: false,
  },
  {
    label: `Contact Us`,
    link: `mailto:ask@spanner.network`,
    internal: false,
  },
]

const FooterWrapper = styled(FlexWrapper)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-content: flex-start;
  `}
`

const ColumnWrapper = styled.div`
  display: block;
  text-align: left;
  padding: 2rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 1rem;
  width: 100%;
  `}
`

export default function Footer() {
  const theme = useContext(ThemeContext)

  const getColumn = (
    columns: { label: string; link: string; internal: boolean }[]
  ) => (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {columns.map((data, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          {data.internal ? (
            <SLink
              to={data.link}
              style={{ color: theme.text1, textDecoration: "none" }}
            >
              <Text padding="0">{data.label}</Text>
            </SLink>
          ) : (
            <ExternalLink href={data.link}>
              <Text padding="0">{data.label}</Text>
            </ExternalLink>
          )}
        </li>
      ))}
    </ul>
  )
  return (
    <ContentWrapper>
      <FooterWrapper alignItems="start">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "2rem",
            alignItems: "center",
          }}
        >
          <LogoWrapper>
            <img src={logo} style={{ width: "44px" }} />
          </LogoWrapper>
          <LogoTitle style={{ margin: 0 }}>Spanner Protocol</LogoTitle>
        </div>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            Info and Docs
          </HeavyText>
          {getColumn(infoAndDocs)}
        </ColumnWrapper>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            Community
          </HeavyText>
          {getColumn(community)}
        </ColumnWrapper>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            More
          </HeavyText>
          {getColumn(more)}
        </ColumnWrapper>
      </FooterWrapper>
      <ContentSection>
        <CenterWrapper>
          <Text>Copyright © {new Date().getFullYear()} SpannerProtocol</Text>
        </CenterWrapper>
      </ContentSection>
    </ContentWrapper>
  )
}
