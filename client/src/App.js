import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

import Main from './page/Main';
import Home from './page/Home';
import OAuthKakao from './page/oauth/OAuthKakao';

function App() {
  const [isLoginCheck, setIsLoginCheck] = useState(false);
  const handleIsLogin = () => {
    setIsLoginCheck(!isLoginCheck);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/main"
          element={
            <Main
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
        <Route
          path="/kakao/oauth"
          element={<OAuthKakao setIsLoginCheck={setIsLoginCheck} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
