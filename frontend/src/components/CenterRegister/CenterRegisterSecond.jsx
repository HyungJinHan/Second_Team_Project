import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CenterRegisterSecond = ({
  setCenterID,
  setCenterPW,
  setMode,
  consoleAll
}) => {

  /** 중복체크 실행 여부 검사 */
  const [errorMessage, setErrorMessage] = useState('');
  const [errorKey, setErrorKey] = useState(true);

  const idRef = useRef();
  const pwRef = useRef();
  const pwckRef = useRef();

  const jobDone = () => {
    if (errorKey === true) {
      setErrorMessage('센터 이름 중복 체크를 해주세요.');
      return false
    }

    setErrorMessage('');
    pwRef.current.focus();

    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      setErrorMessage(
        '비밀번호를 입력하세요.'
      )
      pwRef.current.focus();
      return false;
    }
    else if (pwRef.current.value.length < 8 || pwRef.current.value.length > 15) {
      setErrorMessage(
        '비밀번호를 길이를 확인하세요.'
      );
      pwRef.current.focus();
      return false;
    }
    else {
      setErrorMessage('');
      pwckRef.current.focus();
    }

    if (pwRef.current.value !== pwckRef.current.value) {
      setErrorMessage(
        '비밀번호가 맞지 않습니다.'
      );
      return false;
    }
    else if (pwRef.current.value === pwckRef.current.value) {
      setErrorMessage('');
    }

    setMode(2);
    consoleAll();
  }

  async function checkOverlap() {
    await axios
      .post('http://localhost:8008/centeridcheck', {
        CENTER_ID: idRef.current.value
      })
      .then((res => {
        if (idRef.current.value === '') {
          setErrorMessage(
            `사업자 등록번호를 입력하세요.`
          )
          idRef.current.focus();
          return false;
        }
        if (idRef.current.value.length < 10) {
          setErrorMessage(
            `사업자 등록번호 길이를 확인하세요.`
          );
          idRef.current.focus();
          return false;
        }
        else {
          const str = idRef.current.value;
          for (var i = 0; i < str.length; i++) {
            const ch = str.substring(i, i + 1);
            if (
              !(ch >= "0" && ch <= "9") ||
              (ch >= "a" && ch <= "z") ||
              (ch >= "A" && ch <= "Z")
            ) {
              setErrorMessage(
                `사업자 등록번호는 숫자로만 입력해주세요.`
              )
              idRef.current.focus();
              return false;
            }
          }
        }
        if ((res.data[0].COUNT >= 1)) {
          setErrorMessage(
            '사업자 등록번호를 입력해 주세요.'
          )
          idRef.current.value = '';
          idRef.current.focus();
          return false;
        }
        if (idRef.current.value.length < 10) {
          setErrorMessage(
            '사업자 등록번호 길이를 확인하세요.'
          );
          idRef.current.focus();
          return false;
        }
        else {
          const str = idRef.current.value;
          for (var i = 0; i < str.length; i++) {
            const ch = str.substring(i, i + 1);
            if (
              !(ch >= "0" && ch <= "9")
            ) {
              setErrorMessage(
                '사업자 등록번호는 숫자로만 입력해주세요.'
              )
              idRef.current.focus();
              return false;
            }
          }
          if ((res.data[0].COUNT >= 1) && (idRef.current.value !== '')) {
            setErrorMessage(
              '사업자 등록번호가 중복됩니다.'
            )
            idRef.current.value = '';
            idRef.current.focus();
            return false;
          }
        }
        if (window.confirm(`사업자 등록번호가 중복되지 않습니다.
사용하시겠습니까?`)) {
          setCenterID(idRef.current.value);
          setErrorKey(false);
          setErrorMessage('')
        } else {
          alert('취소하셨습니다.');
          idRef.current.value = '';
          return false;
        }
      }
      ))
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="id"
          autoComplete="off"
          defaultValue=''
          maxLength="10"
          ref={idRef}
          onChange={(e) => {
            setCenterID(e.target.value);
            setErrorKey(true);
          }}
          placeholder="센터 사업자 등록 번호 입력"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              jobDone();
            }
          }}
        />
        <input
          type='button'
          value='중복 체크'
          onClick={
            checkOverlap
          }
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              checkOverlap();
            }
          }}
        />
      </div>
      <div>
        <input
          type="password"
          name="pw"
          ref={pwRef}
          autoComplete="off"
          defaultValue=''
          onChange={(e) => {
            setCenterPW(e.target.value)
          }}
          placeholder="센터 비밀번호 입력"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              jobDone();
            }
          }}
        />
      </div>
      <div>
        <input
          type="password"
          name="pwck"
          ref={pwckRef}
          autoComplete="off"
          defaultValue=''
          placeholder="센터 비밀번호 확인"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              jobDone();
            }
          }}
        />
      </div>
      <div>
        {setErrorMessage}
      </div>
      <div>
        <button
          onClick={
            jobDone
          }
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default CenterRegisterSecond;