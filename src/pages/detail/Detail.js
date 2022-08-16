import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Reply from "./Reply";
import { Title, Body, PostWrapper, Url } from "./styles";
import { Header, StyledLink, LinkBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc } from "../../redux/postsSlice";
import { useLocation } from "react-router-dom";
const Detail = () => {
  const { cd } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ad,setAd] =useState();
  // const location = useLocation();
  // console.log(location);
  // const [cookies] = useCookies(["garbageCookie"]);

  const pages = useSelector((state) => state.Post.data.posts);
  // console.log(pages);
console.log(cd);
  // console.log(cd);
  // const array = pages?.filter((v) => v.postId ==  cd);
  // console.log(array);
  
  useEffect(()=>{
    dispatch(pickPostAysnc(cd));
  },[]);

  // if(!pages){
  //   return null
  // };
  // useEffect(() => {
  //   setAd(array)
  // }, []);

  return (
    <>
      <Header>
        PickCar
        <LinkBox>
          <StyledLink to="/">메인 페이지</StyledLink>
        </LinkBox>
      </Header>
      <PostWrapper>
        <Title>{cd.title}</Title>
        <Url>{cd.url}</Url> 
        {/* <Id>아이디:{array[0].id}</Id> */}
        <Body>{cd.content}</Body>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
    </>
  );
};

export default Detail;
