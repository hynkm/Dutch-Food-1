import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    console.log(response, '내가찾는');

    await onGoogleLogin({
      socialId: googleId,
      socialType: 'google',
      email,
      nickname: name,
    });
    // 구글 로그인 성공시 서버에 전달할 데이터
  };
  const onFailure = (error) => {
    console.log(error);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
