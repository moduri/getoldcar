import styled from "styled-components";
export const Title = styled.input`
  width: 50vw;
  height: 10vh;
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
  resize: none;
  font-size: 30px;
  font-weight: 700;
  border-radius: 10px;
  padding: 15px;
`;

export const Url = styled.input`
  width: 50vw;
  height: 5vh;
  display: flex;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  resize: none;
  font-size: 25px;
  font-weight: 600;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Body = styled.textarea`
  width: 50vw;
  height: 50vh;
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;
  resize: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  padding: 15px;
  resize: none;
  overflow: hidden;
`;
// upload{
//     background-color: white;
//     width:60vw;
//     flex-direction:column;
//     display:flex;
// }
export const Btngroup = styled.div`
  justify-content: center;
  display: flex;
  margin: 0 auto;
  gap: 30px;
  padding-top: 15px;
`;

export const Btn1 = styled.button`
  border-radius: 5px;
  width: 70px;
  height: 45px;
  cursor: pointer;
  color: black;
  font-weight: bolder;
  font-size: 20px;
  background-color: white;
  &:active {
    transform: scale(0.97);
  }
`;

export const Btn2 = styled.button`
  border-radius: 5px;
  width: 70px;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: bolder;
  background-color: white;
  &:active {
    transform: scale(0.97);
  }
`;

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.8px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
