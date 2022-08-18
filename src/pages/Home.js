import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _GetPosted } from "../redux/postSlice";
import { useCookies, withCookies } from "react-cookie";

const Home = () => {
  const state = useSelector((state) => state.Post.data.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["id"]);

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
      <Allbox>
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
                <IDbox>
                  <div>작성자</div>
                  <div> {value.nickname}</div>
                </IDbox>
                <Contentbox>
                  <div>내용</div>
                  <div>{value.content}</div>
                </Contentbox>
              </div>
              <div>{value.createdAt?.slice(5, 10)}</div>
            </PostedBox>
          );
        })}
      </Allbox>
    </>
  );
};

const Allbox = styled.div`
  margin-bottom: 50px;
`;

const PostedBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;

  width: 50%;
  min-width: 360px;
  max-height: 55px;
  margin: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px;
  overflow: hidden;
`;

const IDbox = styled.div`
  display: flex;
  margin-bottom: 5px;
  div {
    margin-right: 15px;
  }
`;

const Contentbox = styled.div`
  display: flex;
  div {
    margin-right: 30px;
  }
`;

const WriteBtn = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: 15px auto 5px auto;
  padding-left: 10px;
  button {
    border: 1px solid white;
    font-size: 1em;
    background-color: white;
    border-radius: 4px;
    padding: 4px 5px 4px 5px;
  }
`;

export default withCookies(Home);
