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
        {state.map((value) => {
          return (
            <CommentBox key={value.commentId}>
              <div>{value.commentId}</div>
              <div>{value.nickname}</div>
              <div>{value.comment}</div>
              <div>{value.createdAt}</div>
              <button
                onClick={() => {
                  dispatch(
                    _DeleteComment({ id: value.commentId, token: cookies.id })
                  );
                }}
              >
                삭제
              </button>
            </CommentBox>
          );
        })}
      </div>
    </div>
  );
}

const CommentBox = styled.div`
  display: flex;
  div {
    margin-right: 40px;
  }
`;

export default Comment;
