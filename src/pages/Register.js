import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";

function Register({ showModal, closeModal, decidepage }) {
  const CheckNicknameRef = useRef(null);

  const _CheckNickname = async (nickname) => {
    const { result } = await axios.get("/api/signup");
    return result;
  };

  const Getregister = () => {
    console.log(CheckNicknameRef.current.value);
  };

  return (
    <>
      {decidepage ? (
        showModal ? (
          <Background>
            <ModalContainer>
              <ExitBtn onClick={closeModal}>X</ExitBtn>
              <TitleBox>로그인 페이지</TitleBox>
              <WriteBox>
                <div>
                  <p>아이디</p>
                  <InputBox />
                  <p>비밀번호</p>
                  <InputBox />
                </div>
              </WriteBox>
              <LoginRegisterBtn>로그인</LoginRegisterBtn>
            </ModalContainer>
          </Background>
        ) : null
      ) : showModal ? (
        <Background>
          <ModalContainer>
            <ExitBtn onClick={closeModal}>X</ExitBtn>
            <TitleBox>회원가입 페이지</TitleBox>
            <WriteBox>
              <div>
                <p>아이디</p>
                <InputBox ref={CheckNicknameRef} />
                <NicknameCheckText id="nicknamecheck">
                  사용 가능한 아이디 입니다.
                </NicknameCheckText>
                <p>비밀번호</p>
                <InputBox />
                <NicknameCheckText id="pswdcheck">8자리 이상</NicknameCheckText>
                <p>비밀번호 재확인</p>
                <InputBox />
                <NicknameCheckText id="samepswd">
                  같은 비밀번호 입니다.
                </NicknameCheckText>
              </div>
            </WriteBox>
            <LoginRegisterBtn onClick={Getregister}>회원가입</LoginRegisterBtn>
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
  height: 50%;
  padding: 16px;
  background: #c8d5f5;
  border-radius: 10px;
  text-align: center;
`;

const ExitBtn = styled.button`
  margin-top: -5px;
  margin-right: -5px;
  float: right;
  color: #e06c6c;
  font-size: 1.5em;
  background-color: #c8d5f5;
  border: 1px solid #c8d5f5;
  :hover {
    color: red;
  }
`;

const TitleBox = styled.div`
  margin: auto;
  margin-top: 30px;
  font-size: 1.2em;
`;

const LoginRegisterBtn = styled.button`
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  border: 4px solid white;
`;

const WriteBox = styled.div`
  justify-content: center;
  margin-top: 30px;
`;

const InputBox = styled.input`
  border: 1px solid white;
  border-radius: 5px;
`;

const NicknameCheckText = styled.div`
  display: none;
`;

export default Register;
