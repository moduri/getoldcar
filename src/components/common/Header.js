import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Head>헤드</Head>
    </>
  );
}

const Head = styled.div`
  height: 80px;
  background-color: #cbcbfe;
  text-align: center;
`;

export default Header;
