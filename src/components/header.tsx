import * as React from "react"
import styled from "styled-components"
import NavBar from "./Navbar"
import logo from "../images/logo-spanner-gradient.svg"
import { SLink } from "./Link"
import { RowBetween } from "./rows"
import { ContentWrapper } from "./Wrapper"
import PropTypes from "prop-types"

const HeaderWrapper = styled.div<{ fixed: boolean; withBorder?: boolean; }>`
  display: flex;
  position: ${({ fixed }) => fixed ? 'fixed' : 'inherit' };
  border: ${({ withBorder, theme }) => withBorder ? `1px solid ${theme.bg3}` : 'none'};
  align-items: center;
  justify-content: left;
  width: 100%;
  background: #fff;
  margin-bottom: 1.5rem;
  height: 70px;
  z-index: 100;
`

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

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
`

export default function Header({ siteTitle, fixed, withBorder }: { siteTitle: string; fixed?: boolean; withBorder?: boolean }) {
  return (
    <HeaderWrapper fixed={fixed ? fixed : false} withBorder={withBorder}>
      <ContentWrapper>
        <RowBetween>
          <SLink to="/">
            <FlexWrapper>
              <LogoWrapper>
                <img src={logo} style={{ width: "44px" }} />
              </LogoWrapper>
              <LogoTitle style={{ margin: 0 }}>{siteTitle}</LogoTitle>
            </FlexWrapper>
          </SLink>
          <NavBar />
        </RowBetween>
      </ContentWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Spanner Protocol`,
}
