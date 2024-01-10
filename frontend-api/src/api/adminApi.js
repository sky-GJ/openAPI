import axios from "../utils/request.js";
import {parseToken} from "../utils/jwts.js";

export const login = async (params)=>{
    const res = await axios.post('/api/user/login', params)
    if (res.data.data) {
        localStorage.setItem('token', JSON.stringify(parseToken(res.data.data)))
    }
    return res
}