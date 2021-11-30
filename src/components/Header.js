import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        // add an onClick
        />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input type='text' placeholder='Search Arkad' />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: auto.3;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
