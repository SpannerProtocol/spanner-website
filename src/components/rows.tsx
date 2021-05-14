import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const Row = styled(Box)<{ align?: string; padding?: string; border?: string; borderRadius?: string }>`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: ${({ align }) => (align ? align : 'center')};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
`

export const RowFlat = styled.div`
  display: flex;
  align-items: flex-end;
`

export const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};
  padding-left: 1rem;
  padding-right: 1rem;
  & > * {
    margin: ${({ gap }) => gap} !important;
  }

`

export const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`
  width: fit-content;
  margin: ${({ gap }) => gap && `-${gap}`};
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  width: 100%;
`

export const SpacedRow = styled(RowBetween)`
  margin-top: 1vh;
  margin-bottom: 1vh;
`

export const CenteredRow = styled(RowBetween)`
  justify-content: center;
  text-align: center;
  align-items: center;
`

export default Row
