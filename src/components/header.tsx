import * as React from "react"
import styled from "styled-components"
import NavBar from "./Navbar"
import logo from "../images/logo-spanner-gradient.svg"
import { SLink } from "./Link"
import { RowBetween } from "./rows"
import { ContentWrapper } from "./Wrapper"

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  background: #fff;
  margin-bottom: 1.5rem;
  height: 70px;
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

export default function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper>
        <RowBetween>
          <SLink to="/">
            <FlexWrapper>
              <LogoWrapper>
                <img src={logo} style={{ width: "44px" }} />
              </LogoWrapper>
              <LogoTitle style={{ margin: 0 }}>Spanner Protocol</LogoTitle>
            </FlexWrapper>
          </SLink>
          <NavBar />
        </RowBetween>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
