import axios from "axios";

const checkSection = async(sectionName)=>{
    const userId = localStorage.getItem("userId");
    const URL = import.meta.env.VITE_REACT_API_URL + "/api/section";
    try {
        const res = await axios.post(URL, null, {
            params: {
                user_id: userId,
                section: sectionName
            }
        });
        return res.data.completed;
    }catch(err){
        console.error("Can't validate section completion");
        console.log(err);
    }
};

export default checkSection;