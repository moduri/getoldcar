import styled from "styled-components";
export const Title = styled.input`
  width: 50vw;
  min-width: 360px;
  height: 4vh;
  display: flex;
  margin: 0 auto;
  margin-top: 3.3rem;
  margin-bottom: 2rem;
  resize: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid white;
  :focus {
    outline: none !important;
    border: 1px solid #c4c0ff;
  }
`;

export const Url = styled.input`
  width: 50vw;
  height: 3vh;
  min-width: 360px;
  display: flex;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  resize: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid white;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Body = styled.textarea`
  width: 50vw;
  height: 27vh;
  min-width: 360px;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  resize: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  padding: 5px;
  resize: none;
  overflow: hidden;
  border: 1px solid white;
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
  width: 60px;
  height: 35px;
  cursor: pointer;
  color: black;
  font-weight: bolder;
  font-size: 20px;
  background-color: white;
  border: 1px solid white;
  &:active {
    transform: scale(0.97);
  }
`;

export const Btn2 = styled.button`
  border-radius: 5px;
  width: 60px;
  height: 35px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: bolder;
  background-color: white;
  border: 1px solid white;
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
