import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'http://localhost:8081/api/v1'
// });

// export default {
//   install: function(Vue) {
//     Object.defineProperty(Vue.prototype, '$axios', { value: instance });
//   }
// }


const api = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL, // Thay đổi URL cơ sở của bạn
  timeout: 10000, // Thay đổi thời gian timeout nếu cần
  // headers: { 
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTcyNjQ0ODg3NywiZXhwIjoxNzI2NTA4ODc3fQ.KsFEaZSL6ECiJocTjGsfBHVv5b_sR_n4lLysjUyW8s8`
  //  }
});
export default api;
