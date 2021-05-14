import React from "react"
import styled from "styled-components"
import { CardProps, Text } from "rebass"
import { Box } from "rebass/styled-components"

export const Card = styled(Box)<{
  padding?: string
  border?: string
  borderRadius?: string
  maxWidth?: string
  height?: string
  margin?: string
  mobileHeight?: string
}>`
  box-shadow: 0px 8px 15px #2b2f4a19;
  padding: 1.25rem;
  background: ${({ theme }) => theme.bg1};
  color: ${({ theme }) => theme.white};
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  border: ${({ border }) => (border ? border : "1px solid transparent")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "15px"};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "380px")};
  height: ${({ height }) => (height ? height : "auto")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  ${({ mobileHeight, theme }) => theme.mediaWidth.upToExtraSmall`
   height: ${mobileHeight ? mobileHeight : "200px"};
  `};
`

export const CardIconGrid = styled(Card)<{ columns?: string }>`
  display: grid;
  padding: 0;
  width: 100%;
  grid-template-columns: min(110px) auto min(110px);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  height: 110px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  grid-template-columns: min(80px) auto min(80px);
  grid-column-gap: 0.35rem;
  grid-row-gap: 0.35rem;
  `};
`
