import axios from 'axios';

const axiosInstance = axios.create(
    {
        baseURL: "http://localhost:5000/",
        headers: {
            api_key: "c135fb872cfb3dd47ff47ee1ec5bbcd2",
        }
    }
)
export default axiosInstance;