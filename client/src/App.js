import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import './App.css';

















function App() {
  return (
    <CreatePost />
  //  <BrowserRouter>
  //    <Routes>
  //      <Route path="/createpost"
  //             element={<CreatePost />} />
  //    </Routes>
  //  </BrowserRouter>
  );
}

export default App;
