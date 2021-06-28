import useSiteUrl from "hooks/useSiteUrl"
import * as React from "react"
import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import SpannerDeck from "../assets/spanner-deck-v1.31.pdf"
import logo from "../images/logo-spanner-gradient.svg"
import { ExternalLink, SLink, SLocalizedLink } from "./Link"
import { HeavyText, Text } from "./Text"
import {
  CenterWrapper,
  ContentSection,
  ContentWrapper,
  FlexWrapper
} from "./Wrapper"
import { useTranslation } from "react-i18next"

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
    internal: true
  },
  {
    label: `Roadmap`,
    link: `/docs/roadmap`,
    internal: true
  },
  {
    label: `Guides`,
    link: `/docs/spanner-dapp`,
    internal: true
  }
]

const community = [
  {
    label: `Telegram Official`,
    link: `https://t.me/spannerprotocol`,
    internal: false
  },
  {
    label: `Twitter`,
    link: `https://twitter.com/ProtocolSpanner`,
    internal: false
  }
  // {
  //   label: `Reddit`,
  //   link: `/`,
  // },
]

const more = [
  {
    label: `Blog`,
    link: `https://blog.spanner.network`,
    internal: false
  },
  {
    label: `Pitch Deck`,
    link: SpannerDeck,
    internal: false
  },
  {
    label: `GitHub`,
    link: `https://github.com/SpannerProtocol`,
    internal: false
  },
  {
    label: `Contact Us`,
    link: `mailto:ask@spanner.network`,
    internal: false
  }
]

const language = [
  {
    label: `English`,
    link: `/`,
    internal: true
  },
  {
    label: `简体中文`,
    link: `/zh`,
    internal: true
  }
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
  const { t, i18n } = useTranslation()
  const getColumn = (
    columns: { label: string; link: string; internal: boolean }[]
  ) => (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {columns.map((data, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          {data.internal ? (
            <SLocalizedLink
              language={i18n.language}
              to={data.link}
              style={{ color: theme.text1, textDecoration: "none" }}
            >
              <Text padding="0">{t(data.label)}</Text>
            </SLocalizedLink>
          ) : (
            <ExternalLink href={data.link}>
              <Text padding="0">{t(data.label)}</Text>
            </ExternalLink>
          )}
        </li>
      ))}
    </ul>
  )

  const getSlinkColumn = (
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
              <Text padding="0">{t(data.label)}</Text>
            </SLink>
          ) : (
            <ExternalLink href={data.link}>
              <Text padding="0">{t(data.label)}</Text>
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
            alignItems: "center"
          }}
        >
          <LogoWrapper>
            <img src={logo} style={{ width: "44px" }} />
          </LogoWrapper>
          <LogoTitle style={{ margin: 0 }}>Spanner Protocol</LogoTitle>
        </div>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            {t("Info and Docs")}
          </HeavyText>
          {getColumn(infoAndDocs)}
        </ColumnWrapper>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            {t("Community")}
          </HeavyText>
          {getColumn(community)}
        </ColumnWrapper>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            {t("More")}
          </HeavyText>
          {getColumn(more)}
        </ColumnWrapper>
        <ColumnWrapper>
          <HeavyText fontSize="20px" mobileFontSize="18px">
            {t("Language")}
          </HeavyText>
          {getSlinkColumn(language)}
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
