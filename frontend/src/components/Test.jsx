import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

function Test(props) {
  const [test, setTest] = useState('');

  function getList() {
    axios
      .post("http://localhost:8008/hi")
      .then((res) => {
        setTest(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    getList()
  }, [test])

  console.log(test)

  return (
    <div>
      <h1>Hello, World!</h1>
      {test}
    </div>
  );
}

export default Test;