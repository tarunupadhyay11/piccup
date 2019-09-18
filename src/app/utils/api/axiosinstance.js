import axios from 'axios';


export default axiosInstance = axios.create({
    baseURL: 'http://piccupkw.com/piccup/api/index.php/',
    timeout: 3000,
  });