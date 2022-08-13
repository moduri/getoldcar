import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostWrapper = styled.div`
  /* border: 1px white solid;
  margin: auto;
  width: 70vw;
  padding: 20px; */
`;

export const Title = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 10px;
  border-bottom: solid 5px gray;
`;

export const Url = styled.input`
  margin: 0 auto;
  width: 70vw;
  margin-top: 20px;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 10px;
  border-bottom: solid 5px gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Author = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin: 0 auto;
  width: 69vw;
  padding: 10px 10px;
`;

export const Body = styled.div`
  font-size: 25px;
  width: 65vw;
  height: 30vh;
  border: 1px solid gray;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 15px;
  resize: none;
  display: flex;
  white-space: pre-wrap;
`;
export const CommentsBoxWrap = styled.div`
  border: 2px solid gray;
  width: 65vw;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
`;

export const AuthorBox = styled.div`
  width: 70vw;
  font-size: 15px;
`;
export const CommentsBox = styled.div`
  width: 70vw;
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 65vw;
  height: 50px;
  margin-right: 20px;
  resize: none;
  padding: 0 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 5vw;
  height: 5vh;
  padding: 15px;
  font-weight: 700;
`;

export const Formwrap = styled.div`
  margin: auto;
  width: 65vw;
  display: flex;
`;

export const Header = styled.div`
  font-weight: 800;
  font-size: 55px;
  line-height: 46px;
  letter-spacing: -0.8px;
  text-align: center;
  margin: 0 auto;
  margin-top: 60px;
  width: 800px;
  padding: 10px;
`;

export const LinkBox = styled.div`
  text-decoration: none;
  width: 825px;
  margin: 0 auto;
  text-align: right;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 19px;
`;
