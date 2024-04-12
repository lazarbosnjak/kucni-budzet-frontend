import KbAxios from "../../apis/KbAxios";
import { jwtDecode } from 'jwt-decode'

export const login = async (email, password, rememberMe) => {

   const body = {
      email: email,
      password: password
   }
   try {
      const resp = await KbAxios.post("/korisnici/auth", body)
      const jwt_decoded = jwtDecode(resp.data)
      if (rememberMe == true){
         window.localStorage.setItem("jwt", resp.data)
         window.localStorage.setItem("role", jwt_decoded.role.authority)
      }
      else{
         window.sessionStorage.setItem("jwt", resp.data)
         window.sessionStorage.setItem("role", jwt_decoded.role.authority)
      }
      window.location.replace("http://localhost:3000")
   } catch (e) {
      console.log(e)
      alert("Login FAILED")
   }
}

export const logout = () => {
   window.localStorage.removeItem('jwt')
   window.localStorage.removeItem('role')
   window.sessionStorage.removeItem('jwt')
   window.sessionStorage.removeItem('role')
   window.location.replace("http://localhost:3000")
}