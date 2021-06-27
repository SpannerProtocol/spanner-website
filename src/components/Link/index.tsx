import { Link } from "gatsby"
import styled from "styled-components"
import { LocalizedLink} from "gatsby-theme-i18n"

export const SLink = styled(Link)<{
  fontWeight?: number
  color?: string
  fontSize?: string
  width?: string
  padding?: string
}>`
  text-decoration: none;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  font-family: "Lato", "Roboto", "sans-serif";
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  width: ${({ width }) => (width ? width : "fit-content")};
  margin: 0;
  padding: ${({ padding }) => (padding ? padding : "0.1rem 0")};
  cursor: pointer;
`

export const ExternalLink = styled.a<{
  fontWeight?: number
  color?: string
  fontSize?: string
  width?: string
  padding?: string
}>`
  text-decoration: none;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  font-family: "Lato", "Roboto", "sans-serif";
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  width: ${({ width }) => (width ? width : "fit-content")};
  margin: 0;
  padding: ${({ padding }) => (padding ? padding : "0.1rem 0")};
  cursor: pointer;
`

export const SLocalizedLink = styled(LocalizedLink)<{
  fontWeight?: number
  color?: string
  fontSize?: string
  width?: string
  padding?: string
}>`
  text-decoration: none;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  font-family: "Lato", "Roboto", "sans-serif";
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  width: ${({ width }) => (width ? width : "fit-content")};
  margin: 0;
  padding: ${({ padding }) => (padding ? padding : "0.1rem 0")};
  cursor: pointer;
`
