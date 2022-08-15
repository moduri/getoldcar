import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _GetPosted } from "../redux/postSlice";

const Home = () => {
  const state = useSelector((state) => state.Post.data.posts);
  const state2 = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(state2);

  useEffect(() => {
    dispatch(_GetPosted());
  }, []);

  return (
    <>
      <div>
        <WriteBtn>
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            작성하기
          </button>
        </WriteBtn>
        {state?.map((value) => {
          return (
            <PostedBox
              key={value.postId}
              onClick={() => {
                navigate(`/detail/${value.postId}`, {
                  state: {
                    createdAt: value.createdAt,
                    updatedAt: value.updatedAt,
                    useId: value.userId,
                    nickname: value.nickname,
                    title: value.title,
                    url:value.url,
                    content:value.content,
                    //여기에 title url content를 넣어줘야 detail페이지에서 
                  },
                });
              }}
            >
              <div>
                <div>{value.nickname}</div>
                <div>{value.title}</div>
                <div>{value.url}</div>
                <div>{value.content}</div>
              </div>
              <div>{value.createdAt}</div>
            </PostedBox>
          );
        })}
      </div>
    </>
  );
};

const PostedBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;

  width: 50%;
  max-height: 55px;
  margin: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px;
  overflow: hidden;
`;

const WriteBtn = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: 15px auto 5px auto;
  button {
    border: 1px solid white;
    font-size: 1.1em;
    background-color: white;
    border-radius: 4px;
  }
`;

export default Home;
