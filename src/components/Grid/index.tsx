import styled from "styled-components"

export const Grid = styled.div<{ columns?: string; mobileColumns?: string }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    ${({ columns }) => (columns ? columns : "1")},
    minmax(0, ${({ columns }) => (columns ? columns : "1")}fr)
  );
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;

  ${({ mobileColumns, theme }) => theme.mediaWidth.upToExtraSmall`
  display:grid;
  grid-template-columns: repeat(${
    mobileColumns ? mobileColumns : "1"
  }, minmax(0, ${mobileColumns ? mobileColumns : "1"}fr));
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  `};
`

export const ReverseGrid = styled(Grid)`
  direction: rtl;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    direction: ltr;
  `};
`

export const GridBlock = styled.div<{ maxWidth?: string; textAlign?: string, mobileAlign?: string }>`
  display: block;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  margin: 0 auto;
  padding: 0.5rem 0;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "300px")};
  ${({ mobileAlign, theme }) => theme.mediaWidth.upToExtraSmall`
    text-align: ${mobileAlign ? mobileAlign : "center"};
    padding: 1.5rem 0;
  `};
`
