import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { db } from "../firebase";
import SidebarOptions from "./SidebarOptions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Sidebar() {
  const [user] = useAuthState(auth);

  const [channels] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>IBE IROM HQ</h2>

          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title='Threads' />
      <SidebarOptions Icon={Inbox} title='Mentions and reactions' />
      <SidebarOptions Icon={Drafts} title='Saved items' />
      <SidebarOptions Icon={BookmarkBorder} title='Channel browser' />
      <SidebarOptions Icon={PeopleAlt} title='People and user group' />
      <SidebarOptions Icon={Apps} title='Apps' />
      <SidebarOptions Icon={FileCopy} title='File browser' />
      <SidebarOptions Icon={ExpandLess} title='Show less' />
      <hr />
      <SidebarOptions Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarOptions Icon={Add} addChannelOption title='Add Channel' />
      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 38px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 13;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
