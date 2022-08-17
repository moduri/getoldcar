import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  _PostComment,
  _GetComment,
  _DeleteComment,
} from "../../redux/commentSlice";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

function Comment() {
  const dispatch = useDispatch();
  const comments_ref = useRef(null);
  const params = useParams();
  const [cookies] = useCookies();
  const state = useSelector((state) => state.commentSlice.comment);
  const postId2 = params.cd;

  useEffect(() => {
    dispatch(_GetComment({ id: postId2, token: cookies.id }));
  }, []);

  const stateForMap = state.slice().sort((a, b) => {
    return b.commentId - a.commentId;
  });

  return (
    <div>
      <input ref={comments_ref} />
      <button
        onClick={() => {
          dispatch(
            _PostComment({
              postCmt: comments_ref?.current?.value,
              Id: postId2,
              token: cookies.id,
            })
          );
        }}
      >
        작성
      </button>
      <div>
        {stateForMap?.map((value) => {
          return (
            <CommentBox key={value.commentId}>
              <Text>{value.nickname}</Text>
              <Text>{value.comment}</Text>
              <BtnBox>
                <Text>{value?.createdAt?.slice(5, 10)}</Text>
                <button
                  onClick={() => {
                    dispatch(
                      _DeleteComment({ id: value.commentId, token: cookies.id })
                    );
                  }}
                >
                  삭제
                </button>
              </BtnBox>
            </CommentBox>
          );
        })}
      </div>
    </div>
  );
}

const CommentBox = styled.div`
  display: flex;
  min-width: 400px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const BtnBox = styled.div`
  display: flex;
  margin-left: 60px;
`;

const Text = styled.div`
  margin-right: 30px;
`;

export default Comment;
