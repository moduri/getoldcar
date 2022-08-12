import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("register/1");
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            navigate("register/0");
          }}
        >
          회원가입
        </button>
      </div>
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
