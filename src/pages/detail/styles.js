import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostWrapper = styled.div`
  /* border: 1px white solid;
  margin: auto;
  width: 70vw;
  padding: 20px; */
`;
export const Header = styled.div`
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.8px;
  /* text-align: center; */
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 60vw;
  padding: 10px;
`;

export const Titlebuttonwrap = styled.div`
  display: flex;
`;

export const DelEdit = styled.div`
  /* border: solid 2px gray; */
  display: flex;
  margin-right: 20vw;
  width: 5vw;
  height: 5vh;
`;

export const Title = styled.text`
  margin: 0 auto;
  margin-left: 20vw;
  width: 60vw;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  border: solid 2px gray;
`;

export const Url = styled.div`
  margin: 0 auto;
  width: 60vw;
  border: solid 2px gray;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Body = styled.div`
  font-size: 30px;
  width: 60vw;
  height: 30vh;
  border: 2px solid gray;
  margin: 0 auto;
  margin-bottom: 50px;
  resize: none;
  display: flex;
  white-space: pre-wrap;
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
