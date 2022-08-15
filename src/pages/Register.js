import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { _GetRegister } from "../redux/RegisterSlice";

function Register({ showModal, closeModal, decidepage }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const CheckNicknameRef = useRef(null);

  const idcheck = useRef(null);
  const pswdcheck = useRef(null);
  const pswdcheck2 = useRef(null);

  const Getregister = () => {
    if (
      pswdcheck.current.value !== pswdcheck2.current.value ||
      idcheck.current.value.trim().length == 0
    ) {
      document.getElementById(`pswdnotion`).style.display = "block";
    } else {
      dispatch(
        _GetRegister({
          id: idcheck.current.value,
          password: pswdcheck.current.value,
        })
      );
    }
  };

  // 수정본

  return (
    <div>
      {decidepage ? (
        showModal ? (
          <Background>
            <ModalContainer>
              <ExitBtn onClick={closeModal}>X</ExitBtn>
              <TitleBox>로그인 페이지</TitleBox>
              <WriteBox>
                <div>
                  <div>아이디</div>
                  <InputBox />
                  <div>비밀번호</div>
                  <InputBox />
                </div>
              </WriteBox>
              <ClickBox>
                <CheckPswd>아이디와 비밀번호를 확인해주세요</CheckPswd>
                <LoginRegisterBtn>로그인</LoginRegisterBtn>
              </ClickBox>
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
                <div>아이디</div>
                <InputBox ref={idcheck} />
                <div>비밀번호</div>
                <InputBox ref={pswdcheck} />
                <div>비밀번호 재확인</div>
                <InputBox ref={pswdcheck2} />
                <CheckPswd id="pswdnotion">
                  아이디와 비밀번호를 확인해주세요
                </CheckPswd>
              </div>
            </WriteBox>
            <ClickBox>
              <LoginRegisterBtn onClick={Getregister}>
                회원가입
              </LoginRegisterBtn>
            </ClickBox>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
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
  text-align: center;
  font-weight: 500;
`;

const LoginRegisterBtn = styled.button`
  background-color: #fff;
  border-radius: 6px;
  border: 4px solid white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
`;

const ClickBox = styled.div`
  text-align: center;
`;

const WriteBox = styled.div`
  justify-content: center;
  width: 50%;
  margin: 30px 30px 0px 90px;
`;

const InputBox = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 250px;
`;

const CheckPswd = styled.div`
  display: none;
  color: #e06c6c;
  margin-top: 5px;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

export default Register;
