import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _GetPosted } from "../redux/postSlice";
import { useCookies } from "react-cookie";

const Home = () => {
  const state = useSelector((state) => state.Post.data.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  useEffect(() => {
    dispatch(_GetPosted());
  }, []);

  const toWrite = () => {
    if (cookies.id == undefined) {
      alert("로그인을 해주세요");
    } else {
      navigate("/write");
    }
  };

  return (
    <>
      <div>
        <WriteBtn>
          <button
            onClick={() => {
              toWrite();
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
                navigate(`/detail/${value.postId}`);
              }}
            >
              <div>
                <div>{value.nickname}</div>
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
