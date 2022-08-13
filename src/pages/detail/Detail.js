import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Reply from "./Reply";
import { Title, Body, PostWrapper, Url } from "./styles";
import { Header, StyledLink, LinkBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { pickPostAysnc } from "../../redux/postsSlice";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["garbageCookie"]);
  // useEffect(() => {
  //   if (!cookies.garbageCookie) {
  //     navigate("/");
  //   }
  //   dispatch(pickPostAysnc());
  // }, []);

  const pages = useSelector((state) => state.Post.data);

  const array = pages.filter((v) => v.postId == id);

  return (
    <>
      <Header>
        PickCar
        <LinkBox>
          <StyledLink to="/">메인 페이지</StyledLink>
        </LinkBox>
      </Header>
      <PostWrapper>
        <Title>{array[0].title}</Title>
        <Url>{array[0].url}</Url>
        {/* <Id>아이디:{array[0].id}</Id> */}
        <Body>{array[0].content}</Body>
      </PostWrapper>
      {/* <Reply postId={id} /> */}
    </>
  );
};

export default Detail;
