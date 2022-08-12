import React from "react";
import styled from "styled-components";

function Register({ showModal, closeModal, decidepage }) {
  return (
    <>
      {decidepage ? (
        showModal ? (
          <Background>
            <ModalContainer>
              <button onClick={closeModal}>X</button>
              <InBox>로그인 페이지</InBox>
              <div>
                <p>NICKNAME:</p>
                <input />
                <p>PASSWORD:</p>
                <input />
              </div>
              <LoginRegisterBtn>LOGIN</LoginRegisterBtn>
            </ModalContainer>
          </Background>
        ) : null
      ) : showModal ? (
        <Background>
          <ModalContainer>
            <button onClick={closeModal}>X</button>
            <InBox>회원가입 페이지</InBox>
            <div>
              <p>NICKNAME:</p>
              <input />
              <p>PASSWORD:</p>
              <input />
              <p>PASSWORD CONFIRM:</p>
              <input />
            </div>
            <LoginRegisterBtn>REGISTER</LoginRegisterBtn>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 60%;
  width: 27rem;
  height: 80%;
  padding: 16px;
  background: #e1e1fc;
  border-radius: 10px;
  text-align: center;
`;

const InBox = styled.div`
  width: 100px;
  height: 50px;
  background-color: white;
  margin: auto;
`;

const LoginRegisterBtn = styled.button`
  background-color: #fff;
  margin-top: 15px;
  border-radius: 6px;
`;

export default Register;
