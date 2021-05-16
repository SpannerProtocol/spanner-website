import styled from "styled-components"

export const SideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 30vw;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  padding-top: 80px;
  border: 1px solid ${({ theme }) => theme.bg3};
  background-color: ${({ theme }) => theme.bg2};
`
