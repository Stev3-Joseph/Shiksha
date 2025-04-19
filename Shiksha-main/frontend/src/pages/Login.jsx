import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import checkSession from "../util/session";
import logout from "../util/logout";
import Logo from "../components/Logo";
import Submit from "../components/buttons/Submit";
import { useState } from "react";
const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (data) => {
        if ((data["name"]).length < 3) {
            alert("Name should be atleast 3 characters long");
            return false;
        } else if (data["mobile"].toString().length !== 10) {
            alert("Mobile number should be 10 digits long");
            return false;
        }
        return true;
    };
    async function handleSubmit(e){
        e.preventDefault();
        setIsSubmitting(true);
        let URL = import.meta.env.VITE_REACT_API_URL + "/api/login";
        
        let data = {
            "name": e.target["full-name"].value.trim(),
            "mobile": parseInt(e.target["mobile"].value),
            "date_of_birth": e.target["dob"].value
        }
        if(!validate(data)){
            setIsSubmitting(false);
            return;
        }
        try {
            const res = await axios.post(URL, data);
            const response = res.data;
            console.log(response);
            //Store userId and sessionId in local storage
            if(response.test_completed){
                alert("You have already completed the test. You can't take the test again.");
                await logout();
                return;
            }
            
            if(res.status === 200){
                localStorage.setItem("userId", response.user.user_id);
                localStorage.setItem("sessionId", response.session_id);
                localStorage.setItem("currentSection", response.current_section);
                alert(response.message);
                window.location.href = "/test";
            }
        }catch(err){
            alert(err.response.data.detail);
            console.log(err);
        }finally{
            setIsSubmitting(false);
        }
    }

    useEffect(()=>{
        async function redirect() {
            let session = await checkSession();
            if (session) {
                alert("You have already logged in. Start the test.");
                window.location.href = "/test";
            }
        }
        redirect();
    },[]);
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <Logo/>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-black text-center mb-3">Login to start test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <hr />
                <p className="text-center mb-6 mt-3">Not registered yet? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
                <form onSubmit={handleSubmit} className="space-y-4 md:text-lg text-md text-black font-medium">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name">Full name:</label>
                        <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile">Mobile number:</label>
                        <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob">Birth date:</label>
                        <input required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                    </div>
                    <div className="flex justify-center mt-4">
                        <Submit text="Login" isLoading={isSubmitting} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;