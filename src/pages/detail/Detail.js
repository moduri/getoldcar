import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Reply from "./Reply";
import { Title, Body, PostWrapper, Url } from "./styles";
import { Header, StyledLink, LinkBox,DelEdit,Titlebuttonwrap,button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc,deletePost,updatePost } from "../../redux/postsSlice";

import { useLocation } from "react-router-dom";
import Comment from "../../components/common/Comment";
import { current } from "@reduxjs/toolkit";
const Detail = () => {
  const state = useSelector((state) => state.post.posts.posts);
  const state1 = useSelector((state)=> state.post.posts);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

console.log(state1);
  const [cookies] = useCookies(["id"]);

  console.log(params);
  console.log(cookies);
  console.log(params.cd, cookies.id);

  useEffect(() => {
    dispatch(pickPostAysnc({ id: params.cd, cookie: cookies.id }));
  }, [deletePost]);

  const updateView = () =>{
    console.log("시작입니다.")
    console.log(state.userId);
    console.log(state);
    // if(cookies.id ){
    //   alert("권한이없습니다.");
    // }else{
    // navigate(`/write/${params.cd}`,{state:'edit'});
    // }
    if(cookies.id ){
      navigate(`/write/${params.cd}`,{state:'edit'});
    }else{
      alert('권한이없습니다.');
    
    }
    console.log(state);
    console.log(2);
  }

  const removeView = () => {
    //  if(window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {
    //   console.log("1");
    // }
    dispatch(deletePost({id:params.cd, cookie: cookies.id}));
    // alert("게시글을 삭제했습니다.") 작성한사람만 삭제할수있어야함..
    navigate("/");
  }

      //이제 게시글을 작성한사람만 게시글을 삭제할수있는 조건 추가?
  // useEffect(() => {
  //   dispatch(deletePost({id:params.cd, cookie: cookies.id}));
  // },[deletePost]);


  // const pages = useSelector((state) => state.Post.data);
  return (
    <>
      {/* <StyledLink to="/">메인 페이지</StyledLink> */}

      <Header>
        작성자:{state?.nickname}      
      </Header>
      
      <Titlebuttonwrap>
        <Title>{state?.title}</Title>
        <DelEdit> 
        <input type='button' value='수정' height={5} onClick={()=>{updateView()}}/>
        <input type='button' value='삭제' onClick={removeView} />
      </DelEdit>
      </Titlebuttonwrap>
      <PostWrapper>
        <Url><a href={`${state?.url}`}>{state?.url}</a></Url>
        {/* <Url onClick={goUrl}>{state?.title}</Url> */}
        <Body>{state?.content}</Body>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
      <Comment />
    </>
  );
};

export default Detail;

