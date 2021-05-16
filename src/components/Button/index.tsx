import styled from "styled-components"
import { darken } from "polished"

import { Button as RebassButton } from "rebass/styled-components"

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  height?: string
  borderRadius?: string
  altDisabledStyle?: boolean
  fontSize?: string
  mobileFontSize?: string
}>`
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "50px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: 700;
  text-align: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "12px"};
  padding: 0.5rem;
  width: 150px;
  height: 50px;
`};
`

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? theme.primary1 : theme.bg3};
    color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? "white" : theme.text3};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "0.7" : "1")};
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 14px;
    padding: 1rem;
`};
`

export const FakeButton = styled.div<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
  fontSize?: string
}>`
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  width: ${({ width }) => (width ? width : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-weight: 900;
  text-align: center;
  border: 1px solid transparent;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "8px")};
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? theme.primary1 : theme.bg3};
    color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? "white" : theme.text3};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "0.7" : "1")};
  }
`

export const ButtonTrans = styled(ButtonPrimary)`
  background-color: transparent;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  color: ${({ theme }) => theme.text1};
  border: 1px solid #262a41;
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${({ theme }) => theme.secondary1};
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.secondary1)};
    background-color: ${({ theme }) => darken(0.05, theme.secondary1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.secondary1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.secondary1)};
    background-color: ${({ theme }) => darken(0.1, theme.secondary1)};
  }
`

export const ButtonLight = styled(ButtonPrimary)`
  background-color: ${({ theme }) => darken(0.05, theme.white)};
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary1)};
    color: ${({ theme }) => theme.white};
  }
  color: ${({ theme }) => theme.text1};
  border: 1px solid transparent;
`
