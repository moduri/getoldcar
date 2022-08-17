import React, { useEffect, useReducer, useRef } from "react";
import { Title, Body, Btngroup, Btn1, Btn2, Header, Url } from "./styles";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
import { postWritesThunk } from "../../redux/writeSlice";
import { useCookies, withCookies } from "react-cookie";
import { updatePost } from "../../redux/postsSlice";
import { useLocation } from "react-router";

const Write = () => {
  const state1 = useSelector((state) => state.nicknameSlice.nickanme); //닉네임 불러오기
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["id"]);
  const { state } = useLocation();
  console.log(state);
  console.log("확인용주석")
  // console.log(cookies);

  const [write, setWrite] = useState({
    title: "",
    content: "",
    url: "",
  });
  // console.log(cookies.id);
  // console.log(state);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  const onEdit = () => {
    dispatch(updatePost({id:params.cd,cookie:cookies.id}));
    console.log(params.cd);
  }
  const onSubmit = (e) => {
    // e.prventDefault();
    dispatch(
      postWritesThunk([
        {
          title: write.title,
          content: write.content,
          url: write.url,
        },
        { id: cookies.id },
      ])
    );
    alert("글 등록이 완료되었습니다.");
    navigate("/");
  };

  // useEffect(() => {
  //   dispatch(postWritesThunk())}
  // ,[updatePost]);

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
      <Btn1 type="button" onClick={state === 'edit' ? onEdit : onSubmit }>
          작성
        </Btn1>
        {/* <Btn1 type="button" onClick={onSubmit}>
          작성
        </Btn1> */}
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
export default withCookies(Write);

// pull request확인용 주석
