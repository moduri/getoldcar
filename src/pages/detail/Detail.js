import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc, deletePost } from "../../redux/postsSlice";
import Comment from "../../components/common/Comment";
import styled from "@emotion/styled";

const Detail = () => {
  const state = useSelector((state) => state.post.posts.posts);
  const state1 = useSelector((state) => state.post.posts);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["id"]);

  useEffect(() => {
    dispatch(pickPostAysnc({ id: params.cd, cookie: cookies.id }));
  }, [deletePost]);

  const updateView = () => {
    if (cookies.id) {
      navigate(`/write/${params.cd}`, { state: "edit" });
    } else {
      alert("권한이없습니다. 로그인을 해주세요!");
    }
  };

  const removeView = () => {
    dispatch(deletePost({ id: params.cd, cookie: cookies.id }));
    navigate("/");
  };
  return (
    <>
      <HeadBox>
        <div>{state?.nickname}</div>
        <div>{state?.title}</div>
        <div>
          <EditDeleteBtn
            onClick={() => {
              updateView();
            }}
          >
            수정
          </EditDeleteBtn>
          <EditDeleteBtn onClick={removeView}>삭제</EditDeleteBtn>
        </div>
      </HeadBox>

      <div>
        <UrlBox>
          <a href={`${state?.url}`}>{state?.url}</a>
        </UrlBox>
        <ContentBox>{state?.content}</ContentBox>
      </div>
      <Comment />
    </>
  );
};

const HeadBox = styled.div`
  display: flex;
  background-color: white;
  width: 50%;
  justify-content: space-between;
  margin: 20px auto 20px auto;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  min-width: 360px;
`;

const EditDeleteBtn = styled.button`
  margin-right: 15px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
`;

const UrlBox = styled.div`
  background-color: white;
  width: 50%;
  margin: 0px auto 15px auto;
  padding: 10px;
  border-radius: 5px;
  height: 20px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  min-width: 360px;
`;

const ContentBox = styled.div`
  background-color: white;
  font-size: 18px;
  width: 50vw;
  height: 23vh;
  border: 1px solid white;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 5px;
  resize: none;
  display: flex;
  white-space: nowrap;
  min-width: 360px;
`;

export default Detail;
