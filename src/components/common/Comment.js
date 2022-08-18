import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import {
  _PostComment,
  _GetComment,
  _DeleteComment,
} from "../../redux/commentSlice";

function Comment() {
  const state = useSelector((state) => state.commentSlice.comment);
  const dispatch = useDispatch();
  const comments_ref = useRef(null);
  const params = useParams();
  const [cookies] = useCookies();
  const postId2 = params.cd;

  useEffect(() => {
    dispatch(_GetComment({ id: postId2, token: cookies.id }));
  }, []);

  // state 순서를 역순으로.
  const stateForMap = state.slice().sort((a, b) => {
    return b.commentId - a.commentId;
  });

  // 댓글 작성하기 엔터누르면 바로 등록
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      document.getElementById("write").click();
    }
  };

  return (
    <BicBox>
      <InputBtn>
        <InputPart ref={comments_ref} onKeyPress={pressEnter} />
        <WriteBtn
          onClick={() => {
            dispatch(
              _PostComment({
                postCmt: comments_ref?.current?.value,
                Id: postId2,
                token: cookies.id,
              })
            );
            comments_ref.current.value = "";
          }}
          id="write"
        >
          작성
        </WriteBtn>
      </InputBtn>
      <div>
        {stateForMap?.map((value) => {
          return (
            <CommentBox key={value.commentId}>
              <Text>{value.nickname}</Text>
              <Text>{value.comment}</Text>
              <BtnBox>
                <Text>{value?.createdAt?.slice(5, 10)}</Text>
                <DeleteBtn
                  onClick={() => {
                    dispatch(
                      _DeleteComment({ id: value.commentId, token: cookies.id })
                    );
                  }}
                >
                  삭제
                </DeleteBtn>
              </BtnBox>
            </CommentBox>
          );
        })}
      </div>
    </BicBox>
  );
}

const BicBox = styled.div`
  margin-bottom: 50px;
  min-width: 350px;
`;

const InputBtn = styled.div`
  display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InputPart = styled.input`
  width: 85%;
  height: 20px;
  border: 1px solid white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  padding: 3px;
`;

const WriteBtn = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
`;

const CommentBox = styled.div`
  display: flex;
  min-width: 400px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

const BtnBox = styled.div`
  display: flex;
  margin-left: 60px;
`;

const Text = styled.div`
  margin-right: 30px;
`;

const DeleteBtn = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
`;

export default Comment;
