import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  console.log('setCooie 함수 실행중');
  console.log(cookies.set(name, value, { ...option }));
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  console.log('getCookie 함수 실행중');
  console.log(cookies.get(name));
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};

//* set cookie
// import { useCookies } from "react-cookie";

// export default function App() {
//   const [cookies, setCookie, removeCookie] = useCookies(["user"])

//? httpOnly: true
