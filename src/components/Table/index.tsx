import styled from "styled-components"

export const STable = styled.table`
  border-collapse: collapse;
  margin: 2rem auto;
  font-size: 0.9em;
  font-family: 'Lato', 'Roboto', sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`

export const STr = styled.tr`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text1};
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.secondary2};

  &:last-of-type {
    border-bottom: 2px solid ${({ theme }) => theme.secondary1};
  }
`

export const STh = styled.th`
  background-color: ${({ theme }) => theme.secondary1};
  color: ${({ theme }) => theme.white};
  padding: 12px 15px;
`

export const STd = styled.td`
  padding: 12px 15px;
`
