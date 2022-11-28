import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Test(props) {
  const MainCenter = styled.div`
    text-align: center;
    padding-top: 3.125rem;
  `;

  const [test, setTest] = useState("");
  const [hello, setHello] = useState(
    <p style={{ color: "red" }}>
      참고로 이거 <b>State 값</b>을 이용해서 출력하고 있는 것
    </p>
  );
  const [yaDanya, setYaDanya] = useState(
    <p>
      <b style={{ color: "blue" }}>admin_kcj</b> 또는{" "}
      <b style={{ color: "blue" }}>admin_hhj</b> 입력 바람
    </p>
  );
  const adminRef = useRef();
  const navigate = useNavigate();

  function getList() {
    axios
      .post("http://localhost:8008/hi", { ADMIN_ID: adminRef.current.value })
      .then((res) => {
        setTest(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  console.log(yaDanya);

  const handleKeyPress = (e) => {
    if (e.key === "q") {
      navigate("/fitnessresult?id=kcj");
    } else if (e.key === "c") {
      navigate("/chatjoin");
    }
  };

  return (
    <MainCenter>
      <input onKeyPress={handleKeyPress} placeholder="q : 결과창 / c : 채팅" />
      <h1>외않되/. 아마따1</h1>
      <h3>{hello}</h3>
      <h1>않이 이개 머조/</h1>
      <input
        defaultValue=""
        placeholder="Press Enter"
        type="text"
        ref={adminRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (
              adminRef.current.value === "" ||
              adminRef.current.value === undefined
            ) {
              alert("아이디를 입력하세요.");
              adminRef.current.focus();
              setYaDanya(
                <p>
                  <b>admin_kcj</b> 또는 <b>admin_hhj</b> 입력 바람
                </p>
              );
              return false;
            } else {
              getList();
              adminRef.current.value = "";
            }
          }
        }}
      />
      <br />
      <br />
      {test === "" ? (
        yaDanya
      ) : (
        <div>
          ID : {test.ADMIN_ID}
          <br />
          <br />
          PW : {test.ADMIN_PASSWORD}
          <br />
          <br />
          Nickname : {test.ADMIN_NICKNAME}
          <br />
          <br />
          <a href="/">Go To Main</a>
        </div>
      )}
      <br />
      <input
        type="button"
        value="Go To Chat"
        onClick={() => {
          navigate("/chatjoin");
        }}
      />
      &nbsp;&nbsp;
      <input
        type="button"
        value="search"
        onClick={() => {
          navigate("/Category");
        }}
      />
      <br />
      <br />
      <br />
      <input
        type="button"
        value="유저 로그인"
        onClick={() => {
          navigate("/userlogin");
        }}
      />
      &nbsp;&nbsp;
      <input
        type="button"
        value="유저 회원가입"
        onClick={() => {
          navigate("/userjoin");
        }}
      />
      <br />
      <br />
      <br />
      <input
        type="button"
        value="센터 로그인"
        onClick={() => {
          navigate("/centerlogin");
        }}
      />
      &nbsp;&nbsp;
      <input
        type="button"
        value="센터 회원가입"
        onClick={() => {
          navigate("/centerjoin");
        }}
      />
      <br />
      <br />
      <br />
      <a href="/video?exec=squat">스쿼트</a>
      &nbsp;&nbsp;
      <a href="/video?exec=pullup">풀업</a>
      &nbsp;&nbsp;
      <a href="/video?exec=pushup">푸쉬업</a>
      &nbsp;&nbsp;
      <a href="/video?exec=situp">싯업</a>
      &nbsp;&nbsp;
      <a href="/video?exec=curl">덤벨컬</a>
      &nbsp;&nbsp;
      <br />
      <br />
      <br />
      <a href="/videoc?exec=squat">스쿼트챌린지</a>
      &nbsp;&nbsp;
      <a href="/videoc?exec=pullup">풀업챌린지</a>
      &nbsp;&nbsp;
      <a href="/videoc?exec=pushup">푸쉬업챌린지</a>
      &nbsp;&nbsp;
      <a href="/videoc?exec=situp">싯업챌린지</a>
      &nbsp;&nbsp;
      <a href="/videoc?exec=curl">덤벨컬챌린지</a>
      &nbsp;&nbsp;
    </MainCenter>
  );
}

export default Test;
