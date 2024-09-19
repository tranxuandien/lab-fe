import axios from 'axios'

const api = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL, // Thay đổi URL cơ sở của bạn
  timeout: 10000, // Thay đổi thời gian timeout nếu cần
  // headers: { 
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTcyNjQ0ODg3NywiZXhwIjoxNzI2NTA4ODc3fQ.KsFEaZSL6ECiJocTjGsfBHVv5b_sR_n4lLysjUyW8s8`
  //  }
});
export default api;
