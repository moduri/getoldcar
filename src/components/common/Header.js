import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Register from "../../pages/Register";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [decidepage, setDecidepage] = useState(true);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const toLogin = () => {
    setDecidepage(true);
  };
  const toRegister = () => {
    setDecidepage(false);
  };

  const toHome = () => {
    navigate("/");
  };

  const getedToken = true;

  //쿠키삭제
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  // deleteCookie(변수이름)  deleteCookie('name');

  var getCookie = function (name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
  };

  // getCookie(변수이름)  var is_expend = getCookie("expend");
  // console.log("쿠키 is_expend변수에 저장된 값: " + is_expend);

  return (
    <>
      <Head>
        <BtnBox>
          {getedToken ? (
            <div>
              <LoginRegister
                onClick={() => {
                  toLogin();
                  openModal();
                }}
              >
                로그인
              </LoginRegister>
              <LoginRegister
                onClick={() => {
                  toRegister();
                  openModal();
                }}
              >
                회원가입
              </LoginRegister>
            </div>
          ) : (
            <NicknameLogout>
              <div>파이리님</div>
              <button>로그아웃</button>
            </NicknameLogout>
          )}

          <Register
            showModal={showModal}
            closeModal={closeModal}
            decidepage={decidepage}
          ></Register>
        </BtnBox>
        <MainTitle>
          <div onClick={toHome}>PICKCAR</div>
        </MainTitle>
      </Head>
    </>
  );
}

const Head = styled.div`
  height: 100px;
  background-color: #aac0f9;
`;

const BtnBox = styled.div`
  float: right;
  margin: 8px 10px 0px 0px;
`;

const GetBtn = styled.button`
  background-color: white;
`;

const LoginRegister = styled.button`
  background-color: #fff;
  border-radius: 6px;
  border: 4px solid white;
  margin-left: auto;
  margin-right: auto;
  margin-left: 20px;
`;

const MainTitle = styled.div`
  font-size: 1.3em;
  text-align: center;
  padding-top: 37px;
`;

const NicknameLogout = styled.div`
  display: flex;
  button {
    margin: 0px 13px 0px 13px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: white;
    padding: 5px;
  }
  div {
    margin: 3px 13px 0px 13px;
  }
`;

export default Header;
