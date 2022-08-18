import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Register from "../../pages/Register";
import { useCookies, withCookies } from "react-cookie";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state.nicknameSlice);
  const [showModal, setShowModal] = useState(false);
  const [decidepage, setDecidepage] = useState(true);
  const [havecookie, setHavecookie] = useState(true);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const idvalue = document.cookie.slice(0, 2); // 쿠키의 아이디만 가져오기 위해.

  useEffect(() => {
    if (cookies.id == undefined) {
      closeModal();
      setHavecookie(false);
    } else {
      closeModal();
      setHavecookie(true);
    }
  }, [cookies]);

  //쿠키 삭제
  const deleteCookie = function (id) {
    removeCookie("id");
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  // 모달 열기 닫기
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // 로그인창으로 열기, 회원가입창으로 열기
  const toLogin = () => {
    setDecidepage(true);
  };
  const toRegister = () => {
    setDecidepage(false);
  };

  // 홈으로
  function toHome() {
    navigate("/");
  }

  return (
    <>
      <Head>
        <BtnBox>
          {havecookie ? (
            <NicknameLogout>
              <button
                onClick={() => {
                  deleteCookie(idvalue);
                }}
              >
                로그아웃
              </button>
            </NicknameLogout>
          ) : (
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
  /* background-color: #6fa3e2; */
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/buying-new-vers-used-1627408695.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 60%;
`;

const BtnBox = styled.div`
  float: right;
  margin: 8px 10px 0px 0px;
`;

const LoginRegister = styled.button`
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid white;

  margin: 0px 15px 0px 15px;
`;

const MainTitle = styled.div`
  font-size: 2.7em;
  text-align: center;
  padding-top: 28px;
  color: white;
  cursor: pointer;
  div {
    -webkit-animation: focus-in-expand-fwd 0.8s
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: focus-in-expand-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    @keyframes focus-in-expand-fwd {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-800px);
        transform: translateZ(-800px);
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
      }
      15% {
        -webkit-transform: translateZ(-400px);
        transform: translateZ(-400px);
        -webkit-filter: blur(6px);
        filter: blur(12px);
        opacity: 1;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
  }
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

export default withCookies(Header);
