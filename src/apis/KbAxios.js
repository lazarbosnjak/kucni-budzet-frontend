import axios from "axios";

let KbAxios = axios.create({
   baseURL: 'http://localhost:8080/api/v1'
})

KbAxios.interceptors.request.use(
   function add_jwt(config) {
      if (window.localStorage["jwt"]) {
         config.headers["Authorization"]="Bearer " + window.localStorage["jwt"]
      } else if (window.sessionStorage["jwt"]) {
         config.headers["Authorization"]="Bearer " + window.sessionStorage["jwt"]
      } else return config
   }
)

export default KbAxios