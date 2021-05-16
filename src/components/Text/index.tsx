import styled from "styled-components"

const Base = styled.p<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  width: ${({ width }) => (width ? width : "100%")};
  margin: 0;
  padding: ${({ padding }) => (padding ? padding : "0.1rem 0")};
  line-height: 1.5;
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: ${mobileFontSize ? mobileFontSize : "14px"};
  `};
`

export const Text = styled(Base)<{ fontWeight?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '400px'};
  padding: ${({ padding }) => (padding ? padding : "1rem 0")};

`

export const ThinText = styled(Base)`
  font-weight: 300;
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "12px"};
`};
`

export const HeavyText = styled(Base)`
  font-weight: 700;
`

export const LightText = styled(Base)`
  font-weight: 400;
  color: ${({ theme }) => theme.text5};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: ${mobileFontSize ? mobileFontSize : "14px"};
`};
`

export const BigText = styled(Base)`
  font-weight: 900;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "45px")};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  line-height: 1;
`};
`

export const Header1 = styled.h1<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "48px")};
  font-weight: 900;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};

  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "28px"};
`};
`

export const Header2 = styled.h2<{
  fontSize?: string
  color?: string
  width?: string
  padding?: string
  mobileFontSize?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  font-weight: 900;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "20px"};
`};
`

export const Header3 = styled.h3<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  font-weight: 700;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "20px"};
`};
`

export const Header4 = styled.h4<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: 700;
  width: 100%;
  margin: 1rem 0;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "18px"};
`};
`

export const DocHeader1 = styled.h1<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  text-align: left;
  letter-spacing: 0px;
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "36px")};
  font-weight: 900;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "24px"};
`};
`

export const DocHeader2 = styled.h2<{
  fontSize?: string
  color?: string
  width?: string
  padding?: string
  mobileFontSize?: string
}>`
  text-align: left;
  letter-spacing: 0px;
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  font-weight: 700;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "20px"};
`};
`

export const DocHeader3 = styled.h3<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  text-align: left;
  letter-spacing: 0px;
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-weight: 700;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "18px"};
`};
`

export const DocHeader4 = styled.h4<{
  fontSize?: string
  mobileFontSize?: string
  color?: string
  width?: string
  padding?: string
}>`
  font-family: "Lato", "Roboto", "sans-serif";
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  font-weight: 700;
  width: 100%;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "16px"};
`};
`

export const DocText = styled(Base)`
  text-align: left;
  font-size: 16px;
  letter-spacing: 0px;
  opacity: 1;
  padding: 1rem 0;
  line-height: 24px;
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "14px"};
  padding: 0.5rem 0;
`};
`

export const DocAnchorText = styled.a`
  text-decoration: 0;
  color: #0073E6;
  text-align: left;
  font-size: 16px;
  letter-spacing: 0px;
  opacity: 1;
  padding: 1rem 0;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 14px;
  padding: 0.5rem 0;
`};
`
