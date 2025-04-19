import axios from "axios";

const checkSession = async()=>{
    const sessionId = localStorage.getItem("sessionId");
    if(!sessionId){
        return false;
    }
    const URL = import.meta.env.VITE_REACT_API_URL + "/api/session";
    try{
        const response = await axios.post(URL,null, {
            params:{
                session_id : sessionId
            }
        });
        return response.data.valid;
    }catch(err){
        console.log(err);
        return false;
    }
}

export default checkSession;