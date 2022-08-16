import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { SendNickname } from "../redux/nicknameSlice";
import { useNavigate,} from "react-router-dom";

function Register({ showModal, closeModal, decidepage }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [cookies, setCookie] = useCookies(["id"]);

  const userId = useRef(null);
  const userPswd = useRef(null);

  const idcheck = useRef(null);
  const pswdcheck = useRef(null);
  const pswdcheck2 = useRef(null);
  const navigate = useNavigate();

  // console.log("렌더링");
  // console.log(cookies.id);

  const Login = async () => {
    const userData = {
      nickname: userId.current.value,
      password: userPswd.current.value,
    };
    try {
      const response = await axios.post(
        `http://13.209.87.191/api/login`,
        userData
      );
      setCookie("id", response.data.token);
      console.log(response.data.nickname);
      dispatch(SendNickname(response.data.nickname));
      // document.getElementById("exitBtn2").click();
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("아이디 또는 비밀번호가 잘못됐습니다.");
    }
  };

  // console.log(state.nicknameSlice.nickanme);

  // 회원가입 onclick > 아이디와 비밀번호를 받아서 유효성 검사를 하고 Register 함수를 실행
  const Getregister = () => {
    console.log("유효성 테스트 실행됌");
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (
      pswdcheck.current.value !== pswdcheck2.current.value ||
      idcheck.current.value.trim().length == 0
    ) {
      document.getElementById(`pswdnotion`).style.display = "block";
      // 비밀번호와 확인용 비밀번호가 서로 다를때 아이디가 아무것도 없을때
    } else if (
      pswdcheck.current.value.search(/\s/) !== -1 ||
      idcheck.current.value.search(/\s/) !== -1
    ) {
      document.getElementById(`pswdnotion`).style.display = "block";
      // 아이디나 비밀번호에 공백이 있을때
    } else if (regExp.test(pswdcheck.current.value)) {
      document.getElementById(`pswdnotion2`).style.display = "block";
      // 비밀번호에 특수문자가 들어가 있을때
    } else if (regExp.test(idcheck.current.value)) {
      document.getElementById(`pswdnotion2`).style.display = "block";
      // 아이디에 특수문자가 있을 때
    } else if (
      pswdcheck.current.value.trim().length > 11 ||
      pswdcheck.current.value.trim().length < 4
    ) {
      document.getElementById(`pswdnotion`).style.display = "block";
      // 비밀번호의 길이가 4 < 비밀번호 < 11 일때
    } else if (
      idcheck.current.value.length > 8 ||
      idcheck.current.value.length < 2
    ) {
      document.getElementById(`pswdnotion`).style.display = "block";
      // 아이디의 길이가 2 < 아이디 < 5 일때
    } else {
      // 정보를 보내서 회원가입 시도
      const Register = async () => {
        console.log("회원가입 정보 보내기 시도");
        const userData = {
          nickname: idcheck.current.value,
          password: pswdcheck.current.value,
          confirmPassword: pswdcheck2.current.value,
        };
        try {
          console.log(1);
          const result = await axios.post(
            `http://13.209.87.191/api/signup`,
            userData
          );
          console.log(2);
          alert(result.data.message);
          document.getElementById("exitBtn").click();
          console.log(3);
        } catch (error) {
          alert(error.response.data.errorMessage);
        }
      };
      Register();
    }
  };

  return (
    <div>
      {decidepage ? (
        showModal ? (
          <Background>
            <ModalContainer>
              <ExitBtn onClick={closeModal} id="exitBtn2">
                X
              </ExitBtn>
              <TitleBox>로그인</TitleBox>
              <WriteBox>
                <div>
                  <TextBox>아이디</TextBox>
                  <InputBox placeholder="ID" ref={userId} />
                  <TextBox>비밀번호</TextBox>
                  <InputBox
                    placeholder="PASSWORD"
                    type="password"
                    ref={userPswd}
                  />
                </div>
              </WriteBox>
              <ClickBox>
                <CheckPswd>아이디와 비밀번호를 확인해주세요</CheckPswd>
                <LoginBtn
                  onClick={() => {
                    Login();
                  }}
                >
                  로그인
                </LoginBtn>
              </ClickBox>
            </ModalContainer>
          </Background>
        ) : null
      ) : showModal ? (
        <Background>
          <ModalContainer>
            <ExitBtn onClick={closeModal} id="exitBtn">
              X
            </ExitBtn>
            <TitleBox>회원가입</TitleBox>
            <WriteBox>
              <div>
                <TextBox>아이디</TextBox>
                <InputBox placeholder="ID" ref={idcheck} />
                <AlertText>2~8글자/영대소문자,숫자 포함</AlertText>
                <TextBox>비밀번호</TextBox>
                <InputBox
                  placeholder="PASSWORD"
                  ref={pswdcheck}
                  type="password"
                />
                <AlertText>4~10글자/영대소문자,숫자 포함</AlertText>
                <TextBox>비밀번호 재확인</TextBox>
                <InputBox
                  placeholder="PASSWORD"
                  ref={pswdcheck2}
                  type="password"
                />
                <CheckPswd id="pswdnotion">
                  아이디와 비밀번호를 확인해주세요
                </CheckPswd>
                <CheckPswd id="pswdnotion2">특수문자를 제외해주세요</CheckPswd>
              </div>
            </WriteBox>
            <ClickBox>
              <RegisterBtn
                onClick={() => {
                  Getregister();
                }}
              >
                회원가입
              </RegisterBtn>
            </ClickBox>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
}

// 모달 부분 시작
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
  background: #cacaca;
  border-radius: 10px;
`;
// 모달 부분 끝

const ExitBtn = styled.button`
  margin-top: -5px;
  margin-right: -5px;
  float: right;
  color: #e06c6c;
  font-size: 1.3em;
  background-color: #cacaca;
  border: 1px solid #cacaca;
  :hover {
    color: red;
  }
`;

const TitleBox = styled.div`
  margin: auto;
  margin-top: 30px;
  font-size: 1.4em;
  text-align: center;
  font-weight: 500;
`;

const TextBox = styled.div`
  font-size: 1.1em;
  margin-top: 10px;
`;

const RegisterBtn = styled.button`
  background-color: #fff;
  border-radius: 6px;
  border: 4px solid white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 110%;
`;

const LoginBtn = styled.button`
  background-color: #fff;
  border-radius: 6px;
  border: 4px solid white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  font-size: 110%;
`;

const ClickBox = styled.div`
  text-align: center;
`;

const WriteBox = styled.div`
  justify-content: center;
  width: 50%;
  margin: 15px 30px 0px 90px;
`;

const InputBox = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  width: 250px;
  margin-bottom: 5px;
`;

const AlertText = styled.div`
  margin-top: 3px;
  margin-bottom: 12px;
  color: #6a6a6a;
`;

const CheckPswd = styled.div`
  display: none;
  color: #e06c6c;
  margin-top: 5px;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

export default Register;
