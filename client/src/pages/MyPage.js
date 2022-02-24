import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const MyPage = (props) => {
  return (
    <>
      <Header
        setIsLoginCheck={props.setIsLoginCheck}
        isLoginCheck={props.isLoginCheck}
      />
      <h1>마이페이지 작업중</h1>
    </>
  );
};

export default MyPage;
