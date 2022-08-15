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
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const [cookies] = useCookies(["garbageCookie"]);
  // useEffect(() => {
  //   if (!cookies.garbageCookie) {
  //     navigate("/");
  //   }
  //   dispatch(pickPostAysnc());
  // }, []);

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
        <Title>{location.state.title}</Title>
        <Url>{location.state.url}</Url>
        {/* <Id>아이디:{array[0].id}</Id> */}
        <Body>{location.state.content}</Body>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
    </>
  );
};

export default Detail;
