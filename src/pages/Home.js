import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _GetPosted } from "../redux/postSlice";

const Home = () => {
  const state = useSelector((state) => state.Post.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    dispatch(_GetPosted());
  }, []);

  return (
    <>
      <div>
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
                  },
                });
              }}
            >
              <div>
                <div>{value.nickname}</div>
                <div>{value.title}</div>
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

export default Home;
