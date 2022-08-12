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

  return (
    <>
      <Head>
        <BtnBox>
          {getedToken ? (
            <div>
              <button
                onClick={() => {
                  toLogin();
                  openModal();
                }}
              >
                로그인!
              </button>
              <button
                onClick={() => {
                  toRegister();
                  openModal();
                }}
              >
                회원가입!
              </button>
            </div>
          ) : (
            <div>파이리님</div>
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
  margin: 7px 7px 0px 0px;
`;

const MainTitle = styled.div`
  font-size: 1.3em;
  text-align: center;
`;

export default Header;
