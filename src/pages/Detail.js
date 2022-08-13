import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const params = useParams();
  const img_ref = useRef();
  const getedState = location.state;
  console.log(params.id);

  return (
    <>
      <div>{getedState.createdAt}</div>
      <div>{getedState.nickname}</div>
      <div>{getedState.title}</div>
    </>
  );
}

export default Detail;
