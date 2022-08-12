import React from "react";
import { useParams } from "react-router-dom";

const Register = () => {
  const params = useParams();
  const result = Number(params.path);

  return <div>{result ? <div>로그인</div> : <div>회원가입</div>}</div>;
};

export default Register;
