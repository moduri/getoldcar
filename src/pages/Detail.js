import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Detail() {
  const state = useSelector((state) => state);
  const location = useLocation();
  const params = useParams();
  console.log(params.id);
  console.log(location.state);

  return <div>아무말</div>;
}

export default Detail;
