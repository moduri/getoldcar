import React from "react";
import { useParams } from "react-router-dom";

const Register = () => {
  const params = useParams();
  console.log(params);

  return <div>회원가입, 로그인</div>;
};

export default Register;
