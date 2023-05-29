import React, { useEffect } from "react";
import MainHeader from "../components/common/header/header";
import { useRecoilValue } from "recoil";
import LoginModal from "../components/login/LoginModal";
import { popupRecoilState } from "../atoms/Popup";
import WdListMain from "../components/wdlist/Main";
import styled from "styled-components";
import { device } from "../components/styled";

export default function WdList() {
  
  return (
    <div>
      {/* <MainHeader></MainHeader> */}
      <EmptySection />

      <WdListMain></WdListMain>

      
    </div>
  );
}

const EmptySection = styled.div`
  height: 50px;
  @media all and ${device.medium} {
    height: 110px;
  }
`;
