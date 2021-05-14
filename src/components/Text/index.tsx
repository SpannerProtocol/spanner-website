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

  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: ${mobileFontSize ? mobileFontSize : "14px"};
  `};
`

export const Text = styled(Base)`
  font-weight: 400;
`

export const ThinText = styled(Base)`
  font-weight: 100;
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
    font-size: ${mobileFontSize ? mobileFontSize : "12px"};
`};
`

export const BigText = styled(Base)`
  font-weight: 900;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "45px")};
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
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  ${({ mobileFontSize, theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: ${mobileFontSize ? mobileFontSize : "18px"};
`};
`
