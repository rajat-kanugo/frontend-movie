import axios from "axios";

export default axios.create({
    baseURL:'https://movie-b-0ua0.onrender.com',
    headers:{"ngrok-skip-browser-warning": "true"},
   
});



   