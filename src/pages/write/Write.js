import React from "react";
import { Title, Body, Btngroup, Btn1, Btn2, Url } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postWritesThunk } from "../../redux/writeSlice";
import { useCookies, withCookies } from "react-cookie";
import { updatePost } from "../../redux/postsSlice";
import { useLocation } from "react-router";

const Write = () => {
  const state11 = useSelector((state) => state.nicknameSlice.nickanme); //닉네임 불러오기
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const { state } = useLocation();

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

  // 수정하기
  const onEdit = async () => {
    if (!write.url.includes("http")) {
      alert("http 를 붙혀서 작성해주세요!");
    } else if (write.content.trim().length === 0) {
      alert("내용을 작성해주세요!");
    } else {
      await dispatch(
        updatePost([
          { postId: params.cd, cookie: cookies.id },
          { content: write.content, url: write.url, title: write.title },
        ])
      );
      navigate(`/detail/${params.cd}`);
    }
  };

  // 작성하기
  const onSubmit = () => {
    let Inputurl = write.url;
    if (!Inputurl.includes("http")) {
      alert("http 를 붙혀서 작성해주세요!");
    } else if (write.content.trim().length === 0) {
      alert("내용을 작성해주세요!");
    } else {
      dispatch(
        postWritesThunk([
          {
            title: write.title,
            content: write.content,
            url: Inputurl,
          },
          { id: cookies.id },
        ])
      );
      alert("글 등록이 완료되었습니다.");
      navigate("/");
    }
  };

  return (
    <div>
      <Title
        value={write.title}
        name="title"
        onChange={onChangeHandler}
        placeholder="제목을 입력해주세요"
        maxLength={30}
      ></Title>
      <Url
        value={write.value}
        name="url"
        onChange={onChangeHandler}
        placeholder="url을 입력해주세요"
      ></Url>
      <Body
        value={write.body}
        name="content"
        onChange={onChangeHandler}
        placeholder="내용을 입력해주세요"
        maxLength={500}
      ></Body>
      <Btngroup>
        <Btn1 type="button" onClick={state === "edit" ? onEdit : onSubmit}>
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
export default withCookies(Write);
