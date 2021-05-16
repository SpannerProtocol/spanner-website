import styled from "styled-components"

export const SectionDarkBg = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.bg2};
  z-index: -1;
`

export const SectionImageBg = styled.div<{ height?: string; url?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : "600px")};
  background: ${({ url }) =>
    url
      ? `transparent url(${url}) center center no-repeat padding-box;`
      : "none"};
  opacity: 1;
`

export const ContentWrapper = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1400px;
  margin: auto;
  box-sizing: border-box;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-left: 2rem;
    padding-right: 2rem;
`};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding-left: 1rem;
    padding-right: 1rem;
`};
`

export const PageWrapper = styled.div`
  width: 100%;
  margin: auto;
`

export const Section = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const SpacedSection = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `};
`

export const ContentSection = styled.div<{
  paddingTop?: string
  paddingBottom?: string
}>`
  width: 100%;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "2rem")};
  padding-bottom: ${({ paddingTop }) => (paddingTop ? paddingTop : "2rem")};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-top: 1rem;
    padding-bottom: 1rem;
  `};
`

export const DocsContentSection = styled(ContentSection)`
  background: ${({ theme }) => theme.white};
  padding-top: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-y: scroll;
  max-width: 800px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding-left: 1rem;
  padding-right: 1rem;
`};
`

export const CenterWrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Wrapper = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "960px")};
  margin: auto;
`

export const FlexWrapper = styled.div<{
  justifyContent?: string
  alignItems?: string
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  width: 100%;
`

export const ImageWrapper = styled.div<{
  justifyContent?: string
  alignItems?: string
  maxWidth?: string
  height?: string
}>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "400px")};
  margin: auto;
  height: ${({ height }) => height ? height : 'initial'};
`
