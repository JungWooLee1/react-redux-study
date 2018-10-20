import axios from 'axios';

const API_KEY = 'a2bf025a66228c2f6d70eb022b553ce4';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

// 액션 생성자와 리듀서 사이의 액션 타입을 계속 일정하게 유지하기 위한 문자
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
