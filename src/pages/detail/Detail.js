import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Reply from "./Reply";
import { Title, Body, PostWrapper, Url } from "./styles";
import { Header, StyledLink, LinkBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc,deletePost,updatePost } from "../../redux/postsSlice";

import { useLocation } from "react-router-dom";
import Comment from "../../components/common/Comment";
const Detail = () => {
  const state = useSelector((state) => state.post.posts.posts);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [cookies] = useCookies(["id"]);

  
  console.log(cookies);
  console.log(params.cd, cookies.id);


  useEffect(() => {
    dispatch(pickPostAysnc({ id: params.cd, cookie: cookies.id }));
  }, [deletePost]);

  const updateView = () =>{
    console.log("시작입니다.")
    navigate("/write",{state:'edit'});
    console.log(state);
    // dispatch(updatePost({id:params.cd,cookie:cookies.id}));
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
      <StyledLink to="/">메인 페이지</StyledLink>
      <div className='write_option_div'>
        <input type='button' value='수정' onClick={()=>{updateView()}}/>
        <input type='button' value='삭제' onClick={removeView} />
      </div>
      <Header>
        작성자:{state?.nickname}
      </Header>
      <PostWrapper>
        <Title>{state?.title}</Title>
        <Url>{state?.url}</Url>
        <Body>{state?.content}</Body>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
      <Comment />
    </>
  );
};

export default Detail;

