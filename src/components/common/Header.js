import React, { useState } from "react";
import styled from "styled-components";
import Register from "../../pages/Register";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [decidepage, setDecidepage] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const toLogin = () => {
    setDecidepage(true);
  };
  const toRegister = () => {
    setDecidepage(false);
  };

  const getedToken = true;

  return (
    <>
      <Head>
        <div>
          {getedToken ? (
            <>
              <button
                onClick={() => {
                  toLogin();
                  openModal();
                }}
              >
                로그인!
              </button>
              <button
                onClick={() => {
                  toRegister();
                  openModal();
                }}
              >
                회원가입!
              </button>
            </>
          ) : null}

          <Register
            showModal={showModal}
            closeModal={closeModal}
            decidepage={decidepage}
          ></Register>
        </div>
        헤드
      </Head>
      <Register />
    </>
  );
}

const Head = styled.div`
  height: 80px;
  background-color: #cbcbfe;
`;

export default Header;
