import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  color: #666;
  position: relative;
  background: #fff;
  z-index: 99;
  background: orange;
  height: 400px;
`;
const FooterTop = styled.div`
  height: 40px;
  background: gray;
`;
const FooterBody = styled.div`
  height: 230px;
  background: gold;
`;
const FooterBottom = styled.div`
  height: 130px;
  background: silver;
`;
const Footer = () => {
  return (
    <Foot>
      <FooterTop>풋터 탑</FooterTop>
      <FooterBody>풋터</FooterBody>
      <FooterBottom>풋터 바텀</FooterBottom>
    </Foot>
  );
};

export default Footer;
