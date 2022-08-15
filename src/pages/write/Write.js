import React from "react";
import { Title, Body, Btngroup, Btn1, Btn2, Header, Url } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postWritesThunk } from "../../redux/writeSlice";

const Write = () => {
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

  const onSubmit = (e) => {
    // e.prventDefault();
    dispatch(
      postWritesThunk({
        title: write.title,
        content: write.content,
        url: write.url,
      })
    );
    alert("글 등록이 완료되었습니다.");
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
        value={write.value}
        name="url"
        onChange={onChangeHandler}
        placeholder="url을 입력해주세요."
      ></Url>
      <Body
        value={write.body}
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