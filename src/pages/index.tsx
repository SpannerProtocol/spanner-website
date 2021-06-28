import { ExternalLink, SLocalizedLink } from "components/Link"
import * as React from "react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import styled, { ThemeContext } from "styled-components"
import {
  ButtonLight,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTrans
} from "../components/Button"
import { Card, CardIconGrid } from "../components/Card"
import { Grid, GridBlock, ReverseGrid } from "../components/Grid"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import {
  BigText,
  Header1,
  Header2,
  Header4,
  HeavyText,
  LightText,
  Text,
  ThinText
} from "../components/Text"
import TimelineBox from "../components/Timeline"
import {
  CenterWrapper,
  ContentSection,
  ContentWrapper,
  FlexWrapper,
  ImageWrapper,
  PageWrapper,
  SectionDarkBg,
  SectionImageBg,
  SpacedSection,
  Wrapper
} from "../components/Wrapper"
import bulletTrainBg from "../images/banner-bullettrain-desktop.jpg"
import joinCommunityBanner from "../images/banner-joincommunity.png"
import dpoComparisonChart from "../images/dpo-comparison-chart.svg"
import dpoComparisonChartZh from "../images/dpo-comparison-chart-zh.svg"
import dpoComparison from "../images/dpo-comparison.svg"
import dpoComparisonZh from "../images/dpo-comparison-zh.svg"
import heroBanner from "../images/hero-banner-desktop.jpg"
import heroMobileBanner from "../images/hero-banner-mobile.jpg"
import arrowIcon from "../images/icon-arrow.svg"
import blockchainIcon from "../images/icon-blockchain.svg"
import decentralizedIcon from "../images/icon-decentralized.svg"
import organizationIcon from "../images/icon-organization.svg"
import programmableIcon from "../images/icon-programmable.svg"
import builderIcon from "../images/icon-spanner.svg"
import userIcon from "../images/icon-user.svg"
import acalaIcon from "../images/logo-acala-network.svg"
import imtokenIcon from "../images/logo-imtoken-reverse.svg"
import mathIcon from "../images/logo-math-black-full.svg"
import metamaskIcon from "../images/logo-metamask-full.svg"
import parityIcon from "../images/logo-parity-substrate.svg"
import polkadotIcon from "../images/logo-polkadot-color.svg"
import rococoIcon from "../images/logo-rococo.png"
import walletConnectIcon from "../images/logo-walletconnect-banner.svg"
import facebookIcon from "../images/social-icon-facebook.svg"
import redditIcon from "../images/social-icon-reddit.svg"
import telegramIcon from "../images/social-icon-telegram.svg"
import twitterIcon from "../images/social-icon-twitter.svg"
import techStack from "../images/spanner-tech-stack.svg"
import techStackZh from "../images/spanner-tech-stack-zh.svg"

const BannerContainer = styled.div`
  width: 100%;
  height: 650px;
  background: transparent url(${heroBanner}) center center no-repeat padding-box;
  opacity: 1;
  z-index: 5;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    background: transparent url(${heroMobileBanner}) center center no-repeat padding-box;
    background-size: cover;
    z-index: -5;
  `};
`

const BannerTextContainer = styled.div`
  position: absolute;
  top: 177px;
  text-align: left;
`

const HeaderWrapper = styled.div`
  max-width: 560px;
`

const HeroButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  alignitems: center;
  justify-content: start;
  padding: 2rem 0;
  margin: auto;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 2rem;
  margin: 0 2rem;
  justify-content: center;
`};
`

const HeroButton1 = styled(ButtonPrimary)`
  font-family: "Lato", "Roboto", sans-serif;
  font-size: 16px;
  margin: 1rem 1rem 1rem 0rem;
  width: 200px;
  height: 50px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 14px;
  margin: 1rem 0rem;
  padding: 1rem 2rem;
  width: 180px;
  height: auto;
`};
`

const HeroButton2 = styled(ButtonTrans)`
  font-family: "Lato", "Roboto", sans-serif;
  font-size: 16px;
  margin: 1rem 0rem 1rem 1rem;
  width: 200px;
  height: 50px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 14px;
  margin: 1rem 0rem;
  padding: 1rem 2rem;
  width: 180px;
  height: auto;
`};
`

function HeroBanner() {
  const { t, i18n } = useTranslation()
  // const theme = useContext(ThemeContext)
  return (
    <>
      <CenterWrapper>
        <BannerContainer className="Hero Banner">
          <ContentWrapper>
            <BannerTextContainer>
              <HeaderWrapper>
                <Header1>{t("herobanner header")}</Header1>
              </HeaderWrapper>
              <Text fontSize="24px" mobileFontSize="20px" fontWeight="300">
                {t("herobanner text")}
              </Text>
              <HeroButtonWrapper>
                <ExternalLink
                  href="https://dapp.spanner.network"
                  target="_blank"
                >
                  <HeroButton1>{t("Launch Dapp")}</HeroButton1>
                </ExternalLink>
                <SLocalizedLink to="/docs/getting-started" language={i18n.language}>
                  <HeroButton2>{t("Learn More")}</HeroButton2>
                </SLocalizedLink>
              </HeroButtonWrapper>
            </BannerTextContainer>
          </ContentWrapper>
        </BannerContainer>
      </CenterWrapper>
    </>
  )
}

function IntroducingDPO() {
  const { t } = useTranslation()
  return (
    <>
      <ContentWrapper>
        <ContentSection>
          <CenterWrapper>
            <Header2>{t(`Introducing DPO`)}</Header2>
            <Wrapper>
              <Text>
                {t("dpo introduting text")}
              </Text>
            </Wrapper>
          </CenterWrapper>
        </ContentSection>
        <ContentSection>
          <Grid columns="3" mobileColumns="1">
            <GridBlock>
              <ImageWrapper height="55px">
                <img src={decentralizedIcon} style={{ width: "53px" }} />
              </ImageWrapper>
              <Header4>{t("Decentralized")}</Header4>
              <Text fontSize="16px">{t("dpo decentralized sub title")}</Text>
              <LightText>
                {t("dpo decentralized text")}
              </LightText>
            </GridBlock>
            <GridBlock>
              <ImageWrapper height="55px">
                <img src={programmableIcon} style={{ width: "53px" }} />
              </ImageWrapper>
              <Header4>{t("Programmable")}</Header4>
              <Text fontSize="16px">
                {t("dpo programmable sub title")}
              </Text>
              <LightText>
                {t("dpo programmable text")}
              </LightText>
            </GridBlock>
            <GridBlock>
              <ImageWrapper height="55px">
                <img src={organizationIcon} style={{ width: "53px" }} />
              </ImageWrapper>
              <Header4>{t("Organization")}</Header4>
              <Text fontSize="16px">{t("dpo organization sub title")}</Text>
              <LightText>
                {t("dpo organization text")}
              </LightText>
            </GridBlock>
          </Grid>
        </ContentSection>
      </ContentWrapper>
    </>
  )
}

function DaoOrgComparison() {
  const { t, i18n } = useTranslation()
  const dpoComparisonChartImg = i18n.language == "zh" ? dpoComparisonChartZh : dpoComparisonChart
  const dpoComparisonImg = i18n.language == "zh" ? dpoComparisonZh : dpoComparison
  return (
    <>
      <ContentWrapper>
        <ContentSection>
          <Grid columns="2" mobileColumns="1">
            <GridBlock maxWidth="635px" textAlign="left">
              <Header2>
                {t("DaoOrgComparison header")}
              </Header2>
              <LightText fontSize="16px">
                {t("DaoOrgComparison text")}
              </LightText>
            </GridBlock>
            <GridBlock maxWidth="635px">
              <ImageWrapper maxWidth="620px">
                <img
                  src={dpoComparisonChartImg}
                  width={"100%"}
                  alt="Comparison of advantages for DPO with DAO and traditional companies"
                />
              </ImageWrapper>
            </GridBlock>
          </Grid>
          <ReverseGrid columns="2" mobileColumns="1">
            <GridBlock maxWidth="635px" textAlign="left">
              <Header2>{t("DAOs vs DPOs vs Traditional")}</Header2>
              <LightText fontSize="16px">
                {t("DAOs vs DPOs vs Traditional text")}
              </LightText>
            </GridBlock>
            <GridBlock maxWidth="635px">
              <ImageWrapper maxWidth="620px">
                <img
                  src={dpoComparisonImg}
                  width={"100%"}
                  alt="Comparing DPO to DAO and Traditional Companies"
                />
              </ImageWrapper>
            </GridBlock>
          </ReverseGrid>
        </ContentSection>
      </ContentWrapper>
    </>
  )
}

function HowSpannerWorks() {
  const { t, i18n } = useTranslation()
  const techStackImg = i18n.language == "zh" ? techStackZh : techStack
  return (
    <>
      <SectionDarkBg>
        <ContentWrapper>
          <ContentSection>
            <CenterWrapper>
              <Header2>{t("How Spanner Works")}</Header2>
              <Text>
                {t("Full-stack optimization for Economies of Scale and technical Comparative Advantage.")}
              </Text>
              <Header4>{t("All powered by BOLT")}</Header4>
            </CenterWrapper>
            <CenterWrapper>
              <ImageWrapper maxWidth="800px">
                <img
                  src={techStackImg}
                  width={"100%"}
                  alt="Spanner's technology stack powered by the BOLT token."
                />
              </ImageWrapper>
            </CenterWrapper>
            <CenterWrapper style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ margin: "0 1rem", padding: "1rem" }}>
                <ExternalLink
                  href="https://dapp.spanner.network/dex"
                  target="_blank"
                >
                  <ButtonPrimary fontSize="20px" padding="0.8rem">
                    {t("Get BOLT")}
                  </ButtonPrimary>
                </ExternalLink>
              </div>
              <div style={{ margin: "0 1rem", padding: "1rem" }}>
                <SLocalizedLink to="/docs/architecture" target="_blank">
                  <ButtonSecondary fontSize="20px" padding="0.8rem">
                    {t("About Spanner")}
                  </ButtonSecondary>
                </SLocalizedLink>
              </div>
            </CenterWrapper>
          </ContentSection>
        </ContentWrapper>
      </SectionDarkBg>
    </>
  )
}

function BulletTrain() {
  const theme = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  return (
    <SectionDarkBg backgroundColor={theme.bg5}>
      <CenterWrapper>
        <SectionImageBg
          height="700px"
          url={bulletTrainBg}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ContentWrapper>
            <ContentSection>
              <Grid columns="2" mobileColumns="1">
                <GridBlock maxWidth="536px" textAlign="left">
                  <div />
                </GridBlock>
                <GridBlock maxWidth="536px" textAlign="left" mobileAlign="left">
                  <SpacedSection>
                    <BigText color="#fff">
                      {t("Grow with Spanner BulletTrain")}
                    </BigText>
                  </SpacedSection>
                  <SpacedSection>
                    <ThinText color="#fff" style={{ padding: "1rem 0" }}>
                      <b>{t("DPO for Growth in action.")}</b>
                      {t("Grow the community for your hot crypto project with BulletTrain. Start a BulletTrain on Spanner Blockchain to empower your community to grow itself through affiliate crowdfunding incentives.")}

                    </ThinText>
                  </SpacedSection>
                  <SLocalizedLink to="/docs/bullettrain" language={i18n.language}>
                    <ButtonLight
                      fontSize="20px"
                      height="56px"
                      width="243px"
                      marginRight="20px"
                    >
                      {t("Earn More BOLT")}
                    </ButtonLight>
                  </SLocalizedLink>
                </GridBlock>
              </Grid>
            </ContentSection>
          </ContentWrapper>
        </SectionImageBg>
      </CenterWrapper>
    </SectionDarkBg>
  )
}

function AudienceLearnMore() {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()

  const cardData = [
    {
      header: "Builders",
      image: builderIcon,
      text: "Build your project on Spanner. No code required.",
      link: "/docs/build-on-spanner"
    },
    {
      header: "Users",
      image: userIcon,
      text: "Check out our decentralized application, Spanner Dapp.",
      link: "/docs/spanner-dapp"
    },
    {
      header: "Enthusiasts",
      image: blockchainIcon,
      text: `Curious about Spanner's Blockchain? Read more about our blockchain parameters.`,
      link: "/docs/parameters"
    }

  ]
  return (
    <>
      <SectionDarkBg backgroundColor={theme.bg5}>
        <ContentWrapper>
          <ContentSection>
            <Grid columns="2" mobileColumns="1">
              <GridBlock display="flex" maxWidth="670px" textAlign="left" alignItems="center">
                <Header2 color={theme.white}>
                  {t("Whether you are a Project Owner, User or just curious, there’s plenty of resources for you to learn more about Spanner.")}
                </Header2>
              </GridBlock>
              <GridBlock maxWidth="670px" textAlign="left">
                {cardData.map((data, index) => (
                  <SLocalizedLink key={index} to={data.link}>
                    <CardIconGrid maxWidth="575px">
                      <CenterWrapper style={{ display: "flex" }}>
                        <img src={data.image} style={{ width: "40px" }} />
                      </CenterWrapper>
                      <CenterWrapper
                        style={{ display: "flex", justifyContent: "start" }}
                      >
                        <div style={{ display: "block", textAlign: "left" }}>
                          <HeavyText fontSize="20px" padding="0.35rem 0">
                            {t(data.header).toUpperCase()}
                          </HeavyText>
                          <LightText padding="0.35rem 0">{t(data.text)}</LightText>
                        </div>
                      </CenterWrapper>
                      <CenterWrapper style={{ display: "flex" }}>
                        <img src={arrowIcon} style={{ width: "27px" }} />
                      </CenterWrapper>
                    </CardIconGrid>
                  </SLocalizedLink>
                ))}
              </GridBlock>
            </Grid>
          </ContentSection>
        </ContentWrapper>
      </SectionDarkBg>
    </>
  )
}

function OurPartners() {
  const partnerLogos = [
    acalaIcon,
    mathIcon,
    metamaskIcon,
    parityIcon,
    polkadotIcon,
    imtokenIcon,
    rococoIcon,
    walletConnectIcon
  ]
  const { t } = useTranslation()
  return (
    <ContentWrapper>
      <ContentSection>
        <CenterWrapper>
          <Header2>{t("Our Partner Candidates")}</Header2>
          <Grid columns="4" mobileColumns="1">
            {partnerLogos.map((logoFile, index) => (
              <GridBlock key={index}>
                <ImageWrapper maxWidth="180px" style={{ padding: "0.5rem" }}>
                  <img
                    src={logoFile}
                    alt="partner logo"
                    style={{ width: "100%" }}
                  />
                </ImageWrapper>
              </GridBlock>
            ))}
          </Grid>
        </CenterWrapper>
      </ContentSection>
    </ContentWrapper>
  )
}

function OurCommunity() {
  const theme = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const cardData = [
    {
      header: `Hodlers`,
      text: `Get up to date information at our Telegram Channel.`,
      cta: "Join Telegram",
      link: "https://t.me/spannerprotocol"
    },
    {
      header: "Ecosystem Partners",
      text: "Collaborate with our team to integrate Spanner with your project",
      cta: "Find out more",
      link: "/docs/integration-guide/"
    },
    {
      header: `Ambassadors`,
      text: `Join our Ambassador Program and help grow our community!`,
      cta: `Become Ambassadors`,
      link: "mailto:ask@spanner.network"
    }
  ]
  const socialLinks = [
    {
      name: "telegram",
      icon: telegramIcon,
      link: "https://t.me/spannerprotocol"
    },
    {
      name: "twitter",
      icon: twitterIcon,
      link: "https://twitter.com/ProtocolSpanner"
    },
    {
      name: "reddit",
      icon: redditIcon,
      link: "#"
    },
    {
      name: "facebook",
      icon: facebookIcon,
      link: "#"
    }
  ]
  return (
    <>
      <ContentWrapper>
        <ContentSection>
          <CenterWrapper>
            <Header2>{t("Our Community")}</Header2>
          </CenterWrapper>
          <FlexWrapper>
            {cardData.map((data, index) => (
              <Card key={index} height="245px" margin="1rem" padding="1.5rem">
                <HeavyText
                  fontSize="20px"
                  padding="1rem 0"
                  color={theme.primary1}
                >
                  {t(data.header).toUpperCase()}
                </HeavyText>
                <LightText fontSize="16px" padding="1rem 0">
                  {t(data.text)}
                </LightText>
                {data.link.includes("https://") ||
                data.link.includes("mailto:") ? (
                  <ExternalLink href={data.link}>
                    <FlexWrapper justifyContent="flex-start">
                      <HeavyText
                        fontSize="16px"
                        width="fit-content"
                        padding="1rem 0"
                        style={{ paddingRight: "1rem" }}
                      >
                        {t(data.cta)}
                      </HeavyText>
                      <img src={arrowIcon} style={{ width: "27px" }} />
                    </FlexWrapper>
                  </ExternalLink>
                ) : (
                  <SLocalizedLink to={data.link} language={i18n.language}>
                    <FlexWrapper justifyContent="flex-start">
                      <HeavyText
                        fontSize="16px"
                        width="fit-content"
                        padding="1rem 0"
                        style={{ paddingRight: "1rem" }}
                      >
                        {t(data.cta)}
                      </HeavyText>
                      <img src={arrowIcon} style={{ width: "27px" }} />
                    </FlexWrapper>
                  </SLocalizedLink>
                )}
              </Card>
            ))}
          </FlexWrapper>
        </ContentSection>
      </ContentWrapper>
      <SectionDarkBg backgroundColor={theme.bg5}>
        <CenterWrapper>
          <SectionImageBg
            url={joinCommunityBanner}
            height="434px"
            style={{ display: "flex", alignItems: "center" }}
          >
            <CenterWrapper>
              <Header2 color="#fff">
                {t("Interested in being a part of the borderless future?")}
              </Header2>
              <HeavyText color="#fff" fontSize="20px">
                {t("Join our community today.")}
              </HeavyText>
              <SpacedSection>
                {socialLinks.map((social, index) => (
                  <ExternalLink key={index} href={social.link} target="_blank">
                    <img
                      src={social.icon}
                      width="24px"
                      alt={`${social.name} icon`}
                      style={{ margin: "1rem" }}
                    />
                  </ExternalLink>
                ))}
              </SpacedSection>
            </CenterWrapper>
          </SectionImageBg>
        </CenterWrapper>
      </SectionDarkBg>
    </>
  )
}

const timelineData = [
  {
    headline: "Research",
    items: [
      "Hammer Testnet development",
      "DPO Research and Architecture",
      "Dex and Bridge development",
      "BulletTrain Development"
    ],
    date: "2020",
    finished: true
  },
  {
    headline: "Minimum Viable Products",
    items: [
      "Hammer Testnet Launch",
      "DPO V1 Development",
      "Dex and Bridge Launch on Hammer",
      "Partnership Development",
      "BulletTrain Released on Hammer"
    ],
    date: "2021 Q1",
    finished: true
  },
  {
    headline: "Official Launch",
    items: [
      "Spanner Mainnet launch",
      "DPO Smart Contract Research",
      "BulletTrain Launch (Spanner BOLT)",
      "Rococo Parachain Research"
    ],
    date: "2021 Q2",
    finished: false
  },
  {
    headline: "DPO Enhancement",
    items: [
      "Parachain Offering",
      "DPO V2 Research",
      "DPO Off-chain Oracle Research",
      "BulletTrain open for all Projects",
      "Growth Marketplace"
    ],
    date: "2021 Q3",
    finished: false
  },
  {
    headline: "Parter Integrations",
    items: [
      "Parachain Interoperability",
      "DPO Full Smart Contract Support",
      "DPO Off-chain Oracle Support",
      "More DPO applications"
    ],
    date: "2021 Q4",
    finished: false
  }
]

function RoadMap() {
  const { t } = useTranslation()
  return (
    <ContentWrapper>
      <ContentSection paddingTop="3rem" paddingBottom="3rem">
        <CenterWrapper>
          <div style={{ overflow: "hidden" }}>
            <Header2>{t("Our Project Roadmap")}</Header2>
            {timelineData.map((target, index) => (
              <TimelineBox key={index} {...target} />
            ))}
          </div>
        </CenterWrapper>
      </ContentSection>
    </ContentWrapper>
  )
}

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Borderless Collaboration via DPOs & BOLT"
        description={`The blockchain that enables borderless collaboration powered by the BOLT token. Be a part of the DAO revolution. Manage your crypto project with Spanner DPOs today!`}
      />
      <PageWrapper>
        <HeroBanner />
        <IntroducingDPO />
        <DaoOrgComparison />
        <HowSpannerWorks />
        <BulletTrain />
        <RoadMap />
        <AudienceLearnMore />
        <OurPartners />
        <OurCommunity />
      </PageWrapper>
    </Layout>
  )
}
