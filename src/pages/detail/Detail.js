import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Reply from "./Reply";
import { Title, Body, PostWrapper, Url } from "./styles";
import { Header, StyledLink, LinkBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc } from "../../redux/postsSlice";
import { useLocation } from "react-router-dom";
const Detail = () => {
  const state = useSelector((state) => state.post.posts.posts);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [cookies] = useCookies();
  // console.log(params.cd, cookies.id);

  // useEffect(() => {
  //   if (!cookies.garbageCookie) {
  //     navigate("/");
  //   }
  //   dispatch(pickPostAysnc());
  // }, []);

  useEffect(() => {
    dispatch(pickPostAysnc({ id: params.cd, cookie: cookies.id }));
  }, []);

  const pages = useSelector((state) => state.Post.data);

  // const array = pages.filter((v) => v.postId == {id});

  return (
    <>
      <Header>
        PickCar
        <LinkBox>
          <StyledLink to="/">메인 페이지</StyledLink>
        </LinkBox>
      </Header>
      <PostWrapper>
        <div>{state?.postId}</div>
        <div>{state?.nickname}</div>
        <div>{state?.title}</div>
        <div>{state?.content}</div>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
    </>
  );
};

export default Detail;
