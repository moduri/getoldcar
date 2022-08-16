import React, { useEffect } from "react";
import { Title, Body, Btngroup, Btn1, Btn2, Header, Url } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postWritesThunk } from "../../redux/writeSlice";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
// import nextId from "react-id-generator";

// import jwt_decode from "jwt-decode";

// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2NjA2MTM2Njd9.s2I2UU2IT2_FyOvHW1XL-X8uQoNBFFHXOtKsDKUDFSg";
// var decoded = jwt_decode(token);

// console.log(decoded);
// var decodedHeader = jwt_decode(token, { header: true });
// console.log(decodedHeader);

const Write = () => {
  // const htmlId = nextId();

  const [cookies] = useCookies();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [write, setWrite] = useState({
    title: "",
    content: "",
    url: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   if (!cookies) {
  //     navigate("/");
  //   }
  // }, []);

  const onSubmit = (e) => {
    // e.prventDefault();
    dispatch(
      postWritesThunk(
        [
          {
            title: write.title,
            content: write.content,
            url: write.url,
          },
          {
            id: cookies
          }
        ]));
    alert("글 등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <div>
      <Header>PickCar</Header>
      <Title
        value={write.title}
        name="title"
        onChange={onChangeHandler}
        placeholder="제목을 입력해주세요."
        maxLength={30}
      ></Title>
      <Url
        value={write.url}
        name="url"
        onChange={onChangeHandler}
        placeholder="url을 입력해주세요."
      ></Url>
      <Body
        value={write.content}
        name="content"
        onChange={onChangeHandler}
        placeholder="내용을 입력해주세요."
        maxLength={500}
      ></Body>
      <Btngroup>
        <Btn1 type="button" onClick={onSubmit}>
          작성
        </Btn1>
        <Btn2
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </Btn2>
      </Btngroup>
    </div>
  );
};
export default Write;

// pull request확인용 주석


// const Write = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [write,setWrite] = useState("")
//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setWrite({
//       ...location,
//       [name]: value,
//     });
//   };

//   const onSubmit = (e) => {
//     // e.prventDefault();
//     dispatch(
//       postWritesThunk({
//         title: write.title,
//         content: write.content,
//         url: write.url,
//       })
//     );
//     alert("글 등록이 완료되었습니다.");
//   };
