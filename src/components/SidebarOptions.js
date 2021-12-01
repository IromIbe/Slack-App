import React from "react";
import styled from "styled-components";

function SidebarOptions(Icon, title) {
  return (
    <SidebarOptionContainer>
      <Icon></Icon>
      <h1>{title}</h1>
    </SidebarOptionContainer>
  );
}

export default SidebarOptions;
const SidebarOptionContainer = styled.div``;
