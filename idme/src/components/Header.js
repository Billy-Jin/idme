import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Categories from "./Categories";

const Head = styled.div`
  height: 150px;
  background: orange;
`;

const HeadTop = styled.div`
  border-top: 0 none;
  background: #f5f5f5;
  color: #666;
  vertical-align: middle;
  height: 32px;
`;
const HeadBody = styled.div`
  height: 80px;
  background: red;
`;

const HeadBottom = styled.div`
  height: 36px;
  background: green;
`;

const Header = () => {
  return (
    <Head>
      <HeadTop>헤더탑</HeadTop>
      <HeadBody>
        <img src="./images/idme3.png" alt="로고" width={"120px"} />
        헤더
      </HeadBody>
      <HeadBottom>
        <Categories />
      </HeadBottom>
    </Head>
  );
};

export default Header;
